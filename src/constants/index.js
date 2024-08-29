import project1 from "../assets/projects/Projet1.png";
import project2 from "../assets/projects/Projet2.png";
import project4 from "../assets/projects/LOGO.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Although I am at the beginning of my journey, I am dedicated to mastering front-end technologies like React, Tailwind, and Bootstrap, as well as back-end technologies like Laravel and MySQL. My goal is to leverage my growing expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. While I am at the beginning of my journey, I am actively working with a variety of technologies, including React, Laravel, Tailwind, Bootstrap, and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Resident Connect",
    image: project1,
    description:
      "Resident Connect is a web app designed for managing residences efficiently.",
    technologies: ["tailwind", "React", "laravel", "Mysql"],
  },
  {
    title: "Movie app front end",
    image: project2,
    description:
      "A front-end movie app that displays movies fetched from an API.",
    technologies: ["HTML", "CSS", "React"],
  },
 
  {
    title: "La bonne Adresse (Freelance)",
    image: project4,
    description:
      "A travel project highlighting restaurants, coffee shops, and nightclubs in Marseille, with reservation capabilities on the website.",
    technologies: ["HTML", "CSS", "tailwind", "React", "mySQL","Laravel"],
  },
];

export const CONTACT = {
  address: "Casablanca",
  phoneNo: "+212 617990391",
  email: "ilyasseloubardi@gmail.com",
};
