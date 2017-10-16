import React from 'react';

export default class IndexPageLayout extends React.Component {
  render() {
    return (
      <div>
        Hello World!
        {props.children[0]}
        {props.children[1]}
        {props.children[2]}
      </div>
    );
  }
}
