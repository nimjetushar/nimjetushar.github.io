import React from 'react';
import { About } from '../../types/resume.type';

export const AboutSection: React.FC<{ about: About }> = ({ about }) => {
  const themeList = getDetails(about);
  return (
    <div className="container page-about py-5">
      <div className="row">
        <div className="col-lg-4 py-3">
          <div className="img-place fadeInUp animated">
            <img src="../assets/img/person.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 fadeInRight animated">
          <h1 className="fw-light">{about.name}</h1>
          <h5 className="fg-theme mb-3">{about.label}</h5>
          {about.summary.map((s, idx) => (
            <p key={idx} className="text-muted">
              {s}
            </p>
          ))}

          <ul className="theme-list">
            {themeList.map((t, idx) => (
              <li key={idx}>
                <b>{t.label}</b> {t.value}
              </li>
            ))}
          </ul>
          <button className="btn btn-theme-outline">Download CV</button>
        </div>
      </div>
    </div>
  );
};

const getDetails = (about: About) => [
  {
    label: 'From:',
    value: `${about.location.origin.city}, ${about.location.origin.country}`,
  },
  {
    label: 'Lives In:',
    value: `${about.location.current.city}, ${about.location.current.country}`,
  },
  {
    label: 'Age:',
    value: new Date().getFullYear() - new Date(about.dob).getFullYear(),
  },
  {
    label: 'Gender:',
    value: about.gender,
  },
];
