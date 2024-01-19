export const AboutSection = () => {
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
            <h1 className="fw-light">Stephen Doe</h1>
            <h5 className="fg-theme mb-3">UI/UX & Web Designer</h5>
            <p className="text-muted">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form but the
              majority have suffered alteration in some
            </p>
            <ul className="theme-list">
              <li>
                <b>From:</b> Texas, US
              </li>
              <li>
                <b>Lives In:</b> Texas, US
              </li>
              <li>
                <b>Age:</b> 25
              </li>
              <li>
                <b>Gender:</b> Male
              </li>
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
