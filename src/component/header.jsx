import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: {
        height: 0,
        width: 0
      }
    };
  }

  updateDimensions() {
    return this.setState({
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  }

  componentDidMount() {
    this.updateDimensions();
    return window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    const style = {
      height: this.state.window.innerHeight
    };
    return (
      <header id="home" style={style}>
        {this.props.children}
      </header>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header;
