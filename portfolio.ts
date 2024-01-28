import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Yuvraj Angad Singh',
  title: "Hi all, I'm Yuvraj Angad",
  description:
    'Skilled full-stack software engineer excelling in back-end web development with expertise in REST APIs, microservices, MongoDB, Spring Boot, Java, and GraphQL. Proficient in TypeScript, JavaScript, Node.js, and Next.js. Has hands-on experience with Genesys technology, demonstrating a solid grasp of its functionalities.',
  resumeLink:
    'https://drive.google.com/file/d/1kanPJneQMPXFilTu1knW-tcceMHm6Mz5/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'yuvrajangadsingh',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: 'https://yuvrajangadsingh.github.io/',
  linkedin: 'https://www.linkedin.com/in/yuvrajangadsingh/',
  twitter: 'https://twitter.com/yuvrajangads',
  github: 'https://github.com/yuvrajangadsingh',
  instagram: 'https://www.instagram.com/yuvrajangadsingh',
  facebook: 'https://www.facebook.com/yuvrajangadsingh',
  mail: 'mailto:mail@yuvrajangadsingh.me',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Passionate full-stack developer hungry for tech exploration.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building responsive Single-Page-Apps (SPA) & PWA in Next.js'),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji(
          '⚡ Building RESTful, SOAP, GraphQL, and WebSocket APIs in NodeJS & SpringBoot Framework'
        ),
        emoji(
          '⚡ Managing dependencies and scripting tasks efficiently with npm and yarn'
        ),
        emoji(
          '⚡ Implementing robust web applications using Laravel for seamless integration and data fetching'
        ),
      ],
      softwareSkills: [
        // {
        //   skillName: 'HTML-5',
        //   fontAwesomeClassName: 'vscode-icons:file-type-html',
        // },
        // {
        //   skillName: 'CSS-3',
        //   fontAwesomeClassName: 'vscode-icons:file-type-css',
        // },
        {
          skillName: 'Laravel',
          fontAwesomeClassName: 'vscode-icons:file-type-blade',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'vscode-icons:file-type-typescript',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Java',
          fontAwesomeClassName: 'vscode-icons:file-type-java',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'GraphQL',
          fontAwesomeClassName: 'vscode-icons:file-type-graphql',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Chitkara University',
    subHeader: 'Bachelor of Engineering in Computer Science',
    duration: 'August 2017 - June 2021',
    desc: "Part Of University's Coding Academy, a group of selective students having quality coding skills in the batch",
    grade: '9.27 CGPA',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer III',
    company: 'GeekyAnts',
    companyLogo: '/img/icons/common/geekyants.jpg',
    date: 'May 2020 - Present',
    desc: 'Joined as an intern and progressed to Software Engineer III over 4 years. Currently a core member of the Phase 2 design and idea team, contributing to the IVR-based customer support app and managing backend development for client estimation. Achievements include developing an IVR gateway, creating a Business Chat App, implementing software updates, and built a website E2E for automated interview processes for hiring candidates.',
  },
  // {
  //   role: 'Software Engineer III',
  //   company: 'GeekyAnts',
  //   companyLogo: '/img/icons/common/geekyants.jpg',
  //   date: 'Oct 2023 - Present',
  //   desc: 'Overseeing the maintenance and development of the IVR-based customer support app, leading discussions for Phase 2 implementation and design. Responsible for developing and reviewing the backend of a client estimation website to provide estimates for new projects.',
  // },
  // {
  //   role: 'Software Engineer II',
  //   company: 'GeekyAnts',
  //   companyLogo: '/img/icons/common/geekyants.jpg',
  //   date: 'Oct 2022 - Oct 2023',
  //   desc: 'Developed an Interactive Voice Response (IVR) gateway for a large telecoms business, reducing customer wait time by 20%. Created a Business Chat App that increased client satisfaction by 15%. Implemented software updates to improve system performance by 10%.',
  // },
  // {
  //   role: 'Software Engineer',
  //   company: 'GeekyAnts',
  //   companyLogo: '/img/icons/common/geekyants.jpg',
  //   date: 'Jul 2021 - Oct 2022',
  //   desc: 'Implemented a semi-automated interview panel to increase candidate throughput by 30%. Managed the Backend and corporate portal, developing both frontend and backend components. Assisted new joiners in understanding Backend Configuration, reducing onboarding time by 20%. Implemented a queue system with Docker to automate jobs.',
  // },
  // {
  //   role: 'Software Engineer Intern',
  //   company: 'GeekyAnts',
  //   companyLogo: '/img/icons/common/geekyants.jpg',
  //   date: 'May 2020 - Jul 2021',
  //   desc: "Developed a portal for tracking incoming and outgoing couriers, integrating third-party APIs for data retrieval. Integrated multiple modules into the company's main website, allowing live changes based on updates in the admin portal. Ensured a cohesive user experience between the website and modules.",
  // },
  {
    role: 'Software Engineer',
    company: 'topgeek - Product of GeekyAnts',
    companyLogo: '/img/icons/common/topgeek.jpg',
    date: 'Sep 2020 - Sep 2021',
    desc: 'Contributed to the development of an automated interview website, Topgeek, increasing candidate throughput by 30%. Worked on backend and frontend components, implementing REST APIs, microservices, and other web development technologies. Collaborated with the team to integrate third-party APIs and successfully completed all modules within the specified timeframe.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'TopGeek',
    desc: "With TopGeek's Recruiting AI, get hired quickly and reliably. Set up your profile | Add skills | Take automated interviews.",
    link: 'https://topgeek.io/',
    isLive: true,
  },
  // {
  //   name: 'Technota (Forum)',
  //   desc: 'Get hands-on experience in technical skills with Technota',
  //   github: 'https://github.com/yuvrajangadsingh/django-react-forum',
  // },
  // {
  //   name: 'Shopaza (Ecommerce)',
  //   desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
  //   github: 'https://github.com/yuvrajangadsingh/Django-ecommerce',
  // },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Yuvraj Angad Singh',
  description:
    'A passionate Software Engineer with proficiency in Backend Development.',
  author: 'Yuvraj Angad Singh',
  image: 'https://avatars.githubusercontent.com/u/36276913?v=4',
  url: 'https://yuvrajangadsingh.me',
  keywords: [
    'Yuvraj Angad',
    'Yuvraj Angad Singh',
    '@yuvrajangadsingh',
    'yuvrajangadsingh',
    'Portfolio',
    'Yuvraj Angad Portfolio',
    'Yuvraj Angad Singh Portfolio',
  ],
};
