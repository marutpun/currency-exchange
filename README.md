# Currency Exchange

A currency exchange table for shopaholic.

Demo: https://stoic-fermat-ce79f5.netlify.app

I use parcel, react, axios and semantic-ui. API provided by ExchangeRatesAPI

## Newbie notes

- You can combine a state, dispatch `StateContext.Provider value={state}` and `DispatchContext.Provider value={dispatch}` and export (return) from main context `MainContext()`. See `src/context/CurrencyContext.js`

## Netlify Functions Guide

### Create serverless function.

1. Create `netlify.toml` and put

```
 [build]
   # Directory of function
   functions = "functions/"
   publish = "src"
```

2. Create `functions/YOUR_FUNCTION.js`
   2.1 Create a function with async name **handler** ONLY!
   2.2 Fetch an API (add API Key to .env)
   2.3 For success, Return an object with `statusCode: 200, body: JSON.stringify(response.data)`. If you get an error, return an object with `statusCode: 404, body: error.toString()`;
   2.4 Export `module.exports = { handler }`

(Optional 1) Use axios (with await) to fetch API. Don't forget to import
(Optional 2) Use Try/Catch block.

```
const axios = require('axios')

async function handler() {
  try {
    const response =  await axios.get('www.something.com/api?access_key=${api}');
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: error.message.toString()
    };
  }
}

module.exports  = { handler };
```

### Usage

At front-end. Fetch by using `await axios('.netlify/functions/fetchExchangeRate')`

### Testing

#### Development

Run `netlify dev` and open browser at `http://localhost:8888`.

#### View JSON

Open browser at `http://localhost:8888/.netlify/functions/YOUR_FILE_NAME`

`
