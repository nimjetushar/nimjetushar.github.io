import React from 'react';

export const BulletPoints = ({ points }: { points: string[] }) => {
  return (
    <ul style={{ marginLeft: '14px' }}>
      {points.map((point, index) => (
        <li
          style={{ listStyle: 'disc', lineHeight: '30px' }}
          key={index}
          className="point"
        >
          {point}
        </li>
      ))}
    </ul>
  );
};
