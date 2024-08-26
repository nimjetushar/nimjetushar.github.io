import React, { ReactElement, useState } from 'react';
import { Waypoint } from 'react-waypoint';

type Props = {
  children: ReactElement;
};

export const FadeIn: React.FC<Props> = ({ children }) => {
  const [elementVisible, setElementVisible] = useState(false);

  const onEntry = (arg: Waypoint.CallbackArgs) => {
    if (elementVisible) {
      return;
    }
    setElementVisible(true);
  };

  return (
    <Waypoint onEnter={onEntry} bottomOffset={'20%'}>
      <div
        className={`animate-box ${
          elementVisible ? 'fadeInUp animated-fast' : ''
        }`}
      >
        {children}
      </div>
    </Waypoint>
  );
};
