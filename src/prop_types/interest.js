import PropTypes from "prop-types";
import { bulletPoints } from "./common";

export const interests = PropTypes.shape({
  name: PropTypes.string.isRequired,
  keywords: bulletPoints
});

export const interestsSet = PropTypes.arrayOf(interests).isRequired;
