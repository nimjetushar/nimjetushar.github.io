import React from 'react';
import { resume } from '../data/resume';
import { NavigationConfig as navigation } from '../config/app.constant';
import { Header } from './header.component';
import { Navigation } from './navigation/navigation.component';
import { Banner } from './banner.component';
import { ScrollDown } from './scrollDown.component';
import { Section } from './section/section.component';

export function Main() {
  return resume ? (
    <>
      <Header>
        <Navigation navigation={navigation} />
        <Banner basics={resume.basics} />
        <ScrollDown />
      </Header>
      <Section {...resume} />
    </>
  ) : null;
}
