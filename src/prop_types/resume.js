import PropTypes from "prop-types";

export const location = PropTypes.shape({
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
}).isRequired;

export const profile = PropTypes.shape({
  network: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}).isRequired;
export const profiles = PropTypes.arrayOf(profile).isRequired;

export const bulletPoints = PropTypes.arrayOf(PropTypes.string).isRequired;

export const image = PropTypes.shape({
  modal: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired
}).isRequired;

export const description = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: bulletPoints
});

export const descriptions = PropTypes.arrayOf(description).isRequired;

// ----------------------------------------------------------------------------
// PROP SETS
// ----------------------------------------------------------------------------

export const navigation = PropTypes.object.isRequired;

export const basics = PropTypes.shape({
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  summary: bulletPoints,
  location: location,
  profiles: profiles
}).isRequired;

export const work = PropTypes.shape({
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  highlights: bulletPoints
});
export const workSet = PropTypes.arrayOf(work).isRequired;

export const volunteer = PropTypes.shape({
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  highlights: bulletPoints
});
export const volunteerSet = PropTypes.arrayOf(volunteer).isRequired;

export const education = PropTypes.shape({
  institution: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  studyType: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  gpa: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  courses: bulletPoints
});
export const educationSet = PropTypes.arrayOf(education).isRequired;

export const awards = PropTypes.shape({
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  awarder: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
});
export const awardsSet = PropTypes.arrayOf(awards).isRequired;

export const projects = PropTypes.shape({
  name: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image: image,
  keywords: bulletPoints
});
export const projectsSet = PropTypes.arrayOf(projects).isRequired;

export const skillDetails = PropTypes.shape({
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  keywords: bulletPoints
});
export const skillDetailsSet = PropTypes.arrayOf(skillDetails);

export const skills = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: bulletPoints,
  skillDetails: skillDetailsSet
});
export const skillsSet = PropTypes.arrayOf(skills).isRequired;

export const languages = PropTypes.shape({
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired
});

export const languagesSet = PropTypes.arrayOf(languages).isRequired;

export const interests = PropTypes.shape({
  name: PropTypes.string.isRequired,
  keywords: bulletPoints
});

export const interestsSet = PropTypes.arrayOf(interests).isRequired;

export const references = PropTypes.shape({
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired
});

export const referencesSet = PropTypes.arrayOf(references).isRequired;
