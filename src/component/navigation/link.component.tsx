import React from "react";

interface ILinkComponentProps {
  link: string;
  name: string;
}

export const Link = (props: ILinkComponentProps) => {
  return (
    <li>
      <a className="smoothscroll" href={`#${props.link}`}>
        {props.name}
      </a>
    </li>
  );
};
