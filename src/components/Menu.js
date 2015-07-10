import React from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router';

const GITHUB_LINK = 'https://github.com/fortruce/github-browser';

export default class Menu extends React.Component {
  render() {
    const links = [
      { name: 'About', link: '/about' },
      { name: 'Browse', link: '/github' },
      { name: 'Github', link: GITHUB_LINK, external: true }
    ];

    return (
      <ul className="side-nav">
        <li className="heading"><Link to="/github">Github Browse</Link></li>
        { links.map(link => <MenuItem {...link} />) }
      </ul>
    );
  }
}

