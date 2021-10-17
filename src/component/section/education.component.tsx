import { FC } from "react";
import { IEducationEntity } from "../../interface/resume.interface";

const EducationDetail: FC<{ detail: IEducationEntity }> = (props) => {
  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>{props.detail.institution}</h3>
        <p className="info">
          {props.detail.studyType} in {props.detail.area}
          <span> &bull; </span>
          <span className="info-summary">{props.detail.summary}</span>
          <span> &bull; </span>
          <em className="date">
            {props.detail.startDate} - {props.detail.endDate}
          </em>
        </p>
      </div>
    </div>
  );
};


interface IEducationComponentProps {
  content: IEducationEntity[];
}

export const Education: FC<IEducationComponentProps> = (props) => {
  return (
    <section id="education">
      <div className="row education">
        <div className="two columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="ten columns main-col">
          {props.content.map((item, index) => {
            return <EducationDetail key={index} detail={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
