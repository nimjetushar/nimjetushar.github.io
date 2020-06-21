import PropTypes from 'prop-types';
import { bulletPoints } from './common';

export const skillDetails = PropTypes.shape({
  keywords: bulletPoints,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});
export const skillDetailsSet = PropTypes.arrayOf(skillDetails);

export const skills = PropTypes.shape({
  description: bulletPoints,
  skillDetails: skillDetailsSet,
  title: PropTypes.string.isRequired
});
export const skillsSet = PropTypes.arrayOf(skills).isRequired;
