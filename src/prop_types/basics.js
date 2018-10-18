import PropTypes from "prop-types";
import { bulletPoints, location, profiles } from "./common";

export const basics = PropTypes.shape({
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  summary: bulletPoints,
  location: location,
  profiles: profiles
}).isRequired;
