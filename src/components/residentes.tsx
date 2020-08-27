import React from 'react';
import {
  Avatar,
  Button,
  Box,
  Drop,
  grommet,
  Grommet,
  Nav,
  Sidebar,
  Grid,
  Header,
  Heading,
  DataTable,
  Meter,
  Text,
} from 'grommet';

import { Analytics, Calculator, Home, Stakeholder } from 'grommet-icons';

import DashboardLayout from './layouts/main';

export declare type AlignType = 'left' | 'center' | 'right';

export default () => {
  const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

  // const NotificationIcon = () => (
  //   <Stack anchor="top-right">
  //     <Notification />
  //     <Box background="accent-1" pad="xsmall" round responsive={false} />
  //   </Stack>
  // );

  const amountFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const columns = [
    {
      property: 'name',
      header: 'Name',
      primary: true,
      footer: 'Total',
    },
    {
      property: 'location',
      header: 'location',
    },
    {
      property: 'date',
      header: 'Date',
      render: (datum: { date: string | number | Date }) =>
        datum.date && new Date(datum.date).toLocaleDateString('en-US'),
      align: 'end',
    },
    {
      property: 'percent',
      header: 'Percent Complete',
      render: (datum: { percent: number }) => (
        <Box pad={{ vertical: 'xsmall' }}>
          <Meter
            values={[{ value: datum.percent }]}
            thickness="small"
            size="small"
          />
        </Box>
      ),
    },
    {
      property: 'paid',
      header: 'Paid',
      render: (datum: { paid: number }) =>
        amountFormatter.format(datum.paid / 100),
      align: 'end',
      aggregate: 'sum',
      footer: { aggregate: true },
    },
  ];

  const DATA = [
    {
      name: 'Alan',
      location: '',
      date: '',
      percent: 0,
      paid: 0,
    },
    {
      name: 'Bryan',
      location: 'Mz8968-V8',
      date: '2018-06-10',
      percent: 30,
      paid: 1234,
    },
    {
      name: 'Chris',
      location: 'Mz8968-V8',
      date: '2018-06-09',
      percent: 40,
      paid: 2345,
    },
    {
      name: 'Eric',
      location: 'Mz8968-V8',
      date: '2018-06-11',
      percent: 80,
      paid: 3456,
    },
    {
      name: 'Doug',
      location: 'Mz8968-V8',
      date: '2018-06-10',
      percent: 60,
      paid: 1234,
    },
    {
      name: 'Jet',
      location: 'Mz8968-V8',
      date: '2018-06-09',
      percent: 40,
      paid: 3456,
    },
    {
      name: 'Michael',
      location: 'Mz8968-V8',
      date: '2018-06-11',
      percent: 50,
      paid: 1234,
    },
    {
      name: 'Tracy',
      location: 'Mz8968-V8',
      date: '2018-06-10',
      percent: 10,
      paid: 2345,
    },
  ];

  return (
    <DashboardLayout>
      <Heading level="3">Residentes</Heading>
      <Grommet theme={grommet}>
        <Box align="center" pad="large">
          <DataTable columns={columns} data={DATA} />
        </Box>
      </Grommet>
    </DashboardLayout>
  );
};
