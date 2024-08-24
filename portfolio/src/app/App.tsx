import './App.scss';
import { AboutSection } from './components/about-section.component';
import { ResumeSection } from './components/resume-section.component';
import { SkillSection } from './components/skill-section.component';
import { resume } from './data';

export function App() {
  return (
    <div className="vg-page">
      <AboutSection about={resume.about} />
      <ResumeSection />
      <SkillSection />
    </div>
  );
}

export default App;
