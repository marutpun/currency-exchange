import React, { useEffect, useContext, Fragment } from 'react';
import axios from 'axios';
import { StateContext, DispatchContext } from '../contexts/CurrencyContext';
import { changeCountry } from '../reducers/currencyReducer';
import { fetchInit, fetchSuccess, fetchFailure } from '../reducers/currencyReducer';
import { Currency } from '../components';
import countryCode from '../country.json';
import digit from '../digit.json';

export function CurrencyContainer() {
  const { countryState, exchangeRateSGD, exchangeRateMYR, isLoading, isError, isData } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const rateTable = countryState === 'sgd' ? exchangeRateSGD : exchangeRateMYR;

  const _handleCurrencyChange = (event) => {
    console.log(event.target.value);
    dispatch(changeCountry(event.target.value));
  };

  useEffect(() => {
    const fetchCurrency = async () => {
      dispatch(fetchInit());
      try {
        const response = await axios.get(`.netlify/functions/fetchExchangeRate`);
        const {
          data: { rates },
        } = response;
        dispatch(fetchSuccess([rates.SGD, rates.MYR]));
      } catch (err) {
        dispatch(fetchFailure());
      }
    };

    fetchCurrency();
  }, []);

  if (isLoading) {
    return (
      <Currency>
        <Currency.Notification>Loading...</Currency.Notification>
      </Currency>
    );
  }

  if (isError) {
    return (
      <Currency>
        <Currency.Notification>Sorry, something went wrong. Please refresh</Currency.Notification>
      </Currency>
    );
  }
  if (isData) {
    return (
      <Currency>
        <Currency.Title>Currency Cheat Sheet</Currency.Title>
        <Currency.SelectContainer>
          <Currency.Select onChange={_handleCurrencyChange}>
            {countryCode.map((country) => {
              return (
                <Currency.Option key={country.key} value={country.value}>
                  {country.text}
                </Currency.Option>
              );
            })}
          </Currency.Select>
        </Currency.SelectContainer>
        <Currency.Grid>
          <Currency.Column>
            <Currency.Table background="bg-blue-50" fromCurrency={countryState} toCurrency="thb">
              {digit.map((unit) => {
                return <Currency.TbodyRow key={unit} digit={unit} rate={rateTable} denom="0.1" />;
              })}
            </Currency.Table>
          </Currency.Column>
          <Currency.Column>
            <Currency.Table background="bg-green-50" fromCurrency={countryState} toCurrency="thb">
              {digit.map((unit) => {
                return <Currency.TbodyRow key={unit} digit={unit} rate={rateTable} denom="1" />;
              })}
            </Currency.Table>
          </Currency.Column>
          <Currency.Column>
            <Currency.Table background="bg-yellow-50" fromCurrency={countryState} toCurrency="thb">
              {digit.map((unit) => {
                return <Currency.TbodyRow key={unit} digit={unit} rate={rateTable} denom="10" />;
              })}
            </Currency.Table>
          </Currency.Column>
          <Currency.Column>
            <Currency.Table background="bg-red-50" fromCurrency={countryState} toCurrency="thb">
              {digit.map((unit) => {
                return <Currency.TbodyRow key={unit} digit={unit} rate={rateTable} denom="100" />;
              })}
            </Currency.Table>
          </Currency.Column>
        </Currency.Grid>
      </Currency>
    );
  }
}
