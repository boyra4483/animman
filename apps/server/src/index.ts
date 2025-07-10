import e from "express";
import prisma from "@animman/server/prisma";
import cookieParser from "cookie-parser";
import router from "@animman/server/router";

const app = e();
const PORT = process.env.PORT || 3030;

app.use(e.json());
app.use(cookieParser());
app.use("/user", router);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
