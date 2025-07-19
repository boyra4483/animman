import { Request, Response } from "express";
import { parse, isValid } from "@telegram-apps/init-data-node";
import jwt from "jsonwebtoken";
import prisma from "@animman/server/prisma";
import InitDataError from "@animman/server/errors/initDataError";

class UserController {
	async auth(req: Request, res: Response) {
		const { initData } = req.body as { initData: string };

		try {
			const userTgData = this.initDataVerify(initData);
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
			console.log(error);
			res.status(400).json({
				error: "Invalid initData"
			});
		}
	}
	initDataVerify(initData: string | undefined) {
		if (initData === undefined || !isValid(initData, process.env.JWT_SECRET!)) {
			throw new InitDataError();
		}

		return parse(initData);
	}
	isAuth(req: Request, res: Response) {
		const {
			user: { initData }
		} = req.body as { user: { initData: string } };

		try {
			const userTgData = this.initDataVerify(initData);
			const userDB = prisma.user.findFirst({
				where: {
					telegramId: userTgData.user?.id.toString()
				}
			});
			console.log(userDB);
			if (userDB === null) {
				res.status(401).json({
					user: {
						data: userDB
					}
				});
				return;
			}
			res.status(200).json({
				user: {
					data: userDB
				}
			});
		} catch (err) {
			console.log(err);
			res.status(400).json({
				error: "Invalid initData"
			});
		}
	}
}

export default new UserController();
