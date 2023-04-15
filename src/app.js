import React from 'react';
import './index.css';
import CurrencyContext from './contexts/CurrencyContext';
import { CurrencyContainer } from './containers/currency';

export default function App() {
  return (
    <CurrencyContext>
      <CurrencyContainer />
    </CurrencyContext>
  );
}
