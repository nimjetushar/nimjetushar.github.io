import React, { Component } from 'react';
import { basics } from '../../prop_types';

class About extends Component {
    render() {

        const props = this.props;
        const summary = props.content.summary.map((content, index) => {
            return <p key={index}>{content}</p>;
        });

        return (
            <section id="about">
                <div className="row">
                    <div className="two columns">
                        <img
                            className="profile-pic"
                            src={props.content.picture}
                            alt={props.content.name}
                        />
                    </div>
                    <div className="ten columns main-col">
                        <h2>About Me</h2>
                        {summary}
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{props.content.location.city}</span>
                                    <br />
                                    <span>{props.content.location.countryCode}</span>
                                    <br />
                                    {/* <a href={`skype:${props.content.phone}`}>
                    <span>{props.content.phone}</span>
                  </a>
                  <br /> */}
                                    <a href={`mailto:${props.content.email}`}>
                                        <span>{props.content.email}</span>
                                    </a>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a
                                        className="button"
                                        href={props.content.resumeUrl}
                                    >
                                        <i className="fa fa-download" />
                                        Download Resume
                  </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

About.proptypes = {
    content: basics
};

export default About;
