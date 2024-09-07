import { Animate } from '../../components/animate.component';
import { Experience } from '../../types/resume.type';
import { TimelinePanel } from './timeline-panel.component';

type Props = {
  experience: Experience[];
};

export const WorkExperienceTimeline: React.FC<Props> = ({ experience }) => {
  return (
    <>
      <Animate>
        <li className="timeline-heading text-center">
          <div>
            <h3>Work Experience</h3>
          </div>
        </li>
      </Animate>
      {experience.map((exp, idx) => (
        <Animate key={idx}>
          <TimelinePanel
            inverted={!!(idx % 2)}
            subTitle={`${exp.company} - ${exp.startDate} - ${exp.endDate}`}
            title={exp.position}
            body={exp.highlights.join(' ')}
          />
        </Animate>
      ))}
    </>
  );
};
