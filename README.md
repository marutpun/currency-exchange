# Currency Exchange

A currency exchange table for shopaholic.

View: https://stoic-fermat-ce79f5.netlify.app

API provided by ExchangeRatesAPI (500 req/month).

## Change logs

- Upgrade Parcel bundler to v2. (Spent 1-2 hours to finish it.)
- Added TailwindCSS, removed Semantic UI
- Fully migrated state from component to container
- Migrated to React 18
- Design made with Atkinson Hyperlegible font
- Removed update currency time. USELESS!

## Tools

- Parcel Bundler
- ReactJS, ReactDOM
- TailwindCSS
- Axios
- Netlify, Netlify function
- ExchangeRatesAPI

## Netlify function

### Create

To create a Netlify function. You will need

1. Create **netlify.toml** and provide build settings.
2. Create a function with the same name in directory function. (e.g. **functions/YOUR_FUNCTION.js**)
   2.1 Create and export an async function name **handler**, use **event**, **context** as parameters. `async function handler(event, context) {}`, add your algorithm inside. You may use **axios** for Promise.
   2.2 Return an object with statusCode and body in JSON.stringify.

### Usage

Fetch data with URL `'.netlify/functions/YOUR_FUNCTION'`

### Dev

Run a command `netlify dev`. It will run local development automatically. Add your Netlify function URL after the local development to see a full API response (e.g. **http://localhost:8888/.netlify/functions/YOUR_FILE_NAME**)

`
