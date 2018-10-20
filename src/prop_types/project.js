import PropTypes from "prop-types";
import { image, bulletPoints } from "./common";

export const projects = PropTypes.shape({
  name: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image,
  keywords: bulletPoints
});
export const projectsSet = PropTypes.arrayOf(projects).isRequired;
