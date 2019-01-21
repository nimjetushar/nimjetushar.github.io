import PropTypes from 'prop-types';

export const location = PropTypes.shape({
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
}).isRequired;

export const profile = PropTypes.shape({
  network: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}).isRequired;

export const profiles = PropTypes.arrayOf(profile).isRequired;

export const bulletPoints = PropTypes.arrayOf(PropTypes.string).isRequired;

export const image = PropTypes.shape({
  modal: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired
}).isRequired;

export const description = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: bulletPoints
});

export const descriptions = PropTypes.arrayOf(description).isRequired;
export const navigation = PropTypes.object.isRequired;
