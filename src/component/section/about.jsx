import React, { Component } from "react";
import { basics } from "../../prop_types";

class About extends Component {
  render() {
    const summary = this.props.content.summary.map((content, index) => {
      return <p key={index}>{content}</p>;
    });

    return (
      <section id="about">
        <div className="row">
          <div className="two columns">
            <img
              className="profile-pic"
              src={this.props.content.picture}
              alt={this.props.content.name}
            />
          </div>
          <div className="ten columns main-col">
            <h2>About Me</h2>
            {summary}
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{this.props.content.location.city}</span>
                  <br />
                  <span>{this.props.content.location.countryCode}</span>
                  <br />
                  {/* <a href={`skype:${this.props.content.phone}`}>
                    <span>{this.props.content.phone}</span>
                  </a>
                  <br /> */}
                  <a href={`mailto:${this.props.content.email}`}>
                    <span>{this.props.content.email}</span>
                  </a>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    className="button"
                    href={this.props.content.resumeUrl}
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
