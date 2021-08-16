import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Select, Grid, Table } from 'semantic-ui-react';

import './styles/currency.css';
import { StateContext, DispatchContext } from '../contexts/CurrencyContext';
import { changeCountry } from '../reducers/currencyReducer';

import countryCode from '../country.json';

export default function Currency({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Currency.Title = function CurrencyTitle({ children, ...restProps }) {
  return (
    <Header as="h1" textAlign="center" {...restProps}>
      {children}
    </Header>
  );
};

Currency.Select = function CurrencySelect({ ...restProps }) {
  const { country } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const _handleSelectChange = (event, { value: newCountry }) => {
    dispatch(changeCountry(newCountry));
  };

  return (
    <section className="utils-my-4" {...restProps}>
      <Select
        placeholder="Select your currency"
        options={countryCode}
        defaultValue={country}
        onChange={_handleSelectChange}
      />
    </section>
  );
};

Currency.Grid = function CurrencyGrid({ children, ...restProps }) {
  return (
    <Grid columns={4} stackable {...restProps}>
      <Grid.Row>{children}</Grid.Row>
    </Grid>
  );
};
Currency.GridCol = function CurrencyGridCol({ children, ...restProps }) {
  return <Grid.Column {...restProps}>{children}</Grid.Column>;
};

Currency.Table = function CurrencyTable({ denom, rate, ...restProps }) {
  const { country } = useContext(StateContext);
  const titleUpperCase = country.toUpperCase();

  return (
    <Table inverted compact {...restProps}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className="center aligned">EUR</Table.HeaderCell>
          <Table.HeaderCell className="center aligned">
            {titleUpperCase}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{(denom * 1).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{(denom * 2).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{(denom * 3).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{(denom * 4).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{(denom * 5).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{(denom * 6).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{(denom * 7).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{(denom * 8).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{(denom * 9).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{(denom * 10).toFixed(2)}</Table.Cell>
          <Table.Cell>{(denom * rate).toFixed(2)}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

Currency.Update = function CurrencyUpdate({ children }) {
  return <p className="utils-my-4">{children}</p>;
};

Currency.propTypes = {
  children: PropTypes.node.isRequired,
};

Currency.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Currency.Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

Currency.GridCol.propTypes = {
  children: PropTypes.node.isRequired,
};

Currency.Table.propTypes = {
  denom: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
};

Currency.Update.propTypes = {
  children: PropTypes.node.isRequired,
};
