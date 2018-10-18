import React, { Component } from "react";
import { projects, projectsSet } from "../../prop_types";
import Modal from "./modal";
import Random from "../../utils/random";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  handleOpenModal() {
    this.setState({
      modalOpen: true
    });
  }

  handleCloseModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return (
      <div className="columns portfolio-item">
        <div className="item-wrap" onClick={this.handleOpenModal.bind(this)}>
          <img src={this.props.entry.image.thumb} alt={this.props.entry.name} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{this.props.entry.name}</h5>
              <p>{this.props.entry.category}</p>
            </div>
          </div>
          <div className="link-icon">
            <i className="icon-down-open" />
          </div>
        </div>
        <Modal
          entry={this.props.entry}
          isOpen={this.state.modalOpen}
          onRequestClose={this.handleCloseModal.bind(this)}
        />
      </div>
    );
  }
}
Entry.proptypes = {
  entry: projects
};

class Portfolio extends Component {
  render() {
    const portfolio = Random.shuffleArray(this.props.content).slice(0, 8);

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Portfolio</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolio.map((entry, index) => {
                return <Entry key={index} index={index} entry={entry} />;
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Portfolio.proptypes = {
  content: projectsSet
};

export default Portfolio;
