import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';

type Props = {
  children: ReactElement | ReactElement[];
  className?: string;
};

export const FadeIn: React.FC<Props> = ({ children, className }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementVisible, setElementVisible] = useState(false);

  const onEntry = (arg: Waypoint.CallbackArgs) => {
    if (elementVisible) {
      return;
    }
    setElementVisible(true);
  };

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const isVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);
      setElementVisible(isVisible);
    }
  }, []);

  return (
    <Waypoint onEnter={onEntry}>
      <div
        ref={elementRef}
        className={`animate-box ${className ?? ''} ${
          elementVisible ? 'fadeInUp animated' : ''
        }`}
      >
        {children}
      </div>
    </Waypoint>
  );
};
