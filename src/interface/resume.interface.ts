export interface IResumeEntity {
  basics: IBasicsEntity;
  work?: IWorkEntity[];
  education?: IEducationEntity[];
  skills?: ISkillsEntity[];
  languages?: ILanguagesEntity[];
  references?: IReferencesEntity[];
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
  highlights?: string[];
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

export interface ISkillsEntity {
  title: string;
  description?: null[];
  skillDetails?: ISkillDetailsEntity[];
}

export interface ISkillDetailsEntity {
  name: string;
  level: string;
  keywords?: string[];
}

export interface ILanguagesEntity {
  name: string;
  level: string;
}

export interface IReferencesEntity {
  name: string;
  reference: string;
}
