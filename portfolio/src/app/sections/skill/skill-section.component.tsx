import { FadeIn } from '../../components/fade-in.component';
import { Skills } from '../../types/resume.type';

type Props = {
  skills: Skills;
};

export const SkillSection: React.FC<Props> = ({ skills }) => {
  return (
    <div className="container py-5">
      <FadeIn>
        <h1 className="text-center fw-normal">My Skills</h1>
      </FadeIn>
      <div className="row py-3">
        {skills.details.map((s, idx) => (
          <div key={idx} className="col-md-6 my-4">
            <div className="px-lg-3">
              <FadeIn>
                <h4>{s.title}</h4>
              </FadeIn>
              {s.skillDetails.map((skill, skillIdx) => (
                <FadeIn key={skillIdx} className="progress-wrapper">
                  <span className="caption">{skill.name}</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                    >
                      {skill.level}%
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
