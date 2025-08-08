import tg from "@twa-dev/sdk";
import { redirect } from "react-router";
import isAuth from "@animman/tma/shared/config/axios/config/isAuth";
import axios from "axios";
import isAuthRes from "@animman/shared/src/types/isAuthRes";

export default async function rootLoader() {
	const res = await axios<isAuthRes>(isAuth);

	console.log(res.data);
	console.log(tg.initData);

	if (res.data.user !== null) return redirect("/auth");
	return redirect("/onboarding");
}
