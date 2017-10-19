import React from 'react';
import IndexPageLayout from './IndexPageLayout'
import Navbar from './NavbarComponent';
import FormComponent from './FormComponent';
import WidgetComponent from './WidgetComponent';


export default class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      arrayOfWidgets:[]
    }
  }

  render(){
    return (
      <IndexPageLayout>
        <Navbar />
        <Form />
        {this.state.arrayOfWidgets.map((widget, index) => {
          return <WidgetComponent widget={widget} key={index} />;
        })}
      </IndexPageLayout>;
    )
  }
}
