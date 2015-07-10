import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    external: PropTypes.bool
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    const { link, name, external } = this.props;
    const active = !external && this.context.router.isActive(link);

    if (external) {
      return (
        <li><a href={ link } target="_blank">{ name }</a></li>
      );
    }
    return (
      <li className={ active ? 'active' : '' }><Link to={ link }>{ name }</Link></li>
    );
  }
}