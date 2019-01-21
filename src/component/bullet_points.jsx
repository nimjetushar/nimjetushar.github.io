import React, { Component } from 'react';
import { bulletPoints } from '../prop_types';

class BulletPoints extends Component {
  render() {
    return (
        <div>
            {this.props.points.map((point, index) => {
          return (
              <p key={ index } className="point">
                  <span className="bullet-point">&bull; </span>
                  {point}
              </p>
          );
        })}
        </div>
    );
  }
}
BulletPoints.propTypes = {
  points: bulletPoints
};

export default BulletPoints;
