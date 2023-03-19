import React, { useState } from 'react';
import { resume as resumeData } from '../data/resume';
import { NavigationConfig } from '../config/app.constant';
import { Header } from './header.component';
import { Navigation } from './navigation/navigation.component';
import { Banner } from './banner.component';
import { ScrollDown } from './scrollDown.component';
import { Section } from './section/section.component';

export function Main() {
  const [navigation] = useState(NavigationConfig);
  const [resume] = useState(resumeData);

  return resume ? (
    <>
      <Header>
        <Navigation navigation={navigation} />
        <Banner basics={resume.basics} />
        <ScrollDown />
      </Header>
      <Section
        basics={resume.basics}
        work={resume.work}
        education={resume.education}
        skills={resume.skills}
        languages={resume.languages}
        references={resume.references}
      />
    </>
  ) : null;
}
