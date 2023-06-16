import { IResumeEntity } from 'src/interface/resume.interface';

export const resume: IResumeEntity = {
  basics: {
    name: 'Tushar Nimje',
    label: 'Software Engineer',
    picture: 'https://avatars2.githubusercontent.com/u/16893368?s=460&v=4',
    email: 'tusharnimje21@gmail.com',
    phone: '',
    website: 'https://nimjetushar.github.io',
    summary: [
      `Software engineer with hands on experience in Front end & back end development using Angular, React, Express and Nodejs. 
      Experience of working in an Agile and Fast-paced product development environment. Excellent written and verbal communication skills. 
      Interested in challenging technical roles as an applications development.`,
      `Conscientious, results-driven and analytical software engineer with years of professional exposure in software development. 
      Strong in architectural research, software design and agile team. Good work experience working as a Individual contributer and Team player`,
    ],
    resumeUrl:
      'https://github.com/nimjetushar/resume/raw/master/Tushar%20Nimje.pdf',
    location: {
      address: '',
      postalCode: '',
      city: 'Pune',
      countryCode: 'India',
      region: 'Maharashtra',
    },
    profiles: [
      {
        network: 'Email',
        username: 'tusharnimje21@gmail.com',
        url: 'mailto:tusharnimje21@gmail.com',
      },
      {
        network: 'LinkedIn',
        username: 'tushar',
        url: 'https://www.linkedin.com/in/tushar-nimje',
      },
      {
        network: 'GitHub',
        username: 'nimjetushar',
        url: 'https://github.com/nimjetushar',
      },
      {
        network: 'StackShare',
        username: 'nimjetushar',
        url: 'https://stackshare.io/nimjetushar/my-stack',
      },
      {
        network: 'HackerRank',
        username: 'tusharnimje21',
        url: 'https://www.hackerrank.com/tusharnimje21',
      },
      {
        network: 'npm',
        username: 'tusharnimje',
        url: 'https://www.npmjs.com/~tusharnimje',
      },
    ],
  },
  work: [
    {
      company: 'Credit Suisse',
      position: 'AVP',
      website: 'https://www.credit-suisse.com/in/en.html',
      startDate: 'Dec 2018',
      endDate: 'Present',
      summary: 'Pune, India',
      highlights: [
        'Handled multiple front end and backend projects build on Angular, React and Express.',
        'Responsible for architecture design, development and deployment of application.',
        'Developed an configurable UI module which caters different business use cases across different region',
      ],
    },
    {
      company: 'Synechron',
      position: 'Sr. Associate Technology',
      website: 'https://www.synechron.com',
      startDate: 'Mar 2017',
      endDate: 'Oct 2018',
      summary: 'Pune, India',
      highlights: [
        'Involved in the development of the company’s 2 main projects in the finance domain using Angular, javascript, HTML, CSS technology.',
        'Responsible for architecture design, development and deployment of application.',
        'Implemented CI/CD pipeline for all the Java microservices using Jenkins with PCF deployment.',
        'Delivered project using Agile methodology.',
      ],
    },
    {
      company: 'GlobalLogic India Pvt Ltd.',
      position: 'Software Engineer',
      website: 'https://www.globallogic.com',
      startDate: 'Oct 2014',
      endDate: 'Mar 2017',
      summary: 'Nagpur, India',
      highlights: [
        'Involved in development and issue fixing of project.',
        'Responsible for different modules of application.',
        'Received awards mutliple time for exceptional performance',
      ],
    },
  ],
  education: [
    {
      institution: 'G.H Raisoni College of Engineering',
      area: 'Electronic and Telecommunication (ETC)',
      studyType: 'Graduation',
      startDate: 'July 2009',
      endDate: 'June 2013',
      gpa: 'First class',
      summary: 'Nagpur, India',
      courses: ['B.E', 'Electronics', 'Telecommunication'],
    },
    {
      institution: 'Hadas Jr. College',
      area: 'Science',
      studyType: 'HSC',
      startDate: 'July 2008',
      endDate: 'June 2009',
      gpa: 'Distinction',
      summary: 'Nagpur, India',
      courses: ['Physic', 'Chemistry', 'Maths'],
    },
    {
      institution: 'Saraswati Vidyalaya',
      area: 'Science',
      studyType: 'SSC',
      startDate: 'July 2006',
      endDate: 'June 2007',
      gpa: 'Distinction',
      summary: 'Nagpur, India',
      courses: [],
    },
  ],
  skills: {
    details: [
      {
        title: 'Programming Languages',
        skillDetails: [
          {
            name: 'JavaScript',
            level: '90',
            keywords: ['programming'],
          },
          {
            name: 'HTML + CSS',
            level: '90',
            keywords: ['programming'],
          },
          {
            name: 'TypeScript',
            level: '90',
            keywords: ['programming'],
          },
          {
            name: 'Node Js',
            level: '80',
            keywords: ['programming', 'server technology'],
          },
          {
            name: 'Python',
            level: '50',
            keywords: ['language'],
          },
        ],
      },
      {
        title: 'Frameworks / Libraies',
        skillDetails: [
          {
            name: 'Angular',
            level: '90',
            keywords: ['Angular', 'Angular 2'],
          },
          {
            name: 'SCSS / Less',
            level: '80',
            keywords: ['css preprocessors'],
          },
          {
            name: 'React',
            level: '80',
            keywords: ['library'],
          },
          {
            name: 'Express Js',
            level: '70',
            keywords: ['framework'],
          },
        ],
      },
      {
        title: 'Database',
        skillDetails: [
          {
            name: 'Mongodb',
            level: '50',
            keywords: ['mongo db', 'mongoos'],
          },
          {
            name: 'SQL',
            level: '50',
            keywords: ['sql', 'microsoft sql database', 'database'],
          },
        ],
      },
      // {
      //   title: 'Tools',
      //   skillDetails: [
      //     {
      //       name: 'Git',
      //       level: '80',
      //       keywords: ['version management tool'],
      //     },
      //     {
      //       name: 'Webpack',
      //       level: '80',
      //       keywords: ['bundler'],
      //     },
      //     {
      //       name: 'Gulp',
      //       level: '70',
      //       keywords: ['build tool'],
      //     },
      //     {
      //       name: 'Cordova',
      //       level: '60',
      //       keywords: ['mobile app development tool'],
      //     },
      //   ],
      // },
    ],
    overview: [
      {
        title: 'Angular',
        icon: 'fa-brands fa-angular',
        url: 'https://angular.io/',
        style: { color: '#b53b3b' },
      },
      {
        title: 'React',
        icon: 'fa-brands fa-react',
        url: 'https://react.dev/',
        style: { color: '#005af5' },
      },
      {
        title: 'JavaScript',
        icon: 'fa-brands fa-js',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        style: { color: '#dcc218' },
      },
      {
        title: 'TypeScript',
        path: 'logo/typescript.svg',
        url: 'https://www.typescriptlang.org/',
        style: { width: '40px' },
      },
      {
        title: 'ES6',
        path: 'logo/es6.svg',
        style: { width: '36px', paddingBottom: '2px' },
      },
      {
        title: 'Node JS',
        icon: 'fa-brands fa-node',
        url: 'https://nodejs.org/en',
        style: { color: '#026e00' },
      },
      {
        title: 'Express JS',
        path: 'logo/expressjs.svg',
        url: 'https://expressjs.com/',
        style: { color: '#1e3152', width: '44px' },
      },
      {
        title: 'HTML 5',
        icon: 'fa-brands fa-html5',
        style: { color: '#db1a1a' },
      },
      {
        title: 'Python',
        icon: 'fa-brands fa-python',
        url: 'https://www.python.org/',
        style: { color: '#09076e' },
      },
      {
        title: 'Prime NG',
        path: 'logo/prime-ng.png',
        url: 'https://primeng.org/',
        style: { width: '38px' },
      },
      {
        title: 'Bootstrap',
        icon: 'fa-brands fa-bootstrap',
        url: 'https://getbootstrap.com/',
        style: { color: '#712cf9' },
      },
      {
        title: 'Font Awesome',
        icon: 'fa-brands fa-font-awesome',
        url: 'https://fontawesome.com/',
        style: { color: '#2b5279' },
      },
      {
        title: 'CSS',
        icon: 'fa-brands fa-css3-alt',
        style: { color: '#1e3152' },
      },
      {
        title: 'SASS',
        icon: 'fa-brands fa-sass',
        url: 'https://sass-lang.com/',
        style: { color: '#1e3152' },
      },
      {
        title: 'Less',
        icon: 'fa-brands fa-less',
        url: 'https://lesscss.org/',
        style: { color: '#1e3152' },
      },
      {
        title: 'RXJS',
        path: 'logo/rx-js.png',
        url: 'https://rxjs.dev/',
        style: { width: '40px' },
      },
      {
        title: 'Highchart',
        path: 'logo/highchart.png',
        url: 'https://www.highcharts.com/',
        style: { width: '40px' },
      },
      {
        title: 'jQuery',
        path: 'logo/jquery.png',
        url: 'https://jquery.com/',
        style: { width: '40px' },
      },
      {
        title: 'Material UI',
        path: 'logo/material-ui.png',
        url: 'https://mui.com/',
        style: { width: '40px' },
      },
      {
        title: 'Moment JS',
        path: 'logo/moment-js.png',
        url: 'https://momentjs.com/',
        style: { width: '40px' },
      },
      {
        title: 'Day JS',
        path: 'logo/day-js.png',
        url: 'https://day.js.org/',
        style: { width: '40px' },
      },
      {
        title: 'NPM',
        icon: 'fa-brands fa-npm',
        url: 'https://www.npmjs.com/',
        style: { color: '#db1a1a' },
      },
      {
        title: 'Yarn',
        icon: 'fa-brands fa-yarn',
        url: 'https://yarnpkg.com/',
        style: { color: '#6ca0f9' },
      },
      {
        title: 'React Native',
        icon: 'fa-brands fa-react',
        url: 'https://reactnative.dev/',
        style: { color: '#fff', backgroundColor: '#1e3152' },
      },
      {
        title: 'Nx dev',
        path: 'logo/nx-dev.svg',
        url: 'https://nx.dev/',
        style: { width: '50px', paddingBottom: '4px' },
      },
      {
        title: 'Webpack',
        path: 'logo/webpack.png',
        url: 'https://webpack.js.org/',
        style: { width: '40px' },
      },
      {
        title: 'Gulp',
        icon: 'fa-brands fa-gulp',
        url: 'https://gulpjs.com/',
        style: { color: '#db1a1a' },
      },
      {
        title: 'Babel',
        path: 'logo/babel.png',
        url: 'https://babeljs.io/',
        style: { width: '40px' },
      },
      {
        title: 'eslint',
        path: 'logo/eslint.png',
        url: 'https://eslint.org/',
        style: { width: '40px' },
      },
      {
        title: 'Prettier',
        path: 'logo/prettier.png',
        url: 'https://prettier.io/',
        style: { width: '40px' },
      },
      {
        title: 'Jest',
        path: 'logo/jest.png',
        url: 'https://jestjs.io/',
        style: { width: '45px' },
      },
      {
        title: 'Karma',
        path: 'logo/karma.png',
        style: { width: '45px' },
      },
      {
        title: 'Jasmine',
        path: 'logo/jasmine.png',
        style: { width: '40px' },
      },
      {
        title: 'GIT',
        icon: 'fa-brands fa-git',
        style: { color: '#db1a1a' },
      },
      {
        title: 'Github',
        icon: 'fa-brands fa-github',
        url: 'https://github.com/',
        style: { color: '#000' },
      },
      {
        title: 'Docker',
        icon: 'fa-brands fa-docker',
        url: 'https://www.docker.com/',
        style: { color: '#1b63de' },
      },
      {
        title: 'Jenkins',
        icon: 'fa-brands fa-jenkins',
        url: 'https://www.jenkins.io/',
        style: { color: '#1e3152' },
      },
      {
        title: 'Cordova',
        path: 'logo/cordova.webp',
        url: 'https://cordova.apache.org/',
        style: { width: '40px' },
      },
      {
        title: 'Ionic',
        path: 'logo/ionic.png',
        url: 'https://ionicframework.com/',
        style: { width: '40px' },
      },
      {
        title: 'SQL',
        path: 'logo/sql.png',
        style: { width: '40px' },
      },
      {
        title: 'Mongo DB',
        path: 'logo/mongodb.png',
        url: 'https://www.mongodb.com/',
        style: { width: '40px' },
      },
      {
        title: 'Nodepad ++',
        path: 'logo/notepad++.png',
        style: { width: '40px' },
      },
      {
        title: 'Visual Studio Code',
        path: 'logo/vs-code.webp',
        style: { width: '40px' },
      },
      {
        title: 'edge',
        icon: 'fa-brands fa-edge',
        style: { color: '#144eb3' },
      },
      {
        title: 'Chrome',
        icon: 'fa-brands fa-chrome',
        style: { color: '#1e3152' },
      },
      {
        title: 'Windows',
        icon: 'fa-brands fa-microsoft',
      },
    ],
  },
  languages: [
    {
      name: 'English',
      level: '90',
    },
    {
      name: 'Hindi',
      level: '90',
    },
    {
      name: 'Marathi',
      level: '90',
    },
  ],
  references: [
    {
      name: 'Carol Burnett',
      reference: 'Only I can change my life. No one can do it for me.',
    },
    {
      name: 'Walt Disney',
      reference:
        'All our dreams can come true if we have the courage to pursue them.',
    },
    {
      name: 'Jim Rohn',
      reference: 'Either you run the day, or the day runs you.',
    },
    {
      name: '',
      reference: 'Great things NEVER came from COMFORT ZONES.',
    },
  ],
};
