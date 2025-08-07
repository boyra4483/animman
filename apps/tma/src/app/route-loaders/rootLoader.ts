import tg from "@twa-dev/sdk";
import { redirect } from "react-router";
import isAuth from "@animman/tma/shared/config/axios/config/isAuth";
import axios from "axios";
import User from "@animman/shared/src/types/user";

export default async function rootLoader() {
	console.log(tg.initData);
	const user = await axios<any, User>(isAuth);

	if (user.userData !== null) return redirect("/auth");
	return redirect("/onboarding");
}
