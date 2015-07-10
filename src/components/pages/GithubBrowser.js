import React, { PropTypes } from 'react';
import Search from '../Search';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../actions/github';
import { connect } from 'redux/react';

@connect(state => ({
  github: state.github
}))
export default class GithubBrowser extends React.Component {
  static PropTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.any
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(githubActions, dispatch);

    return (
      <div>
        <h1>Github Browser</h1>
        <Search
          placeholder="Enter User or User/Repo"
          handleSearch={ input => {
            this.context.router.transitionTo(`github/${input}`)
          }} />
        { this.props.children &&
            React.cloneElement(this.props.children, { actions, ...this.props }) }
      </div>
    );
  }
}