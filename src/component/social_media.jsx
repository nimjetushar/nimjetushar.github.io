import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { profiles } from '../prop_types';

function mapIcon(socialMedia) {
  const media = socialMedia.replace(/ /g, '-');
  switch (socialMedia) {
    case 'email':
      return <i className={'fa fa-envelope'} />;
    case 'quora':
      return (
        <i className="fa fa-fw">
          <strong className="fa-quora">Q</strong>
        </i>
      );
    case 'stackshare':
      return <i className="stackshare-logo" />;
    default:
      return <i className={`fa fa-${media}`} />;
  }
}

class SocialMedia extends Component {
  render() {
    return (
      <div>
        <ul className={this.props.ulClass}>
          {this.props.profiles.map((profile, index) => {
            const icon = mapIcon(profile.network.toLowerCase());
            return (
              <li key={index}>
                <a href={profile.url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

SocialMedia.propTypes = {
  ulClass: PropTypes.string.isRequired,
  profiles
};

export default SocialMedia;
