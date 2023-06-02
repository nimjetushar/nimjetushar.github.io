import React from 'react';
import { IBasicsEntity } from '../../interface/resume.interface';

interface IAboutComponentProps {
  content: IBasicsEntity;
}

export const About = ({ content }: IAboutComponentProps) => {
  return (
    <section id="about">
      <div className="row">
        <div className="two columns">
          <img
            className="profile-pic"
            src={content.picture}
            alt={content.name}
          />
        </div>
        <div className="ten columns main-col">
          <h2>About Me</h2>
          {content.summary.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{content.location.city}</span>
                {content.location.region && (
                  <span>, {content.location.region}</span>
                )}
                <br />
                <span>{content.location.countryCode}</span>
                <br />
                <a href={`mailto:${content.email}`}>
                  <span>{content.email}</span>
                </a>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a className="button" href={content.resumeUrl}>
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
};
