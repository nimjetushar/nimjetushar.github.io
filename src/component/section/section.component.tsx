import { FC, Fragment } from "react";
import {
  IBasicsEntity,
  IEducationEntity,
  ILanguagesEntity,
  IReferencesEntity,
  ISkillsEntity,
  IWorkEntity,
} from "../../interface/resume.interface";

import { About } from "./about.component";
import { Work } from "./work.component";
// import Education from "./education";
// import Footer from "./footer";
// import Skills from "./skills";
// import References from "./references";

interface ISectionComponentProps {
  basics: IBasicsEntity;
  work: IWorkEntity[];
  education: IEducationEntity[];
  references: IReferencesEntity[];
  skills: ISkillsEntity[];
  languages: ILanguagesEntity[];
}

export const Section: FC<ISectionComponentProps> = (props) => {
  const skillsContent = {
    skills: props.skills,
    languages: props.languages,
  };

  return (
    <Fragment>
      <About content={props.basics} />
      <Work content={props.work} />
      {/* <Education content={props.education} />
      <Skills content={skillsContent} />
      <References content={props.references} />
      <Footer content={props.basics.profiles} /> */}
    </Fragment>
  );
};
