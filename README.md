# Currency Exchange

A currency exchange table for shopaholic (yes, it's me).

Demo: https://stoic-fermat-ce79f5.netlify.app

I use parcel, react, axios and semantic-ui. API provided by ExchangeRatesAPI

## Newbie notes

- You can combine a state, dispatch `StateContext.Provider value={state}` and `DispatchContext.Provider value={dispatch}` and export (return) from main context `MainContext()`. See `src/context/CurrencyContext.js`
