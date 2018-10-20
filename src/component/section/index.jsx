import React, { Component, Fragment } from "react";
import {
  basics,
  workSet,
  educationSet,
  referencesSet,
  projectsSet
} from "../../prop_types";

import About from "./about";
import Education from "./education";
// import Portfolio from "./portfolio";
import Footer from "./footer";
import Skills from "./skills";
import Work from "./work";
import References from "./references";

class Section extends Component {
  render() {
    const skillsContent = {
      skills: this.props.skills,
      languages: this.props.languages
    };

    return (
      <Fragment>
        <About content={this.props.basics} />
        <Work content={this.props.work} />
        <Education content={this.props.education} />
        <Skills content={skillsContent} />
        {/* <Portfolio content={this.props.portfolio} /> */}
        <References content={this.props.references} />
        <Footer content={this.props.basics} />
      </Fragment>
    );
  }
}

Section.propTypes = {
  basics,
  work: workSet,
  education: educationSet,
  portfolio: projectsSet,
  references: referencesSet
};

export default Section;
