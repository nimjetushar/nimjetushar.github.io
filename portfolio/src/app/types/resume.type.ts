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
  profiles: Array<{
    network: string;
    username: string;
    url: string;
  }>;
};

export type Resume = {
  about: About;
};
