import React from 'react';

export interface IResumeEntity {
  basics: IBasicsEntity;
  work: IWorkEntity[];
  education: IEducationEntity[];
  skills: SkillsEntity;
  languages: ILanguagesEntity[];
  references: IReferencesEntity[];
}

export interface IBasicsEntity {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string[];
  resumeUrl: string;
  location: ILocationEntity;
  profiles: IProfilesEntity[];
}

export interface ILocationEntity {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface IProfilesEntity {
  network: string;
  username: string;
  url: string;
}

export interface IWorkEntity {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface IEducationEntity {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  summary: string;
  courses?: string[];
}

export type SkillsEntity = {
  details: { title: string; skillDetails: SkillDetailsEntity[] }[];
  overview: SkillOverviewEntity[];
};

export type SkillDetailsEntity = {
  name: string;
  level: string;
  keywords?: string[];
};

export type SkillOverviewEntity = {
  title: string;
  url: string;
  icon?: string;
  style?: React.CSSProperties;
  path?: string;
};

export interface ILanguagesEntity {
  name: string;
  level: string;
}

export interface IReferencesEntity {
  name: string;
  reference: string;
}
