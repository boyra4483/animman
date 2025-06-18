import { Bot } from "grammy";
import { BOT_TOKEN } from "@animman/bot/config";
import { startCommand } from "@animman/bot/commands/start";

export const bot = new Bot(BOT_TOKEN);

bot.command("start", startCommand);
