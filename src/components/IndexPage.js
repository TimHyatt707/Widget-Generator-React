import React from "react";
import IndexPageLayout from "./IndexPageLayout";
import Navbar from "./NavbarComponent";
import FormComponent from "./FormComponent";
import WidgetComponent from "./WidgetComponent";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfWidgets: []
    };
  }

  createWidget = widget => {
    this.setState(prevState => {
      return {
        ...prevState,
        arrayOfWidgets: [...prevState.arrayOfWidgets, widget]
      };
    });
  };

  updateWidget = (id, updatedWidget) => {
    this.setState(prevState => {
      return {
        ...prevState,
        arrayOfWidgets: prevState.arrayOfWidgets.map(widget => {
          return widget.id === id ? updatedWidget : widget;
        })
      };
    });
  };

  deleteWidget = id => {
    this.setState(prevState => {
      return {
        ...prevState,
        arrayOfWidgets: prevState.arrayOfWidgets.filter(widget => {
          return widget.id !== id;
        })
      };
    });
  };

  render() {
    return (
      <IndexPageLayout>
        <Navbar />
        <FormComponent createWidget={this.createWidget} />
        {this.state.arrayOfWidgets.map((widget, index) => {
          return <WidgetComponent widget={widget} key={index} />;
        })}
      </IndexPageLayout>
    );
  }
}
