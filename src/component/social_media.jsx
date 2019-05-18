import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { profiles } from '../prop_types';

function mapIcon(socialMedia) {
  let media;
  switch (socialMedia) {
    case 'email':
      return <i className='fas fa-envelope' />;
    case 'stackshare':
      return <i className="stackshare-logo" />;
    default:
      media = socialMedia.replace(/ /g, '-');
      return <i className={`fab fa-${media}`} />;
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
