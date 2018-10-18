import PropTypes from "prop-types";

export const languages = PropTypes.shape({
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired
});

export const languagesSet = PropTypes.arrayOf(languages).isRequired;
