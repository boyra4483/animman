import { AxiosRequestConfig } from "axios";
import tg from "@twa-dev/sdk";

const isAtuh: AxiosRequestConfig = {
	method: "POST",
	url: "https://server-animman1038jadije102312.onrender.com/user/isAuth",
	data: {
		user: {
			initData: tg.initData
		}
	},
	withCredentials: true,
	headers: {
		"Content-Type": "application/json"
	}
};

export default isAtuh;
