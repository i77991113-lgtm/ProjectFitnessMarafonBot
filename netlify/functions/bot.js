import fetch from "node-fetch";

const BOT_TOKEN = process.env.BOT_TOKEN;

export async function handler(event) {
  try {
    const update = JSON.parse(event.body);

    if (update.message?.text) {
      const chatId = update.message.chat.id;
      const text = update.message.text;

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Ты написал: ${text}`
        })
      });
    }

    return { statusCode: 200, body: "ok" };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}



