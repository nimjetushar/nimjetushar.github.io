import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { profiles } from '../prop_types';
import stackshare from '../images/stackshare-logo.png'

function mapIcon(socialMedia) {
  const media = socialMedia.replace(/ /g, '-');
  switch (socialMedia) {
    case 'email':
      return <i className={ 'fa fa-envelope' } />;
    case 'quora':
      return (
          <i className="fa fa-fw">
              <strong className="fa-quora">Q</strong>
          </i>
      );
    case 'stackshare':
      return <img className="stackshare-logo" src={ stackshare } alt="SS"/>;
    default:
      return <i className={ `fa fa-${ media }` } />;
  }
}

class SocialMedia extends Component {
  render() {
    return (
        <div>
            <ul className={ this.props.ulClass }>
                {this.props.profiles.map((profile, index) => {
            const icon = mapIcon(profile.network.toLowerCase());
            return (
                <li key={ index }>
                    <a href={ profile.url }>{icon}</a>
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
