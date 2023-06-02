import React from 'react';

export const BulletPoints = ({ points }: { points: string[] }) => {
  return (
    <div>
      {points.map((point, index) => (
        <p key={index} className="point">
          <span className="bullet-point">&bull; </span>
          {point}
        </p>
      ))}
    </div>
  );
};
