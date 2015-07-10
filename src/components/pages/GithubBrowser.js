import React, { PropTypes } from 'react';
import Search from '../Search';

export default class GithubBrowser extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <h1>Github Browser</h1>
        <Search
          placeholder="Search for Username"
          handleSearch={username => this.context.router.transitionTo(`/users/${username}`)} />
        { this.props.children }
      </div>
    );
  }
}