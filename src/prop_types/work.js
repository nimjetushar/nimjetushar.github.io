import PropTypes from 'prop-types';
import { bulletPoints } from './common';

export const work = PropTypes.shape({
  company: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  highlights: bulletPoints,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
});
export const workSet = PropTypes.arrayOf(work).isRequired;
