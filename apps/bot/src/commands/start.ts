import { Context } from "grammy";
import { TMA_URL } from "@animman/bot/config";

export async function startCommand(ctx: Context) {
  await ctx.reply(
    "👋 Привет! Это Animman — мини-приложение с каталогом аниме.\n\nНажми кнопку ниже, чтобы начать:",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🚀 Открыть приложение", web_app: { url: TMA_URL } }],
        ],
      },
    }
  );
}
