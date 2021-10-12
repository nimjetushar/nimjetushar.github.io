export interface IResumeObj {
  basics: IBasics;
  work?: IWorkEntity[] | null;
  education?: IEducationEntity[] | null;
  skills?: ISkillsEntity[] | null;
  languages?: ILanguagesEntity[] | null;
  references?: IReferencesEntity[] | null;
}

export interface IBasics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary?: string[] | null;
  resumeUrl: string;
  location: Location;
  profiles?: IProfilesEntity[] | null;
}

export interface ILocation {
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
  highlights?: string[] | null;
}

export interface IEducationEntity {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  summary: string;
  courses?: (string | null)[] | null;
}

export interface ISkillsEntity {
  title: string;
  description?: null[] | null;
  skillDetails?: ISkillDetailsEntity[] | null;
}

export interface ISkillDetailsEntity {
  name: string;
  level: string;
  keywords?: string[] | null;
}

export interface ILanguagesEntity {
  name: string;
  level: string;
}

export interface IReferencesEntity {
  name: string;
  reference: string;
}
