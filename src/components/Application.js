import React, { PropTypes } from 'react';
import Menu from './Menu';

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="body">
          { this.props.children }
        </div>
      </div>
    );
  }
}