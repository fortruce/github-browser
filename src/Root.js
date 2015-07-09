import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'redux/react';
import { createRedux } from 'redux';
import * as components from './components';
import * as stores from './stores';

const {
  Application
} = components;

const redux = createRedux(stores);

export default class Root extends React.Component {
  static PropTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    return (
      <Provider redux={redux}>
        { renderRoutes.bind(null, history) }
      </Provider>
    );
  }
}

function renderRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={Application} />
    </Router>
  );
}