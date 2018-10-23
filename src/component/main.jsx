import React, { Component, Fragment } from "react";

import Header from "./header";
import Navigation from "./navigation";
import Banner from "./banner";
import ScrollDown from "./scrolldown";
import Section from "./section";
import Loading from "./loading";
import { NavigationConfig, getDataUrl } from "../config/app.config.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: false,
      navigation: NavigationConfig
    };
  }

  componentDidMount() {
    const url = getDataUrl();
    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({ resume: res });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({ resume: require("../data/resume.json") });
    }
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
