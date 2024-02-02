import React from 'react';
import { About } from '../types/resume.type';

export const AboutSection: React.FC<{ about: About }> = ({ about }) => {
  const themeList = getDetails(about);
  return (
    <>
      <div className="container page-about py-5">
        <div className="row">
          <div className="col-lg-4 py-3">
            <div className="img-place wow fadeInUp animated">
              <img src="../assets/img/person.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 wow fadeInRight animated">
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
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 wow fadeInRight">
            <h2 className="fw-normal">Education</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">2010</div>
                <div className="details">
                  <h5>Specialize of course</h5>
                  <small className="fg-theme">University of Study</small>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </li>
              <li>
                <div className="title">2009</div>
                <div className="details">
                  <h5>Specialize of course</h5>
                  <small className="fg-theme">University of Study</small>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </li>
              <li>
                <div className="title">2008</div>
                <div className="details">
                  <h5>Specialize of course</h5>
                  <small className="fg-theme">University of Study</small>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
            <h2 className="fw-normal">Experience</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">2017 - Current</div>
                <div className="details">
                  <h5>Specialize of course</h5>
                  <small className="fg-theme">University of Study</small>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </li>
              <li>
                <div className="title">2014</div>
                <div className="details">
                  <h5>Specialize of course</h5>
                  <small className="fg-theme">University of Study</small>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </li>
              <li>
                <div className="title">2011</div>
                <div className="details">
                  <h5>Specialize of course</h5>
                  <small className="fg-theme">University of Study</small>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
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
