import e from "express";
import cookieParser from "cookie-parser";
import router from "@animman/server/router";
import cors from "cors";
import "dotenv/config";

const app = e();
const PORT = process.env.PORT || 3030;

app.use(e.json());
app.use(cookieParser());
app.use("/user", router);
app.use(
	cors({
		origin: process.env.TMA_URL,
		credentials: true
	})
);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
