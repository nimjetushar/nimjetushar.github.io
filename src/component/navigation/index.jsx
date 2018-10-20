import React, { Component } from "react";
import Link from "./link";
import { navigation } from "../../prop_types";

/* eslint-disable jsx-a11y/href-no-hash */

class Navigation extends Component {
  render() {
    function navContent(navigation) {
      const keys = Object.keys(navigation);
      const links = keys.map((navigationLink, index) => {
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
          {navContent(this.props.navigation)}
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  navigation
};

export default Navigation;
