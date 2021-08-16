const axios = require('axios');
const api = process.env.EXCHANGE_RATE_API;

async function handler(event, context) {
  try {
    const { data } = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${api}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { message } = error;
    return {
      statusCode: 404,
      body: message.toString(),
    };
  }
}

module.exports = { handler };
