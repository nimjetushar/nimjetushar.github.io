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
          {
            name: 'AngularJs',
            level: '80',
            keywords: ['Angular 1.x'],
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
      {
        title: 'Tools',
        skillDetails: [
          {
            name: 'Git',
            level: '80',
            keywords: ['version management tool'],
          },
          {
            name: 'Webpack',
            level: '80',
            keywords: ['bundler'],
          },
          {
            name: 'Gulp',
            level: '70',
            keywords: ['build tool'],
          },
          {
            name: 'Cordova',
            level: '60',
            keywords: ['mobile app development tool'],
          },
        ],
      },
    ],
    overview: [
      {
        icon: 'fa-brands fa-angular',
        title: 'Angular',
        style: { color: '#b53b3b' },
        url: 'https://angular.io/',
      },
      {
        icon: 'fa-brands fa-react',
        title: 'React',
        url: 'https://react.dev/',
        style: { color: '#005af5' },
      },
      {
        title: 'Nx dev',
        path: 'public/logo/nx-logo.svg',
        url: 'https://nx.dev/',
        style: { width: '50px', paddingBottom: '4px' },
      },
      {
        title: 'Prime NG',
        path: 'public/logo/prime-ng-logo.png',
        url: 'https://primeng.org/',
        style: { width: '38px' },
      },
      {
        title: 'JavaScript',
        icon: 'fa-brands fa-js',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        style: { color: '#dcc218' },
      },
      {
        title: 'TypeScript',
        path: 'public/logo/typescript-icon.svg',
        url: 'https://www.typescriptlang.org/',
        style: { width: '40px' },
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
        title: 'HTML 5',
        icon: 'fa-brands fa-html5',
        url: '',
        style: { color: '#db1a1a' },
      },
      {
        title: 'Python',
        icon: 'fa-brands fa-python',
        url: 'https://www.python.org/',
        style: { color: '#09076e' },
      },
      {
        title: 'Node JS',
        icon: 'fa-brands fa-node',
        url: 'https://nodejs.org/en',
        style: { color: '#416204' },
      },
      {
        title: 'Yarn',
        icon: 'fa-brands fa-yarn',
        url: 'https://yarnpkg.com/',
        style: { color: '#6ca0f9' },
      },
      {
        title: 'HTML 5',
        icon: 'fa-brands fa-html5',
        url: '',
        style: { color: '#db1a1a' },
      },
      {
        title: 'HTML 5',
        icon: 'fa-brands fa-html5',
        url: '',
        style: { color: '#db1a1a' },
      },
      {
        title: 'HTML 5',
        icon: 'fa-brands fa-html5',
        url: '',
        style: { color: '#db1a1a' },
      },
      {
        title: 'HTML 5',
        icon: 'fa-brands fa-html5',
        url: '',
        style: { color: '#db1a1a' },
      },
      {
        title: 'HTML 5',
        icon: 'fa-brands fa-html5',
        url: '',
        style: { color: '#db1a1a' },
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
