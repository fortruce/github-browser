import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import { fetchOnUpdate } from '../../decorators';

@fetchOnUpdate(['username', 'repo'], (params, actions) => {
  const { username, repo } = params;
  actions.fetchRepo({ username, repo });
})
export default class Repo extends React.Component {
  static PropTypes = {
    github: PropTypes.object,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { github: { repo, error } } = this.props;
    if (error) {
      return (
        <div>
          Couldn't find that repo. Try another.
        </div>
      );
    }

    return (
      <div>
        Repo: { repo.name }
      </div>
    );
  }
}