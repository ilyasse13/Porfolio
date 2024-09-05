import project1 from "../assets/projects/Projet1.png";
import project2 from "../assets/projects/Projet2.png";
import project4 from "../assets/projects/LOGO.png";
import project5 from "../assets/projects/mevnproject.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Although I am at the beginning of my journey, I am dedicated to mastering front-end technologies like React, Tailwind, and Bootstrap, as well as back-end technologies like Laravel and MySQL. My goal is to leverage my growing expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. While I am at the beginning of my journey, I am actively working with a variety of technologies, including React, Laravel, Tailwind, Bootstrap, and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Resident Connect",
    image: project1,
    description:
      "Resident Connect is a web app designed for managing residences efficiently.",
    technologies: ["tailwind", "React", "laravel", "Mysql"],
    github:"https://github.com/ilyasse13/resident_connect"
  },
  {
    title: "Movie app front end",
    image: project2,
    description:
      "A front-end movie app that displays movies fetched from an API.",
    technologies: ["HTML", "CSS", "React"],
    github:"https://github.com/ilyasse13/React_mv_app"
  },
 
  {
    title: "La bonne Adresse (Freelance)",
    image: project4,
    description:
      "A travel project highlighting restaurants, coffee shops, and nightclubs in Marseille, with reservation capabilities on the website.",
    technologies: ["HTML", "CSS", "tailwind", "React", "mySQL","Laravel"],
  },
  {
    title: "recipe sharing app",
    image: project5,
    description:"A recipe-sharing app that lets users post, browse, and explore a variety of dishes, from everyday meals to gourmet recipes. It fosters a community for cooking enthusiasts to share their creations and discover new ideas",
    technologies: ["vue", "tailwind", "mongodb","express","nodejs"],
    github:"https://github.com/ilyasse13/mevn_project"
  }
];

export const CONTACT = {
  address: "Casablanca",
  phoneNo: "+212 617990391",
  email: "ilyasseloubardi@gmail.com",
};
