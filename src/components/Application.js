import React, { PropTypes } from 'react';
import Menu from './Menu';

export default class Application extends React.Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="container__body">
          { this.props.children }
        </div>
      </div>
    );
  }
}