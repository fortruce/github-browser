import React, { PropTypes } from 'react';
import { Router, Route, Redirect } from 'react-router';
import { Provider } from 'redux/react';
import { createRedux } from 'redux';
import * as components from './components';
import * as stores from './stores';

const {
  Application,
  GithubUser,
  GithubBrowser,
  GithubRepo,
  About
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
      <Route component={Application}>
        <Route path="about" component={About} />
        <Route path="github" component={GithubBrowser}>
          <Route name="user" path=":username" component={GithubUser} />
          <Route name="repo" path=":username/:repo" component={GithubRepo} />
        </Route>
        <Redirect from="/" to="/github" />
      </Route>
    </Router>
  );
}