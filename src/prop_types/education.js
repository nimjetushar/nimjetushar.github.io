import PropTypes from 'prop-types';
import { bulletPoints } from './common';

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
