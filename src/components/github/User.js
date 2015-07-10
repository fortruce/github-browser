import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import { fetchUser } from '../../actions/github';

@connect(state => ({
  user: state.github.user,
  error: state.github.error
}))
export default class User extends React.Component {
  static propTypes = {
    params: PropTypes.shape({
      username: PropTypes.string.isRequired
    })
  }

  constructor(props) {
    super(props);
    this.props.dispatch(fetchUser(this.props.params.username));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.username !== this.props.params.username)
      this.props.dispatch(fetchUser(nextProps.params.username));
  }

  render() {
    if (this.props.error) {
      return (
        <div>
          There was a problem with that search. Try again.
        </div>
      );
    }

    return (
      <div>
        User: { this.props.user.login }
      </div>
    );
  }
}