import React, { Component } from 'react';

class ScrollDown extends Component {
    render() {
        return (
            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle" />
                </a>
            </p>
        );
    }
}

export default ScrollDown;
