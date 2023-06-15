import React, { useState } from 'react';
import {
  SkillsEntity,
  SkillDetailsEntity,
  SkillOverviewEntity,
} from '../../interface/resume.interface';

export const Skills: React.FC<{ skills: SkillsEntity }> = ({ skills }) => {
  return (
    <section id="skill">
      <div className="row skill">
        <div className="two columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="ten columns main-col">
          {skills.details.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
        <div className="ten columns main-col">
          <SkillOverview overview={skills.overview} />
        </div>
      </div>
    </section>
  );
};

const SkillDetail: React.FC<{ detail: SkillDetailsEntity }> = (props) => {
  const [style, setStyle] = useState({
    background: '#313131',
  });

  function handleMouseEnter() {
    return setStyle({
      background: '#11ABB0',
    });
  }

  function handleMouseLeave() {
    return setStyle({
      background: '#313131',
    });
  }

  return (
    <li>
      <span
        className={`bar-expand percentage${props.detail.level}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={style}
      />
      <em>{props.detail.name}</em>
    </li>
  );
};

const Skill: React.FC<{
  title: string;
  skillDetails: SkillDetailsEntity[];
}> = ({ skillDetails, title }) => {
  return (
    <div className="row inside">
      <h3>{title}</h3>
      <div className="bars">
        <ul className="skills">
          {skillDetails.map((detail, index) => (
            <SkillDetail key={index} detail={detail} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const SkillOverview: React.FC<{ overview: SkillOverviewEntity[] }> = ({
  overview,
}) => {
  return (
    <>
      <h3>Overview</h3>
      {overview.map((o, index) => (
        <div
          key={index}
          style={{
            display: 'inline-block',
            fontSize: '40px',
            margin: '10px 20px 10px 2px',
            verticalAlign: 'bottom',
          }}
        >
          <a href={o.url ? o.url : void 0} target="_blank" rel="noreferrer">
            <OverviewElement {...o} />
          </a>
        </div>
      ))}
    </>
  );
};

const OverviewElement: React.FC<SkillOverviewEntity> = (props) => {
  const { title, icon, path, style } = props;
  if (icon) {
    return <i className={icon} title={title} style={style} />;
  } else if (path) {
    return <img src={path} alt={title} title={title} style={style} />;
  }
  return null;
};
