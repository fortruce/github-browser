import React from 'react';
import MenuItem from './MenuItem';

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
        <li className="heading"><a href="/">Github Browse</a></li>
        { links.map(link => <MenuItem {...link} />) }
      </ul>
    );
  }
}

