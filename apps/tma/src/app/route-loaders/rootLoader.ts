import tg from "@twa-dev/sdk";
import { data, redirect } from "react-router";
import isAuth from "@animman/tma/shared/config/axios/config/isAuth";
import axios from "axios";

export default async function rootLoader() {
	console.log(tg.initData);
	const res = await axios(isAuth);

	if (res.statusText == "OK") {
		redirect("/auth");
	} else {
		redirect("/onboarding");
	}
}
