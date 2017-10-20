import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import WebScraper from "./WebScraper";

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
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <TextField id="input" hintText="Type in a coin" />
        <RaisedButton label="GO" type="Submit" />
        <h2 style={{ color: "red" }}>{this.state.error}</h2>
      </form>
    );
  }

  _onSubmit = e => {
    let coin = e.target.input.value.trim();
    let coinScraper = new WebScraper();
    e.preventDefault();
    if (typeof coin !== "string" || !coin) {
      this.setState({ error: "Coin does not exist" });
    } else {
      this.setState({ error: null });
      this.props.createWidget(coinScraper.scrape(coin));
    }
  };
}
