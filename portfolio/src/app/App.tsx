import './App.scss';
import { AboutSection } from './components/about-section.component';
import { SkillSection } from './components/skill-section.component';

export function App() {
  return (
    <div className="vg-page">
      <AboutSection />
      <SkillSection />
    </div>
  );
}

export default App;
