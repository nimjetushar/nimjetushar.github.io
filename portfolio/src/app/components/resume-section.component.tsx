import { FadeIn } from './fade-in.component';

export const ResumeSection = () => {
  return (
    <div id="fh5co-resume" className="fh5co-bg-color js">
      <div className="container">
        <FadeIn>
          <div className="row ">
            <div className="col-md-12 text-center fh5co-heading">
              <h2>My Resume</h2>
            </div>
          </div>
        </FadeIn>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              <FadeIn>
                <li className="timeline-heading text-center ">
                  <div>
                    <h3>Work Experience</h3>
                  </div>
                </li>
              </FadeIn>
              <FadeIn>
                <li className=" timeline-unverted">
                  <div className="timeline-badge">
                    <i className="icon-suitcase"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Senior Developer</h3>
                      <span className="company">
                        Company Name - 2016 - Current
                      </span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </li>
              </FadeIn>
              <FadeIn>
                <li className="timeline-inverted">
                  <div className="timeline-badge">
                    <i className="icon-suitcase"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Junior Developer</h3>
                      <span className="company">
                        Company Name - 2013 - 2015
                      </span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, they live in
                        Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.
                      </p>
                    </div>
                  </div>
                </li>
              </FadeIn>
              <FadeIn>
                <li className=" timeline-unverted">
                  <div className="timeline-badge">
                    <i className="icon-suitcase"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">UI/UX Designer</h3>
                      <span className="company">
                        Company Name - 2010 - 2012
                      </span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </li>
              </FadeIn>

              <br />

              <FadeIn>
                <li className="timeline-heading text-center ">
                  <div>
                    <h3>Education</h3>
                  </div>
                </li>
              </FadeIn>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Masters Degree</h3>
                    <span className="company">
                      University Name - 2007 - 2009
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Bachelors Degree</h3>
                    <span className="company">
                      University Name - 2002 - 2006
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Diploma Course</h3>
                    <span className="company">College Name - 1999 - 2001</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Graduation</h3>
                    <span className="company">College Name - 1994 - 1998</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
