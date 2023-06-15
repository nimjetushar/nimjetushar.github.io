import React, { useState } from 'react';
import {
  ISkillsEntity,
  ISkillDetailsEntity,
} from '../../interface/resume.interface';

type SkillDetailComponentProps = {
  detail: ISkillDetailsEntity;
};

const SkillDetail: React.FC<SkillDetailComponentProps> = (props) => {
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

type SkillComponentProps = {
  title: string;
  content: ISkillDetailsEntity[];
};

const Skill: React.FC<SkillComponentProps> = ({ content, title }) => {
  return (
    <div className="row inside">
      <h3>{title}</h3>
      <div className="bars">
        <ul className="skills">
          {content.map((detail, index) => (
            <SkillDetail key={index} detail={detail} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Skills: React.FC<{ skills: ISkillsEntity[] }> = ({ skills }) => {
  return (
    <section id="skill">
      <div className="row skill">
        <div className="two columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="ten columns main-col">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              title={skill.title}
              content={skill.skillDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
