const email = "tusharnimje21@gmail.com";

const details = {
  basics: {
    name: "Tushar Nimje",
    label: "Software Engineer",
    picture: "<PHOTO>",
    email: email,
    // phone: "<PHONE_NUMBER>",
    website: "https://nimjetushar.github.io",
    summary: [
      "Conscientious, results-driven and analytical software engineer with years of professional exposure in software development. Strong in architectural research, software design and agile team.",
      "Excellent written and verbal communication skills. Interested in challenging technical roles in web applications."
    ],
    location: {
      // address: "<ADDRESS>",
      // postalCode: "<POSTAL_CODE>",
      city: "Pune",
      countryCode: "India"
      // region: "<REGION>"
    },
    profiles: [
      {
        network: "Email",
        username: email,
        url: `mailto:${email}`
      },
      {
        network: "LinkedIn",
        username: "tushar",
        url: ""
      },
      {
        network: "GitHub",
        username: "nimjetushar",
        url: "https://github.com/nimjetushar"
      }
    ]
  },
  work: [
    {
      company: "Synechron Inc.",
      position: "Sr. Associate Technology",
      website: "https://www.synechron.com",
      startDate: "Mar 2017",
      endDate: "Oct 2018",
      summary: "Pune, India",
      highlights: ["<HIGHTLIGHT_1>", "<HIGHTLIGHT_2>", "<HIGHTLIGHT_3>"]
    },
    {
      company: "GlobalLogic India Pvt Ltd.",
      position: "Software Engineer",
      website: "https://www.globallogic.com",
      startDate: "Oct 2014",
      endDate: "Mar 2017",
      summary: "Nagpur, India",
      highlights: ["<HIGHTLIGHT_1>", "<HIGHTLIGHT_2>", "<HIGHTLIGHT_3>"]
    }
  ],
  education: [
    {
      institution: "G.H Raisoni College of Engineering",
      area: "Electronic and Telecommunication",
      studyType: "Graduation",
      startDate: "2009-06-01",
      endDate: "2013-05-30",
      gpa: "First",
      summary: "Nagpur, India"
      // courses: ["<COURSE_1>", "<COURSE_2>", "<COURSE_3>"]
    },
    {
      institution: "Hadas Jr. College",
      area: "Science",
      studyType: "Higher Secondary school",
      startDate: "2008-06-01",
      endDate: "2009-05-30",
      gpa: "Distinction",
      summary: "Nagpur, India"
    },
    {
      institution: "Saraswati Vidyalaya",
      area: "Science",
      studyType: "Secondary school",
      startDate: "2006-06-01",
      endDate: "2007-05-30",
      gpa: "Distinction",
      summary: "Nagpur, India"
    }
  ],
  projects: [
    {
      name: "<PUBLICATION_NAME>",
      publisher: "<PUBLISHER>",
      category: "<CATEGORY>",
      releaseDate: "<RELEASE_DATE>",
      website: "<WEBSITE>",
      summary: "<SUMMARY>",
      image: {
        modal: "<MODAL_IMAGE>",
        thumb: "<THUMBNAIL_IMAGE>"
      },
      keywords: ["<KEYWORD_1>", "<KEYWORD_2>", "<KEYWORD_3>"]
    }
  ],
  skills: [
    {
      title: "Programming Languages",
      description: [
        "Worked primarily with JavaScript on frameworks such as Angular, React.js, Express.js.",
        "Interested in functional programming and serverless architectures."
      ],
      skillDetails: [
        {
          name: "JavaScript",
          level: "90",
          keywords: ["programming"]
        }
      ]
    }
  ],
  languages: [
    {
      name: "English",
      level: "90"
    },
    {
      name: "Hindi",
      level: "90"
    },
    {
      name: "Marathi",
      level: "90"
    }
  ],
  interests: [
    {
      name: "<INTEREST_NAME>",
      keywords: ["<KEYWORD_1>", "<KEYWORD_2>", "<KEYWORD_3>"]
    }
  ],
  references: [
    {
      name: "<REFERENCE_NAME>",
      position: "<POSITION>",
      company: "<COMPANY>",
      reference: "<SUMMARY>"
    }
  ]
};

export default details;
