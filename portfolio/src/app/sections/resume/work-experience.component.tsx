import { FadeIn } from '../../components/fade-in.component';
import { Experience } from '../../types/resume.type';

type Props = {
  experience: Experience[];
};

export const WorkExperienceTimeline: React.FC<Props> = ({ experience }) => {
  return (
    <>
      <FadeIn>
        <li className="timeline-heading text-center">
          <div>
            <h3>Work Experience</h3>
          </div>
        </li>
      </FadeIn>
      {experience.map((exp, idx) => (
        <FadeIn key={idx}>
          <li className={idx % 2 ? 'timeline-inverted' : 'timeline-unverted'}>
            <div className="timeline-badge">
              <i className="icon-suitcase"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h3 className="timeline-title">{exp.position}</h3>
                <span className="company">
                  {exp.company} - {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <div className="timeline-body">
                <p>{exp.highlights.join(' ')}</p>
              </div>
            </div>
          </li>
        </FadeIn>
      ))}
    </>
  );
};
