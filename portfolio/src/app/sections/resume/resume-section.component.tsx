import { FadeIn } from '../../components/fade-in.component';
import { Education, Experience } from '../../types/resume.type';
import { EducationTimeline } from './education.component';
import { WorkExperienceTimeline } from './work-experience.component';

type Props = {
  experience: Experience[];
  education: Education[];
};

export const ResumeSection: React.FC<Props> = ({ experience, education }) => {
  return (
    <div id="fh5co-resume" className="container js">
      <FadeIn className="row">
        <div className="col-md-12 text-center fh5co-heading">
          <h2>My Resume</h2>
        </div>
      </FadeIn>
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <ul className="timeline">
            <WorkExperienceTimeline experience={experience} />

            <br />

            <EducationTimeline education={education} />
          </ul>
        </div>
      </div>
    </div>
  );
};
