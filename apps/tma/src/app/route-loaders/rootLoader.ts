import tg from "@twa-dev/sdk";
import { useNavigate } from "react-router";

export default async function rootLoader() {
	const navigate = useNavigate();

	const res = await fetch("http://localhost:3030/user/isAuth ", {
		method: "POST",
		body: JSON.stringify({
			initData: tg.initData
		})
	});
	const user = await res.json();

	if (!user.userData) return navigate("/onboarding");
	return navigate("/");
}
