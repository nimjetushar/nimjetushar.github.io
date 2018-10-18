import React, { Component } from "react";
import PropTypes from "prop-types";
import { languages, languagesSet, skillsSet } from "../../prop_types";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        background: "#313131"
      }
    };
  }

  handleMouseEnter() {
    return this.setState({
      style: {
        background: "#11ABB0"
      }
    });
  }

  handleMouseLeave() {
    return this.setState({
      style: {
        background: "#313131"
      }
    });
  }

  render() {
    return (
      <li>
        <span
          className={`bar-expand percentage${this.props.entry.level}`}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
          style={this.state.style}
        />
        <em>{this.props.entry.name}</em>
      </li>
    );
  }
}
Entry.propTypes = {
  entry: languages
};

class Skill extends Component {
  render() {
    const summary = this.props.summary.map((point, index) => {
      return (
        <p key={index} className="skill-summary">
          {point}
        </p>
      );
    });
    return (
      <div className="row inside">
        <h3>{this.props.title}</h3>
        {summary}
        <div className="bars">
          <ul className="skills">
            {this.props.content.map((entry, index) => {
              return <Entry key={index} entry={entry} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
Skill.propTypes = {
  title: PropTypes.string.isRequired,
  content: languagesSet,
  summary: PropTypes.arrayOf(PropTypes.string).isRequired
};

class Skills extends Component {
  render() {
    return (
      <section id="skill">
        <div className="row skill">
          <div className="two columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="ten columns main-col">
            {this.props.content.skills.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  title={skill.title}
                  content={skill.skillDetails}
                  summary={skill.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
Skills.propTypes = {
  content: PropTypes.shape({
    skills: skillsSet,
    languages: languagesSet
  }).isRequired
};

export default Skills;
