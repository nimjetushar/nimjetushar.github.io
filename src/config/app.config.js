export const NavigationConfig = {
  home: 'Home',
  about: 'About',
  work: 'Work',
  education: 'Education',
  skill: 'Skills',
  testimonials: 'testimonials'
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
