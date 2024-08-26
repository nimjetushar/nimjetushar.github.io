import './App.scss';
import { resume } from './data';
import { AboutSection } from './sections/about/about-section.component';
import { ResumeSection } from './sections/resume/resume-section.component';
import { SkillSection } from './sections/skill/skill-section.component';

export function App() {
  return (
    <div className="vg-page">
      <AboutSection about={resume.about} />
      <SkillSection />
      <ResumeSection experience={resume.work} education={resume.education} />
    </div>
  );
}

export default App;
