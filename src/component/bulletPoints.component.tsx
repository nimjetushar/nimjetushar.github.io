import React from "react";

export const BulletPoints = (props: { points: string[] }) => {
  return (
    <div>
      {props.points.map((point, index) => {
        return (
          <p key={index} className="point">
            <span className="bullet-point">&bull; </span>
            {point}
          </p>
        );
      })}
    </div>
  );
};
