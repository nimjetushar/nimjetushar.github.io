import React from 'react';
import { IProfilesEntity } from '../interface/resume.interface';

interface ISocialMediaComponentProps {
  profiles: IProfilesEntity[];
  ulClass: string;
}

function mapIcon(socialMedia: string) {
  switch (socialMedia) {
    case 'email':
      return <i className="fas fa-envelope" />;
    case 'stackshare':
      return <i className="stackshare-logo" />;
    case 'hackerrank':
      return <i className="fab fa-hackerrank" />;
    case 'npm':
      return <i className="fab fa-npm" />;
    default:
      return <i className={`fab fa-${socialMedia.replace(/ /g, '-')}`} />;
  }
}

export const SocialMedia = ({
  profiles,
  ulClass,
}: ISocialMediaComponentProps) => {
  return (
    <div>
      <ul className={ulClass}>
        {profiles.map((profile, index) => {
          const icon = mapIcon(profile.network.toLowerCase());
          return (
            <li key={index}>
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
