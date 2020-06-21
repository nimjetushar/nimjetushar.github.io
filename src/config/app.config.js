export const NavigationConfig = {
  about: 'About',
  education: 'Education',
  home: 'Home',
  skill: 'Skills',
  testimonials: 'testimonials',
  work: 'Work'
};

export function getDataUrl() {
  return new Promise((resolve, reject) => {
    if (window.location.origin.indexOf('localhost') === -1) {
      const url = './src/data/resume.json';
      fetch(url)
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    } else {
      const data = require('../data/resume.json');
      resolve(data);
    }
  });
}
