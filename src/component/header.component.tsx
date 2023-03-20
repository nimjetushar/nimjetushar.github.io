import React, { useEffect, useState } from 'react';

interface IHeaderComponentProps {
  children: React.ReactNode;
}

export const Header = (props: IHeaderComponentProps) => {
  const [windowAttr, setWindowAttr] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const updateDimensions = () => {
    return setWindowAttr({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  return (
    <header id="home" style={{ height: window.innerHeight }}>
      {props.children}
    </header>
  );
};
