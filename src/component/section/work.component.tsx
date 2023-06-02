import React from 'react';
import { BulletPoints } from '../bulletPoints.component';
import { IWorkEntity } from '../../interface/resume.interface';

interface IWorkEntryComponentProps {
  index: number;
  total: number;
  detail: IWorkEntity;
}

const WorkDetail = ({ detail, index, total }: IWorkEntryComponentProps) => {
  const idx = index + 1;
  const divider = idx === total ? <br /> : <hr />;

  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>
          <a href={detail.website} target="_blank" rel="noopener noreferrer">
            {detail.company}
          </a>
        </h3>
        <p className="info">
          {detail.position}
          <span> &bull; </span>
          <span className="info-summary">{detail.summary}</span>
          <span> &bull; </span>
          <em className="date">
            {detail.startDate} - {detail.endDate}
          </em>
        </p>
        <BulletPoints points={detail.highlights} />
      </div>
      {divider}
    </div>
  );
};

interface IWorkComponentProps {
  content: IWorkEntity[];
}

export const Work = ({ content }: IWorkComponentProps) => {
  const numEntries = content.length;
  return (
    <section id="work">
      <div className="row work">
        <div className="two columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="ten columns main-col">
          {content.map((detail, index) => (
            <WorkDetail
              key={index}
              index={index}
              total={numEntries}
              detail={detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
