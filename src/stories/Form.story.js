import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import FormComponent from './../components/FormComponent';

storiesOf('FormComponent', module)
  .addDecorator(muiTheme())
  .add('Render Form', () => <FormComponent />);
