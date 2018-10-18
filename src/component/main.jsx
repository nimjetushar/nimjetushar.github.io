import React, { Component, Fragment } from "react";

import Header from "./header";
import Navigation from "./navigation";
import Banner from "./banner";
import ScrollDown from "./scrolldown";
import Section from "./section";
import Loading from "./loading";
import { NavigationConfig } from "../config/app.config.js";
import data from "../data/resume.json";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: false,
      navigation: NavigationConfig
    };
  }

  componentDidMount() {
    this.setState({ resume: data });
  }

  onLoad() {
    return (
      <Fragment>
        <Header>
          <Navigation navigation={this.state.navigation} />
          <Banner basics={this.state.resume.basics} />
          <ScrollDown />
        </Header>
        <Section
          basics={this.state.resume.basics}
          work={this.state.resume.work}
          education={this.state.resume.education}
          skills={this.state.resume.skills}
          languages={this.state.resume.languages}
          portfolio={this.state.resume.projects}
          references={this.state.resume.references}
        />
      </Fragment>
    );
  }

  render() {
    return this.state.resume ? this.onLoad() : <Loading />;
  }
}

export default Main;
