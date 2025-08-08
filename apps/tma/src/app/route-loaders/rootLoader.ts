import tg from "@twa-dev/sdk";
import { redirect } from "react-router";
import isAuth from "@animman/tma/shared/config/axios/config/isAuth";
import axios from "axios";
import isAuthRes from "@animman/shared/src/types/isAuthRes";

export default async function rootLoader() {
	console.log(tg.initData);
	const res = await axios<any, isAuthRes>(isAuth);

	if (res.user !== null) return redirect("/auth");
	return redirect("/onboarding");
}
