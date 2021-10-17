import { FC } from "react";
import { BulletPoints } from "../bulletPoints.component";
import { IWorkEntity } from "../../interface/resume.interface";

interface IWorkEntryComponentProps {
  index: number;
  total: number;
  entry: IWorkEntity;
}

const WorkEntry: FC<IWorkEntryComponentProps> = (props) => {
  const index = props.index + 1;
  const divider = index === props.total ? <br /> : <hr />;

  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>
          <a
            href={props.entry.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.entry.company}
          </a>
        </h3>
        <p className="info">
          {props.entry.position}
          <span> &bull; </span>
          <span className="info-summary">{props.entry.summary}</span>
          <span> &bull; </span>
          <em className="date">
            {props.entry.startDate} - {props.entry.endDate}
          </em>
        </p>
        <BulletPoints points={props.entry.highlights} />
      </div>
      {divider}
    </div>
  );
};

interface IWorkComponentProps {
  content: IWorkEntity[];
}

export const Work: FC<IWorkComponentProps> = (props) => {
  const numEntries = props.content.length;
  return (
    <section id="work">
      <div className="row work">
        <div className="two columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="ten columns main-col">
          {props.content.map((entry, index) => {
            return (
              <WorkEntry
                key={index}
                index={index}
                total={numEntries}
                entry={entry}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
