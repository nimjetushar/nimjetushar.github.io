import React, {ReactElement, useEffect, useRef, useState} from 'react';
import {Waypoint} from 'react-waypoint';

type Props = {
  children: ReactElement | ReactElement[];
  type?: 'fadeInUp' | 'fadeInRight';
  className?: string;
};

export const Animate: React.FC<Props> = (props) => {
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
        className={`animate-box ${props.className ?? ''} ${
          elementVisible ? `${props.type ?? 'fadeInUp'} animated` : ''
        }`}
      >
        {props.children}
      </div>
    </Waypoint>
  );
};
