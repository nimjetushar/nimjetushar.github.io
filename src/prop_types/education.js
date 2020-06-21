import PropTypes from 'prop-types';
import { bulletPoints } from './common';

export const education = PropTypes.shape({
  area: PropTypes.string.isRequired,
  courses: bulletPoints,
  endDate: PropTypes.string.isRequired,
  gpa: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  studyType: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
});
export const educationSet = PropTypes.arrayOf(education).isRequired;
