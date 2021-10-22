import { FC } from "react";

export const BulletPoints: FC<{ points: string[] }> = (props) => {
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
