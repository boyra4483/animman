import e from "express";
import prisma from "@animman/server/prisma";
import { isValid, parse } from "@telegram-apps/init-data-node";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = e();
const PORT = process.env.PORT || 3030;

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
