import React, { createContext, useReducer } from 'react';

import currencyReducer, { initialState } from '../reducers/currencyReducer';

export const StateContext = createContext();
export const DispatchContext = createContext();

export default function CurrencyContext({ children }) {
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}
