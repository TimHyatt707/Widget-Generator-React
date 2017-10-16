import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  render() {
    return (
      <form
        onSubmit={this._onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <TextField id="input" hintText="Input a URL" />
        <RaisedButton label="GO" type="Submit" />
        <h2 style={{ color: 'red' }}>
          {this.state.error}
        </h2>
      </form>
    );
  }

  _onSubmit = e => {
    let url = e.target.input.value.trim();
    e.preventDefault();
    if (typeof url !== 'string' || !url) {
      this.setState({ error: 'Coin does not exist' });
    } else {
      this.setState({ error: null });
      console.log('Success');
    }
  };
}
