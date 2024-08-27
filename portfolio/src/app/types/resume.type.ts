type Location = {
  city: string;
  country: string;
};

export type About = {
  name: string;
  label: string;
  picture: string;
  email: string;
  website: string;
  summary: Array<string>;
  resumeUrl: string;
  gender: 'Male' | 'Female';
  dob: string;
  location: {
    current: Location;
    origin: Location;
  };
  profiles: {
    network: string;
    username: string;
    url: string;
  }[];
};

export type Experience = {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

export type Education = {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  summary: string;
  courses: string[];
};

export type SkillDetails = {
  name: string;
  level: string;
  keywords: string[];
};

export type Skills = {
  details: {
    title: string;
    skillDetails: SkillDetails[];
  }[];
};

export type Resume = {
  about: About;
  work: Experience[];
  education: Education[];
  skills: Skills;
};
