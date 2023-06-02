import React from 'react';
import { SocialMedia } from './socialMedia.component';
import { IBasicsEntity } from '../interface/resume.interface';

interface IBannerComponentProps {
  basics: IBasicsEntity;
}

export const Banner = ({ basics }: IBannerComponentProps) => {
  return (
    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">{basics.name}</h1>
        <br />
        <hr />
        <SocialMedia ulClass="social" profiles={basics.profiles} />
      </div>
    </div>
  );
};
