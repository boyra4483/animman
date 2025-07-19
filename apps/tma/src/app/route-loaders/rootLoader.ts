import tg from "@twa-dev/sdk";
import { redirect } from "react-router";

export default async function rootLoader() {
	console.log(tg.initData);
	const res = await fetch("http://localhost:3030/user/isAuth", {
		method: "POST",
		body: JSON.stringify({
			user: {
				initData: tg.initData
			}
		})
	});

	if (res.ok) {
		redirect("/auth");
	} else {
		redirect("/onboarding");
	}
}
