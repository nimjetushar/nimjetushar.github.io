import { FadeIn } from '../../components/fade-in.component';
import { Education } from '../../types/resume.type';

type Props = {
  education: Education[];
};

export const EducationTimeline: React.FC<Props> = ({ education }) => {
  return (
    <>
      <FadeIn>
        <li className="timeline-heading text-center">
          <div>
            <h3>Education</h3>
          </div>
        </li>
      </FadeIn>
      {education.map((exp, idx) => (
        <FadeIn key={idx}>
          <li className={idx % 2 ? 'timeline-inverted' : 'timeline-unverted'}>
            <div className="timeline-badge">
              <i className="icon-suitcase"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h3 className="timeline-title">{exp.studyType}</h3>
                <span className="company">
                  {exp.institution} - {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <div className="timeline-body">
                <p></p>
              </div>
            </div>
          </li>
        </FadeIn>
      ))}
    </>
  );
};
