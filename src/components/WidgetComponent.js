import React from "react";
import { Card, CardHeader, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { DropDownMenu, MenuItem } from "material-ui/DropDownMenu";

export default class WidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuValue: 0, symbol: "Ƀ", price: 0 };
  }
  render() {
    let widget = this.props.widget;
    let price;
    if (
      !widget ||
      typeof widget !== "object" ||
      Object.keys(widget).length === 0
    ) {
      return null;
    } else {
      if (this.state.price === 0) {
        price = widget.bitcoinPrice;
      } else {
        price = this.state.price;
      }
      return (
        <Card
          style={{
            width: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <CardHeader title={widget.title} avatar={widget.url} />
          <CardText>
            <p>24 Hour change: {widget.percentChange}</p>
            <p>Price: {price}</p>
          </CardText>
          <CardActions>
            <FlatButton label="Update" />
            <FlatButton label="Remove" />
            <form>
              <DropDownMenu
                value={this.state.menuValue}
                onChange={this._handleChange}
              >
                <MenuItem value={0} primaryText="Bitcoin" />
                <MenuItem value={1} primaryText="USD" />
                <MenuItem value={2} primaryText="Euro" />
                <MenuItem value={3} primaryText="GBP" />
                <MenuItem value={4} primaryText="Yuan" />
                <MenuItem value={5} primaryText="Ruble" />
              </DropDownMenu>
            </form>
          </CardActions>
        </Card>
      );
    }
  }
  _handleChange = (event, value) => {
    event.preventDefault();
    let symbol;
    let price;
    switch (value) {
      case 1:
        symbol = "$";
        price = this.props.widget.usdPrice;
        break;
      case 2:
        symbol = "€";
        price = this.props.widget.euroPrice;
        break;
      case 3:
        symbol = "£";
        price = this.props.widget.gbpPrice;
        break;
      case 4:
        symbol = "¥";
        price = this.props.widget.yuanPrice;
        break;
      case 5:
        symbol = "₽";
        price = this.props.widget.rublePrice;
        break;
      default:
        symbol = "Ƀ";
        price = this.props.widget.bitcoinPrice;
        break;
    }
    this.setState({ menuValue: value, symbol, price });
  };
}
