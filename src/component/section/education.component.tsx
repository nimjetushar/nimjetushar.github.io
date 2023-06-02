import React from 'react';
import { IEducationEntity } from '../../interface/resume.interface';

const EducationDetail = ({ detail }: { detail: IEducationEntity }) => {
  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>{detail.institution}</h3>
        <p className="info">
          {detail.studyType} in {detail.area}
          <span> &bull; </span>
          <span className="info-summary">{detail.summary}</span>
          <span> &bull; </span>
          <em className="date">
            {detail.startDate} - {detail.endDate}
          </em>
        </p>
      </div>
    </div>
  );
};

interface IEducationComponentProps {
  content: IEducationEntity[];
}

export const Education = ({ content }: IEducationComponentProps) => {
  return (
    <section id="education">
      <div className="row education">
        <div className="two columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="ten columns main-col">
          {content.map((item, index) => (
            <EducationDetail key={index} detail={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
