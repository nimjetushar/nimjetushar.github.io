import { Component, Fragment } from "react";
import { resume } from "../data/resume";
import { NavigationConfig } from "../config/app.constant";
import { IResumeEntity } from "../interface/resume.interface";
import { Header } from "./header.component";
import { Navigation } from "./navigation/navigation.component";
import { Banner } from "./banner.component";
import { ScrollDown } from "./scrollDown.component";
// import Section from "./section";

interface IMainComponentProps {}

interface IMainComponentState {
  navigation: {
    about: string;
    education: string;
    home: string;
    skill: string;
    testimonials: string;
    work: string;
  };
  resume: IResumeEntity;
}

export class Main extends Component<IMainComponentProps, IMainComponentState> {
  constructor(props: IMainComponentProps) {
    super(props);
    this.state = {
      navigation: NavigationConfig,
      resume,
    };
  }

  onLoad() {
    return (
      <Fragment>
        <Header>
          <Navigation navigation={this.state.navigation} />
          <Banner basics={this.state.resume.basics} />
          <ScrollDown />
        </Header>
        {/* <Section
          basics={this.state.resume.basics}
          work={this.state.resume.work}
          education={this.state.resume.education}
          skills={this.state.resume.skills}
          languages={this.state.resume.languages}
          portfolio={this.state.resume.projects}
          references={this.state.resume.references}
        /> */}
      </Fragment>
    );
  }

  render() {
    return this.state.resume ? this.onLoad() : "";
  }
}
