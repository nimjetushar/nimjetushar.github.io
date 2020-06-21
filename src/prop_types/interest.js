import PropTypes from 'prop-types';
import { bulletPoints } from './common';

export const interests = PropTypes.shape({
  keywords: bulletPoints,
  name: PropTypes.string.isRequired
});

export const interestsSet = PropTypes.arrayOf(interests).isRequired;
