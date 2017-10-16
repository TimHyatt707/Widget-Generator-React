import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import WidgetComponent from './../components/WidgetComponent';

let widget = {
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
};

storiesOf('WidgetComponent', module)
  .addDecorator(muiTheme())
  .add('Render Widget', () => <WidgetComponent widget={widget} />)
  //The widget component should return null and display nothing if the data
  //recieved is not an object or an empty object
  .add('Nothing should display if data is not an object', () =>
    <WidgetComponent widget={undefined} />
  )
  .add('Nothing should display if data is an empty object', () =>
    <WidgetComponent widget={{}} />
  );
