import React from 'react';
import TextField from 'material-ui/TextField';

export default class FormComponent extends React.Component {
  render() {
    return (
      <form>
        <TextField hintText="Input a URL" />
      </form>
    );
  }
}
