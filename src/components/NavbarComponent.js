import React from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

export default class Navbar extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarTitle text="Widget Generator" />
      </Toolbar>
    );
  }
}
