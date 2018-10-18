import React, { Component } from "react";
import Carousel from "nuka-carousel";
import { referencesSet, references } from "../../prop_types";

class Entry extends Component {
  render() {
    return (
      <div>
        <blockquote>
          <p>{this.props.entry.reference}</p>
          <cite>
            {this.props.entry.name}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`${this.props.entry.position}, ${this.props.entry.company}`}
          </cite>
        </blockquote>
      </div>
    );
  }
}
Entry.propTypes = {
  entry: references
};

class References extends Component {
  render() {
    const carouselConfig = {
      autoplay: true,
      wrapAround: true,
      withoutControls: true
    };

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>References</span>
              </h1>
            </div>
            <div className="columns flex-container">
              <div className="flexslider">
                <Carousel
                  autoplay={carouselConfig.autoplay}
                  wrapAround={carouselConfig.wrapAround}
                  withoutControls={carouselConfig.withoutControls}
                >
                  {this.props.content.map((entry, index) => {
                    return <Entry key={index} entry={entry} />;
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
References.propTypes = {
  content: referencesSet
};

export default References;
