import React, { Component } from 'react';
import SocialMedia from './social_media';

import { basics } from '../prop_types';

class Banner extends Component {
  render() {
    return (
        <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">{this.props.basics.name}</h1>
                <br />
                <hr />
                <SocialMedia ulClass="social" profiles={ this.props.basics.profiles } />
            </div>
        </div>
    );
  }
}

Banner.propTypes = {
  basics
};

export default Banner;
