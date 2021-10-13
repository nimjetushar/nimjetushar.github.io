import { FC } from "react";
import { SocialMedia } from "./socialMedia.component";
import { IBasics } from "../interface/resume.interface";

interface IBannerComponentProps {
  basics: IBasics;
}

export const Banner: FC<IBannerComponentProps> = (props) => {
  return (
    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">{props.basics.name}</h1>
        <br />
        <hr />
        <SocialMedia ulClass="social" profiles={props.basics.profiles} />
      </div>
    </div>
  );
};
