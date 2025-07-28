import tg from "@twa-dev/sdk";
import { redirect } from "react-router";
import isAuth from "@animman/tma/shared/config/axios/config/isAuth";
import axios from "axios";

export default async function rootLoader() {
	console.log(tg.initData);
	const res = await axios(isAuth);

	if (res.statusText == "OK") return redirect("/auth");
	return redirect("/onboarding");
}
