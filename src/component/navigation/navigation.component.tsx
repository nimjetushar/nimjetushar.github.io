import React from 'react';
import { Link } from './link.component';

interface INavigationComponentProps {
  navigation: { [key: string]: string };
}

export const Navigation = (props: INavigationComponentProps) => {
  function navContent(navigation: { [key: string]: string }) {
    const links = Object.keys(navigation).map((navigationLink, index) => {
      const navigationName = navigation[navigationLink];
      return <Link key={index} link={navigationLink} name={navigationName} />;
    });
    return links;
  }

  return (
    <nav id="nav-wrap" className="opaque">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        {navContent(props.navigation)}
      </ul>
    </nav>
  );
};
