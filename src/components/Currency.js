import React from 'react';
import clsx from 'clsx';

export default function Currency({ children, ...restProps }) {
  return (
    <div className="container mx-auto" {...restProps}>
      {children}
    </div>
  );
}

Currency.Title = function CurrencyTitle({ children, ...restProps }) {
  return (
    <h1 className="mt-7 mb-4 font-body font-bold text-2xl sm:text-3xl text-center" {...restProps}>
      {children}
    </h1>
  );
};

Currency.SelectContainer = function SelectContainer({ children, ...restProps }) {
  return (
    <section className="flex flex-row flex-wrap justify-center sm:justify-end px-4" {...restProps}>
      {children}
    </section>
  );
};

Currency.Select = function CurrencySelect({ children, ...restProps }) {
  return (
    <select
      className="font-body p-1.5 max-w-full h-10 border-2 border-solid border-black bg-white focus:outline-4 focus:outline-solid focus:outline-yellow-300 focus:outline"
      id="change-currency"
      name="change-currency"
      aria-label="Choose your currency"
      {...restProps}
    >
      {children}
    </select>
  );
};

Currency.Option = function CurrencyOption({ children, value, ...restProps }) {
  return (
    <option value={value} {...restProps}>
      {children}
    </option>
  );
};

Currency.Grid = function CurrencyGrid({ children, ...restProps }) {
  return (
    <section className="relative flex flex-wrap flex-row w-full items-stretch px-0 my-4" {...restProps}>
      {children}
    </section>
  );
};

Currency.Column = function CurrencyColumn({ children, ...restProps }) {
  return (
    <div className="inline-block relative grow px-4 w-full md:w-1/4" {...restProps}>
      {children}
    </div>
  );
};

Currency.Table = function CurrencyTable({ background, fromCurrency, toCurrency, denom, children, rate, ...restProps }) {
  return (
    <table className={clsx('border-0', 'text-black', 'w-full', 'mx-0', 'mt-0', 'mb-2', 'rounded', background)} {...restProps}>
      <thead>
        <tr>
          <th scope="col" className="font-body p-3 border-b border-solid border-gray-400 align-top">
            {fromCurrency.toUpperCase()}
          </th>
          <th scope="col" className="font-body p-3 border-b border-solid border-gray-400 align-top">
            {toCurrency.toUpperCase()}
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

Currency.TbodyRow = function CurrencyTbodyRow({ isLoading, digit, denom, rate, ...restProps }) {
  const fetchResult = isLoading ? 'fetching...' : ((1 / rate) * denom * digit).toFixed(2);
  return (
    <tr {...restProps}>
      <td scope="row" className="font-body p-2 border-b border-solid border-gray-400">
        {(digit * denom).toFixed(2)}
      </td>
      <td className="text-right font-body p-2 border-b border-solid border-gray-400">{fetchResult}</td>
    </tr>
  );
};
