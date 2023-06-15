import React from 'react';
import {
  IBasicsEntity,
  IEducationEntity,
  ILanguagesEntity,
  IReferencesEntity,
  SkillsEntity,
  IWorkEntity,
  IResumeEntity,
} from '../../interface/resume.interface';

import { About } from './about.component';
import { Work } from './work.component';
import { Education } from './education.component';
import { Skills } from './skills.component';
import { References } from './references.component';
import { Footer } from './footer.component';

export const Section: React.FC<IResumeEntity> = (props) => {
  return (
    <>
      <About content={props.basics} />
      <Work content={props.work} />
      <Education content={props.education} />
      <Skills skills={props.skills} />
      <References content={props.references} />
      <Footer content={props.basics.profiles} />
    </>
  );
};
