import React, { Component } from 'react';
import { education, educationSet } from '../../prop_types';

class Entry extends Component {
    render() {
        return (
            <div className="row item">
                <div className="twelve columns">
                    <h3>{this.props.entry.institution}</h3>
                    <p className="info">
                        {this.props.entry.studyType} in {this.props.entry.area}
                        <span> &bull; </span>
                        <span className="info-summary">{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        <em className="date">
                            {this.props.entry.startDate} - {this.props.entry.endDate}
                        </em>
                    </p>
                </div>
            </div>
        );
    }
}
Entry.propTypes = {
    entry: education
};

class Education extends Component {
    render() {
        return (
            <section id="education">
                <div className="row education">
                    <div className="two columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className="ten columns main-col">
                        {this.props.content.map((entry, index) => {
                            return <Entry key={index} entry={entry} />;
                        })}
                    </div>
                </div>
            </section>
        );
    }
}
Education.propTypes = {
    content: educationSet
};

export default Education;
