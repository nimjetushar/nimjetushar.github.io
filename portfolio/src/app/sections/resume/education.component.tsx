import { Animate } from '../../components/animate.component';
import { Education } from '../../types/resume.type';
import { TimelinePanel } from './timeline-panel.component';

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
      {education.map((edu, idx) => (
        <Animate key={idx}>
          <TimelinePanel
            inverted={!!(idx % 2)}
            subTitle={`${edu.institution} - ${edu.startDate} - ${edu.endDate}`}
            title={edu.studyType}
          />
        </Animate>
      ))}
    </>
  );
};
