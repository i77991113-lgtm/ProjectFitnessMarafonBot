const fetch = require("node-fetch");

const BOT_TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 200, body: "Bot is running" };
  }

  const update = JSON.parse(event.body);

  if (!update.message) {
    return { statusCode: 200, body: "No message" };
  }

  const chatId = update.message.chat.id;
  const text = update.message.text || "";

  await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `Ты написал: ${text}`
    })
  });

  return { statusCode: 200, body: "OK" };
};






