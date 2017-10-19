import React from 'react';

export default class IndexPageLayout extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.children[0]}
        </div>
        <div>
          {this.props.children[1]}
        </div>
        <div>
          {this.props.children[2]}
        </div>
      </div>
    );
  }
}
