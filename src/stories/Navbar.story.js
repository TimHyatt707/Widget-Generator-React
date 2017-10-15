import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import NavbarComponent from './../components/NavbarComponent';

storiesOf('Navbar', module)
  .addDecorator(muiTheme())
  .add('Render Navbar', () => <NavbarComponent />);
