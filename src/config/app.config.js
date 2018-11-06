export const NavigationConfig = {
  home: "Home",
  about: "About",
  work: "Work",
  education: "Education",
  skill: "Skills",
  testimonials: "testimonials"
};

export function getDataUrl() {
  if (window.location.origin.indexOf("localhost") === -1) {
    return "./src/data/resume.json";
  }
}
