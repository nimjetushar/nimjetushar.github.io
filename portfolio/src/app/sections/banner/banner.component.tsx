import {useEffect, useState} from 'react';
import Background from '../../../assets/images/background.jpg';
import {About} from '../../types/resume.type';

type Props = {
  about: About;
};

export const Banner: React.FC<Props> = ({about}) => {
  const [height, setHeight] = useState('1000px');

  useEffect(() => {
    setHeight(
      `${window.innerHeight || document.documentElement.clientHeight}px`
    );
  }, []);

  return (
    <header
      id="fh5co-header"
      className="fh5co-cover"
      role="banner"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: '0 0',
        height,
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="display-t text-center" style={{height}}>
          <div
            className="display-tc animate-box fadeIn animated-fast"
            data-animate-effect="fadeIn"
            style={{height}}
          >
            <div
              className="profile-thumb"
              style={{background: `url(${about.picture})`}}
            ></div>
            <h1>
              <span>{about.name}</span>
            </h1>
            <h3>
              <span>{about.jobTitle.join(' / ')}</span>
            </h3>
            <p></p>
            <ul className="fh5co-social-icons">
              {about.profiles.map((profile, idx) => (
                <li key={idx}>
                  <a href={profile.url}>
                    <i className={profile.iconClass}></i>
                  </a>
                </li>
              ))}
            </ul>
            <p></p>
          </div>
        </div>
      </div>
    </header>
  );
};
