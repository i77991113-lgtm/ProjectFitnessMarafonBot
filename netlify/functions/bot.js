const BOT_TOKEN = process.env.BOT_TOKEN;

exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      tokenExists: !!BOT_TOKEN
    })
  };
};


