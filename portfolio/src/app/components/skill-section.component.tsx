export const SkillSection = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
      <div className="row py-3">
        <div className="col-md-6">
          <div className="px-lg-3">
            <h4 className="wow fadeInUp">Coding skills</h4>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">JavaScript</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  // style="width: 86%;"
                  // aria-valuenow="75"
                  // aria-valuemin="0"
                  // aria-valuemax="100"
                >
                  86%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">PHP</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  // style="width: 80%;"
                  // aria-valuenow="75"
                  // aria-valuemin="0"
                  // aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">HTML + CSS</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  // style="width: 100%;"
                  // aria-valuenow="75"
                  // aria-valuemin="0"
                  // aria-valuemax="100"
                >
                  100%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Phyton</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  // style="width: 90%;"
                  // aria-valuenow="75"
                  // aria-valuemin="0"
                  // aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-lg-3">
            <h4 className="wow fadeInUp">Design Skills</h4>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">UI / UX Design</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  // style="width: 92%;"
                  // aria-valuenow="75"
                  // aria-valuemin="0"
                  // aria-valuemax="100"
                >
                  92%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Web Design</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '99%' }}
                  // aria-valuenow="75"
                  // aria-valuemin="0"
                  // aria-valuemax="100"
                >
                  99%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Logo Design</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '79%' }}
                  // aria-valuenow="75"
                  // aria-valuemin="0"
                  // aria-valuemax="100"
                >
                  79%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
