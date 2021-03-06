import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import { fetchOnUpdate } from '../../decorators';

@fetchOnUpdate(['username'], (params, actions) => {
  const { username } = params;
  actions.fetchUser({ username });
})
export default class User extends React.Component {
  static propTypes = {
    github: PropTypes.object,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { github: { user, error } } = this.props;

    if (error) {
      return (
        <div>
          Couldn't find that user. Try another.
        </div>
      );
    }

    return (
      <div>
        User: { user.login }
      </div>
    );
  }
}