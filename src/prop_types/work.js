import PropTypes from 'prop-types';
import { bulletPoints } from './common';

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
