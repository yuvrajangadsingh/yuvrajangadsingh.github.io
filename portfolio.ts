import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
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
    "Experienced Full Stack software engineer proficient in Back-End web development, REST APIs, Microservices, MongoDB, Spring Boot, Java, and GraphQL. Skilled in IVR gateway construction, business chat app development, and system performance optimization. Strong knowledge of TypeScript, JavaScript, Node.js, and Next.js.",
  resumeLink:
    'https://drive.google.com/file/d/11_LUaKqfvE5QTc4boXLRkNsvtegWztfg/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'yuvrajangadsingh',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://yuvrajangadsingh.github.io/',
  linkedin: 'https://www.linkedin.com/in/yuvrajangadsingh/',
  github: 'https://github.com/yuvrajangadsingh',
  instagram: 'https://www.instagram.com/yuvrajangadsingh',
  facebook: 'https://www.facebook.com/yuvrajangadsingh',
  twitter: 'https://twitter.com/yuvrajangads',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        // emoji(
        //   '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        // ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in NodeJS & SpringBoot Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:spring-boot',
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
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
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
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       fontAwesomeClassName: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       fontAwesomeClassName: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       fontAwesomeClassName: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       fontAwesomeClassName: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       fontAwesomeClassName: 'logos:ganache-icon',
    //     },
    //   ],
    // },
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
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: '9.27 CGPA',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  // {
  //   role: 'Frontend Developer',
  //   company: 'Duseca Software',
  //   companyLogo: '/img/icons/common/dusecaSoftware.jpg',
  //   date: 'Apr 2022 – Jun 2022',
  //   desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  // },
  // {
  //   role: 'API Engineer',
  //   company: 'Duseca Software',
  //   companyLogo: '/img/icons/common/dusecaSoftware.jpg',
  //   date: 'Jan 2022 – Mar 2022',
  //   desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
  //   // descBullets: [
  //   // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //   // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   // ],
  // },
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Bleed-AI',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: 'Sept 2021 - Oct 2021',
  //   desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  // },
  // {
  //   role: 'Backend Developer',
  //   company: 'Wapidu',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: 'Sept 2021',
  //   desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  // },
  {
    role: 'Software Engineer II',
    company: 'GeekyAnts',
    companyLogo: '/img/icons/common/geekyants.jpg',
    date: 'Oct 2022 - Present',
    desc: 'Developed an Interactive Voice Response (IVR) gateway for a large telecoms business, reducing customer wait time by 20%. Created a Business Chat App that increased client satisfaction by 15%. Implemented software updates to improve system performance by 10%.',
  },
  {
    role: 'Software Engineer',
    company: 'GeekyAnts',
    companyLogo: '/img/icons/common/geekyants.jpg',
    date: 'Jul 2021 - Oct 2022',
    desc: 'Implemented a semi-automated interview panel to increase candidate throughput by 30%. Managed the Backend and corporate portal, developing both frontend and backend components. Assisted new joiners in understanding Backend Configuration, reducing onboarding time by 20%. Implemented a queue system with Docker to automate jobs.',
  },
  {
    role: 'Software Engineer',
    company: 'topgeek - Product of GeekyAnts',
    companyLogo: '/img/icons/common/topgeek.jpg',
    date: 'Sep 2020 - Sep 2021',
    desc: 'Contributed to the development of an automated interview website, Topgeek, increasing candidate throughput by 30%. Worked on backend and frontend components, implementing REST APIs, microservices, and other web development technologies. Collaborated with the team to integrate third-party APIs and successfully completed all modules within the specified timeframe.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'GeekyAnts',
    companyLogo: '/img/icons/common/geekyants.jpg',
    date: 'May 2020 - Jul 2021',
    desc: "Developed a portal for tracking incoming and outgoing couriers, integrating third-party APIs for data retrieval. Integrated multiple modules into the company's main website, allowing live changes based on updates in the admin portal. Ensured a cohesive user experience between the website and modules.",
  }
];

export const projects: ProjectType[] = [
  // {
  //   name: 'developer-portfolio',
  //   desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
  //   github: 'https://github.com/yuvrajangadsingh/developer-portfolio',
  //   link: 'https://developer-portfolio-yuvrajangadsingh.vercel.app/',
  // },
  {
    name: 'TopGeek',
    desc: "With TopGeek's Recruiting AI, get hired quickly and reliably. Set up your profile | Add skills | Take automated interviews.",
    link: 'https://topgeek.io/',
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

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  {
    name: '',
    feedback :'',
  }
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Yuvraj Angad Singh',
  description:
    'A passionate Software Engineer with proficiency in Backend Development.',
  author: 'Yuvraj Angad Singh',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://yuvrajangadsingh.me',
  keywords: [
    'Yuvraj Angad',
    'Yuvraj Angad Singh',
    '@yuvrajangadsingh',
    'yuvrajangadsingh',
    'Portfolio',
    'Yuvraj Angad Portfolio ',
    'Yuvraj Angad Singh Portfolio',
  ],
};
