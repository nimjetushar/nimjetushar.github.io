import PropTypes from 'prop-types';

export const languages = PropTypes.shape({
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

export const languagesSet = PropTypes.arrayOf(languages).isRequired;
