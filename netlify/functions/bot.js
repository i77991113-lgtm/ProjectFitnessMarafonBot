const fetch = require("node-fetch");

exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  const token = process.env.BOT_TOKEN;

  const chatId = body.message?.chat?.id;
  const text = body.message?.text;

  if (text === "/start") {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "Бот работает ✅"
      })
    });
  }

  return {
    statusCode: 200,
    body: "OK"
  };
};
