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
import { Education } from "./education.component";
import { Skills } from "./skills.component";
import { References } from "./references.component";
import { Footer } from "./footer.component";

interface ISectionComponentProps {
  basics: IBasicsEntity;
  work: IWorkEntity[];
  education: IEducationEntity[];
  references: IReferencesEntity[];
  skills: ISkillsEntity[];
  languages: ILanguagesEntity[];
}

export const Section: FC<ISectionComponentProps> = (props) => {
  return (
    <Fragment>
      <About content={props.basics} />
      <Work content={props.work} />
      <Education content={props.education} />
      <Skills skills={props.skills} />
      <References content={props.references} />
      <Footer content={props.basics.profiles} />
    </Fragment>
  );
};
