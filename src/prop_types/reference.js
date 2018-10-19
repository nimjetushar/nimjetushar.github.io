import PropTypes from "prop-types";

export const references = PropTypes.shape({
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired
});

export const referencesSet = PropTypes.arrayOf(references).isRequired;
