import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import IndexPageLayout from './../components/IndexPageLayout';
import Navbar from './../components/NavbarComponent';
import Form from './../components/FormComponent';
import WidgetComponent from './../components/WidgetComponent';

const arrayOfWidgets = [
  {
    title: 'Bitcoin',
    url:
      'https://www.worldcoinindex.com/Content/img/coins/v-636096405580774340/Bitcoin.png',
    percentChange: '2.49%',
    bitcoinPrice: '0.0003444',
    usdPrice: '5,789.20',
    euroPrice: '5,200.30',
    yuanPrice: '36,558.44',
    gbpPrice: '4,306.56',
    rublePrice: '304,273.59',
    high: '0.0003444',
    low: '0.0003222'
  },
  {
    title: 'Etheruem',
    url:
      'https://www.worldcoinindex.com/Content/img/coins/v-636096405580774340/Bitcoin.png',
    percentChange: '7.52%',
    bitcoinPrice: '0.069256632',
    usdPrice: '315.20',
    euroPrice: '270.25',
    yuanPrice: '8,402.01',
    gbpPrice: '280.95',
    rublePrice: '102,345.23',
    high: '0.069256663',
    low: '0.062335343'
  }
];

storiesOf('Layout', module)
  .addDecorator(muiTheme())
  .add('Renders page with widget', () => {
    <IndexPageLayout>
      <Navbar />
      <Form />
      {arrayOfWidgets.map((widget, index) => {
        return <WidgetComponent widget={widget} key={index} />;
      })}
    </IndexPageLayout>;
  });
