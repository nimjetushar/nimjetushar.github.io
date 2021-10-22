import { FC } from "react";

interface ILinkComponentProps {
  link: string;
  name: string;
}

export const Link: FC<ILinkComponentProps> = (props) => {
  return (
    <li>
      <a className="smoothscroll" href={`#${props.link}`}>
        {props.name}
      </a>
    </li>
  );
};
