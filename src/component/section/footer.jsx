import React, { Component } from 'react';
import SocialMedia from '../social_media';
import { profiles } from '../../prop_types';

class Footer extends Component {
    render() {
        const props = this.props;
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <SocialMedia
                            ulClass="social-links"
                            profiles={props.content}
                        />
                        <ul className="copyright">
                            <li>
                                This site is developed in React.js by&nbsp;
                                <a
                                    href="https://nimjetushar.github.io"
                                    title="Tushar Nimje"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Tushar Nimje</a> from the original design of Ceevee from&nbsp; <a
                                    href="http://www.styleshout.com/"
                                    title="Styleshout"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Styleshout</a>
                            </li>
                        </ul>
                    </div>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    content: profiles
}

export default Footer;
