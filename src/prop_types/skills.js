import PropTypes from "prop-types";
import { bulletPoints } from "./common";

export const skillDetails = PropTypes.shape({
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  keywords: bulletPoints
});
export const skillDetailsSet = PropTypes.arrayOf(skillDetails);

export const skills = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: bulletPoints,
  skillDetails: skillDetailsSet
});
export const skillsSet = PropTypes.arrayOf(skills).isRequired;
