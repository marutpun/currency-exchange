const axios = require('axios');
const apikey = process.env.EXCHANGE_RATE_API;

const fetchOptions = {
  headers: { apikey },
};

exports.handler = async function (event, context) {
  try {
    const { data } = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?base=thb`, fetchOptions);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
