import works from "./portfolio/works";
import skills from "./portfolio/skills";
import projects from "./portfolio/projects";

export const portfolio = {
  name: "Yizack Rangel",
  location: "La Chorrera, Panama",
  flag: "https://gist.githubusercontent.com/Yizack/260f39ecd845648c7e749fde1a18687b/raw/01875b5b95131280bd82e4d9ae170552694e2b73/Flag_of_Panama.svg",
  email: "yizackr@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/yizack", icon: "bi:github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yizack/", icon: "bi:linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/yizackr/", icon: "bi:instagram" },
    { name: "Twitter", url: "https://twitter.com/yizackr", icon: "bi:twitter-x" }
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
  works,
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
    "Conventional Commits",
    "Optimistic",
    "Ability to adapt and learn",
    "Analytical and logical skills",
    "Time management"
  ],
  skills,
  projects
};
