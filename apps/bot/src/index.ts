import bot from "./bot";

bot.command("start", async (ctx) => {
  await ctx.reply("Welcome to the bot! How can I assist you today?");
});

bot.start();
