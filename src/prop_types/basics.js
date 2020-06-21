import PropTypes from 'prop-types';
import { bulletPoints, location, profiles } from './common';

export const basics = PropTypes.shape({
  email: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  location,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  profiles,
  resumeUrl: PropTypes.string.isRequired,
  summary: bulletPoints,
  website: PropTypes.string.isRequired
}).isRequired;
