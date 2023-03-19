import React, { useState } from 'react';

interface IHeaderComponentProps {}

interface IHeaderComponentState {}

export const Header = (props: IHeaderComponentProps) => {
  const [window, setWindow] = useState({
    height: 0,
    width: 0,
  });

  updateDimensions() {
    return this.setState({
      window: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
    });
  }

  componentDidMount() {
    this.updateDimensions();
    return window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  // render() {
  //   const style = {
  //     height: window.innerHeight,
  //   };
  //   return (
  //     <header id="home" style={style}>
  //       {this.props.children}
  //     </header>
  //   );
  // }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  return (<header id="home" style={ height: window.innerHeight}>
  {props.children}
</header>)
}
