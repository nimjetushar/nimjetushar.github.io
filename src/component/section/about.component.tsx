import { FC } from "react";
import { IBasicsEntity } from "../../interface/resume.interface";

interface IAboutComponentProps {
  content: IBasicsEntity;
}

export const About: FC<IAboutComponentProps> = (props) => {
  const summary = props.content.summary.map((content, index) => (
    <p key={index}>{content}</p>
  ));

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
                {props.content.location.region && (
                  <span>, {props.content.location.region}</span>
                )}
                <br />
                <span>{props.content.location.countryCode}</span>
                <br />
                <a href={`mailto:${props.content.email}`}>
                  <span>{props.content.email}</span>
                </a>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a className="button" href={props.content.resumeUrl}>
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
