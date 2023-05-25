export const portfolio = {
  name: "Yizack Rangel",
  location: "La Chorrera, Panama",
  flag: "https://gist.githubusercontent.com/Yizack/260f39ecd845648c7e749fde1a18687b/raw/01875b5b95131280bd82e4d9ae170552694e2b73/Flag_of_Panama.svg",
  email: "yizackr@gmail.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/yizack",
      icon: "bi:github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yizack/",
      icon: "bi:linkedin"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/yizackr/",
      icon: "bi:instagram"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yizackr",
      icon: "bi:twitter"
    }
  ],
  education: [
    {
      institution: "Universidad Tecnológica de Panamá",
      city: "Panama City, Panama",
      diploma: "Computer and Systems Engineering",
      period: "Jan 2016 — May 2022"
    },
    {
      institution: "Escuela Secundaria Pedro Pablo Sánchez",
      city: "La Chorrera, Panama",
      diploma: "High School Diploma, Science",
      period: "Feb 2010 — Dec 2015"
    }
  ],
  works: [
    {
      company: "GRUPO K & H, S.A",
      city: "Pacora, Panama",
      position: "Web App Developer",
      period: "May 2022 — Present",
      bullets: [
        "Develop from scratch a web application to manage the inventory of products, suppliers, sellers, invoices, and customers of the company using Node.js on Heroku.",
        "Work alongside the Administrator to plan, develop, document, test, deploy, and maintain the web application and database.",
        "Create and maintain a role-based user login system.",
        "Develop a REST API to control user functions using Express.js with PostgreSQL while utilizing Vue.js on the front end.",
        "Implement Word and PDF invoices generator for physical printing.",
        "Incorporate search filters and Excel files generator of all the data for further analysis"
      ]
    },
    {
      company: "Panama Esports Productions",
      city: "Panama City, Panama",
      position: "Full-Stack Developer and Administrator ",
      period: "April 2019 — Present",
      bullets: [
        "Helping projects in favor of Esports and Gaming in Panama.",
        "Administration of the server, official website, and company's web domains.",
        "Work alongside the CEOs and Graphic Designers to plan and create landing web pages built with PHP or Vue.js for promoting and exhibiting gaming tournaments.",
        "Implement web forms for collecting tournament participants' data using MySQL.",
        "Carry out any other programming or web design work for clients who contact the company looking for a personalized service."
      ]
    }
  ],
  languages: [
    { name: "Spanish", level: "Native", p: 100 },
    { name: "English", level: "Advanced", p: 90 },
    { name: "French", level: "Elementary", p: 20 }
  ],
  qualities: [
    "Clean and readable code",
    "Use of code linter rules",
    "Performance optimization",
    "Troubleshooting",
    "Continuous Integration",
    "Optimistic",
    "Ability to adapt and learn",
    "Analytical and logical skills",
    "Time management"
  ],
  skills: {
    JavaScript: ["ES6+", "Node.js", "Vue.js", "Nuxt.js", "Capacitor"],
    SQL: ["PostgreSQL", "MySQL", "SQLite"],
    PHP: ["Native", "WordPress", "Composer"],
    Cloud: ["AWS", "Heroku", "Google Cloud"],
    Serverless: ["Cloudflare Workers", "Vercel"],
    "Continuous Integration": ["GitHub Actions", "Circle CI", "Jest", "Codecov"],
    Mobile: ["Android Studio"]
  },
  projects: [
    {
      name: "How Many Times Larger",
      description: "Website and Game for easy country size comparisons.",
      period: "February 2023 — Present",
      bullets: [
        "Developed a Web App project on Github Pages used to compare the size of countries using their total area.",
        "Automatically downloaded most of the images of the countries' flags and shapes using Node.js.",
        "Designed and implemented a game to test the visitor's knowledge of the countries, using Vue.js and Nuxt.js.",
        "Created an internal API class.",
        "Bundled an Android app through Github Actions using Capacitor.js and published it on Google Play Store."
      ],
      url: "https://howmanytimeslarger.com/",
      image: "/images/howmanytimeslarger.jpg",
      github: "https://github.com/Yizack/HowManyTimesLarger",
      technologies: ["Vue.js", "Nuxt.js", "Node.js", "Capacitor.js", "GitHub Pages", "GitHub Actions", "Bootstrap 5"]
    },
    {
      name: "Devago",
      description: "A web application to manage the inventory of products, suppliers, sellers, invoices, and customers of the company.",
      period: "May 2022 — Present",
      bullets: [
        "Develop from scratch a web application to manage the inventory of products, suppliers, sellers, invoices, and customers of the company using Node.js on Heroku.",
        "Work alongside the Administrator to plan, develop, document, test, deploy, and maintain the web application and database.",
        "Create and maintain a role-based user login system.",
        "Develop a REST API to control user functions using Express.js with PostgreSQL while utilizing Vue.js on the front end.",
        "Implement Word and PDF invoices generator for physical printing.",
        "Incorporate search filters and Excel files generator of all the data for further analysis"
      ],
      url: "",
      image: "/images/grupokh.jpg",
      github: "",
      technologies: ["Node.js", "PostgreSQL", "Vue.js", "Heroku", "AWS S3", "Bootstrap 5"]
    },
    {
      name: "GitHub Gists Readme",
      period: "Apr 2022 — Present",
      description: "Display a card with your Gists on your GitHub README.md",
      bullets: [
        "Developed a web app project on Vercel used to embed a list of Gists or pin a specific Gist of a GitHub user to their profile. Using Node.js and Handlebars.",
        "Performed continuous integration testing for the GitHub repository using Jest to code the unit tests of the web app, generate, and automatically upload the reports to Codecov.",
        "Documented the source code of the project using JSDoc."
      ],
      url: "https://gists-readme.yizack.com/",
      image: "/images/gist-readme.jpg",
      github: "https://github.com/Yizack/gists-readme",
      technologies: ["Node.js", "GitHub API", "Vercel", "Jest", "Codecov", "Github Actions", "Handlebars", "Bootstrap 5"]
    },
    {
      name: "PESP.GG Website",
      period: "Sep 2021 — Present",
      description: "The PESP.GG website is a collaborative project between programmers, graphic designers and the company Panama Esports Productions for the creation of the company's official website",
      url: "https://pesp.gg/",
      image: "/images/pespgg.jpg",
      github: "",
      technologies: ["PHP", "Bootstrap 5", "MySQL", "AWS EC2", "Bootstap 4", "Slack", "JQuery"]
    },
    {
      name: "Panama Metrobus Balance",
      period: "Oct 2019 — Present",
      description: "Panama Metrobus Balance is an app for balance and movements inquires for all Metro and Metrobus cards in Panama City.",
      bullets: [
        "Developed a 10,000+ total downloads Android app project, currently helps 3,000+ users in Panama City to know the balance and movements for all Metro and Metrobus cards.",
        "Designed a friendly, easy-to-use interface.",
        "Implemented time graphical displays of people's card spends and balance changes.",
        "Translated manually from Spanish to English everything in the app. Making it available in two languages.",
        "Created and maintained a user login system to store users' cards in their accounts using Heroku PostgreSQL and a PHP server on AWS."
      ],
      url: "https://saldometrobus.yizack.com/",
      image: "/images/saldometrobus.jpg",
      github: "",
      technologies: ["Android Studio", "Java", "PHP", "PostgreSQL", "AWS Elastic Beanstalk", "Bootstrap 5"]
    },
    {
      name: "Dimatis Website",
      period: "Dec 2018 — Present",
      description: "Music creator website.",
      bullets: [
        "Built a music creator website to showcase all the artist's albums and songs, biography, licensing, and links to music platforms and stores. Using Nuxt.js hosted on GitHub Pages.",
        "Created a beautiful HTML/CSS music player to play audio.",
        "Deployed serverless code on Cloudflare Workers while using the Meta API to show the Instagram feed and the Spotify API to show the followers on the website."
      ],
      url: "https://dimatis.yizack.com/",
      image: "/images/dimatis.jpg",
      github: "https://github.com/Yizack/dimatis",
      technologies: ["Nuxt.js", "Node.js", "Cloudflare Workers", "Bootstrap 5", "GitHub Pages", "Github Actions", "Spotify API", "Meta API"]
    },
    {
      name: "Spotify Playlist Adder",
      period: "Aug 2021",
      description: "A web app to add songs to a Spotify playlist.",
      bullets: [
        "Web service developed using the Spotify API and PHP to add a song to a playlist at a given position.",
        "Authorization implemented to grant users access permissions to Spotify data and features."
      ],
      url: "https://dev.yizack.com/spotify/playlist",
      image: "/images/playlist-adder.jpg",
      github: "",
      technologies: ["PHP", "Spotify API", "Bootstrap 5"]
    }
  ]
};
