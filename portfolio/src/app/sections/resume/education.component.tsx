import { Animate } from '../../components/animate.component';
import { Education } from '../../types/resume.type';

type Props = {
  education: Education[];
};

export const EducationTimeline: React.FC<Props> = ({ education }) => {
  return (
    <>
      <Animate>
        <li className="timeline-heading text-center">
          <div>
            <h3>Education</h3>
          </div>
        </li>
      </Animate>
      {education.map((exp, idx) => (
        <Animate key={idx}>
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
        </Animate>
      ))}
    </>
  );
};
