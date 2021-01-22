import 'regenerator-runtime/runtime';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { Currency } from '../components';
import { DispatchContext, StateContext } from '../contexts/CurrencyContext';

import { fetchInit, fetchSuccess, fetchFailure, updateTime } from '../reducers/currencyReducer';

export function CurrencyContainer() {
  const { country, exchangeRate, time } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const fetchCurrency = async () => {
      dispatch(fetchInit());

      try {
        const response = await axios('https://api.exchangeratesapi.io/latest?base=THB');

        const {
          data: { rates, date },
        } = response;

        if (country === 'myr') {
          dispatch(fetchSuccess(rates.MYR));
        } else if (country === 'sgd') {
          dispatch(fetchSuccess(rates.SGD));
        }

        dispatch(updateTime(date));
      } catch (error) {
        dispatch(fetchFailure());
      }
    };

    fetchCurrency();
  }, [country]);

  const titleUpperCase = country.toUpperCase();

  return (
    <Currency>
      <Currency.Title>Cheat Sheet: {titleUpperCase} - THB</Currency.Title>
      <Currency.Select />
      <Currency.Grid>
        <Currency.GridCol>
          <Currency.Table color="olive" denom={0.1} rate={exchangeRate} />
        </Currency.GridCol>
        <Currency.GridCol>
          <Currency.Table color="yellow" denom={1} rate={exchangeRate} />
        </Currency.GridCol>
        <Currency.GridCol>
          <Currency.Table color="orange" denom={10} rate={exchangeRate} />
        </Currency.GridCol>
        <Currency.GridCol>
          <Currency.Table color="red" denom={100} rate={exchangeRate} />
        </Currency.GridCol>
      </Currency.Grid>
      <Currency.Update>Last update: {time}</Currency.Update>
    </Currency>
  );
}
