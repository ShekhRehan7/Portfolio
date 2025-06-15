// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';

import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';

import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';


import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import mcLogo from './assets/tech_logo/mc.png';


// Experience Section Logo's
import hanumantLogo from './assets/company_logo/hanumant_logo.png'


// Education Section Logo's
import ggitLogo from './assets/education_logo/ggit.png';
import baasLogo from './assets/education_logo/baas.png';
import mrrsLogo from './assets/education_logo/mrrs.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/password.png';
import Ecommerce from './assets/work_logo/Ecommerce.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import socialApp from './assets/work_logo/socialApp.png';
import food_order from './assets/work_logo/food_order.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
     
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
     { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Atlas', logo: mcLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: hanumantLogo,
      role: "Fullstack Developer",
      company: "Hanumant Technology Pvt. Ltd.",
      date: "July 2024 - May2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "JWT",
        "API",
        "Express JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "Git",
        "GitHub",
        "Vercel",
        "Render",
        "Atlas"
      ],
    },

  ];
  
  export const education = [
  
    {
      id: 0,
      img: ggitLogo,
      school: "Great Ganges Institute of Technology",
      date: "Aug 2022 - July 2025",
      grade: "My result is not yet published",
      desc: "I completed my Bachelor's degree in Computer Application (B.C.A) from Great Ganges Institute of Technology, Unnao. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Computer Application - BCA (Computer Application)",
    },
    {
      id: 1,
      img: baasLogo,
      school: "BAAS Inter College, Unnao",
      date: "Apr 2021 - March 2022",
      grade: "68.7%",
      desc: "I completed my class 12 education from BAAS Inter College, Unnao, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM)with English Hindi.",
      degree: "UP Board(XII) - PCM ",
    },
    {
      id: 2,
      img: mrrsLogo,
      school: "MRRS Inter College, Unnao",
      date: "Apr 2019 - March 2020",
      grade: "69.8%",
      desc: "I completed my class 10 education from MRRS Inter College, Unnao, under the UP board, where I studied Science.",
      degree: "UP Board(X), Science ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Social Media Website",
      description:
        "A modern social media app built using HTML, CSS, JavaScript, React JS, Redux, Tailwind CSS, JWT, API, Node JS, Express JS, MongoDB, and Socket.io. It features real-time chat, secure authentication, post sharing, and a fully responsive UI. The frontend is developed with React and Tailwind, while the backend uses Node.js, Express, and MongoDB.",
      image:socialApp,
      tags: ["HTML", "CSS", "JavaScript" ,"React JS","Redux","Tailwind CSS","JWT","API","Node JS","Express JS","MongoDB","Socket",],
      github: "https://github.com/ShekhRehan7/Social_Media",
      webapp: "https://social-media-rouge-three.vercel.app/login",
    },
    {
      id: 1,
      title: "Random Password Generator",
      description:
        "Random Password Generator is a secure and easy-to-use web app for creating strong, customizable passwords. Users can select length, include letters, numbers, and symbols, then generate and copy passwords instantly. It requires no login and offers a clean, mobile-friendly interface for quick and safe password creation.",
      image:githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ShekhRehan7/Random-Password-Generator",
      webapp: "https://random-password-generator-sigma-blue.vercel.app/",
    },
    {
      id: 2,
      title: "Ecommerce",
      description:
        "RedStore is a fully front-end eCommerce demo website built without any backend or database.It includes pages like Login, Register, Home, Products, Cart, and Payment, all functioning using local storage only.The project showcases a complete shopping flow UI for learning or demonstration purposes without real data handling.",
      image: Ecommerce,
      tags: ["React JS","Redux","Api",  "HTML", "Tailwind", "JavaScript"],
      github: "https://github.com/ShekhRehan7/RedStore-Ecommerce-Website",
      webapp: "https://red-store-ecommerce-website-zeta.vercel.app/",
    },
    {
      id: 3,
      title: "Movie Recommendation Frontend",
      description:
        "This is a front-end movie website built using HTML, CSS, and JavaScript. It showcases movie posters, details, and a responsive user interface. The site is purely static and does not include any backend or database.",
      image: movierecLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ShekhRehan7/Movie-Website-Frontend",
      webapp: "https://movie-website-frontend-kappa.vercel.app/"
    },
    {
      id: 4,
      title: "Food Order",
      description:
        "This is a front-end food ordering website built using React and Tailwind CSS. The homepage fetches and displays dish data from an API in a clean, responsive layout. Users can browse the menu and navigate to a static order page—no backend or database is connected.",
      image: food_order,
      tags: ["React JS","Rest Api"],
      github: "https://github.com/ShekhRehan7/Food-Order-Website",
      webapp: "https://food-order-website-flame.vercel.app/",
    },
 
   
  ];  