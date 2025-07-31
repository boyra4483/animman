import { Request, Response } from "express";
import { parse, isValid } from "@telegram-apps/init-data-node";
import jwt from "jsonwebtoken";
import prisma from "@animman/server/prisma";
import InitDataError from "@animman/server/errors/initDataError";

class UserController {
	async auth(req: Request, res: Response) {
		const { initData } = req.body as { initData: string };

		try {
			const userTgData = initDataVerify(initData);
			const user = await prisma.user.upsert({
				where: { telegramId: userTgData.user?.id.toString() },
				update: {
					username: userTgData.user?.username,
					firstName: userTgData.user?.first_name,
					lastName: userTgData.user?.last_name,
					photoUrl: userTgData.user?.photo_url
				},
				create: {
					telegramId: userTgData.user?.id.toString()!,
					username: userTgData.user?.username,
					firstName: userTgData.user?.first_name,
					lastName: userTgData.user?.last_name,
					photoUrl: userTgData.user?.photo_url
				}
			});

			const token = jwt.sign(
				{
					userId: user.id
				},
				process.env.JWT_SECRET!,
				{ expiresIn: "7d" }
			);

			res.cookie("token", token, {
				httpOnly: true,
				sameSite: "strict",
				secure: process.env.NODE_ENV === "production"
			});
			res.json({
				message: "Authorized",
				user
			});
		} catch (error) {
			if (error instanceof InitDataError) {
				res.status(400).json({
					error: `${error.name}: ${error.message}:`
				});
			}
		}
	}

	async isAuth(req: Request, res: Response) {
		const { initData } = req.body as { initData: string };

		try {
			const userTgData = initDataVerify(initData);
			const userDB = await prisma.user.findUnique({
				where: {
					telegramId: userTgData.user?.id.toString()
				}
			});

			console.log(userDB);
			res.status(200).json({
				userData: userDB
			});
		} catch (err) {
			if (err instanceof Error) {
				res.status(400).json({
					error: `${err.name}: ${err.message}`
				});
			}
		}
	}
}

function initDataVerify(initData: string | undefined) {
	if (initData === undefined || !isValid(initData, process.env.BOT_TOKEN!)) {
		throw new InitDataError("Invalid initData");
	}

	return parse(initData);
}

export default new UserController();
