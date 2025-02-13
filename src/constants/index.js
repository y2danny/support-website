export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Updated Polygon Node FAQ',
    desc: 'One of the major changes I made during my time at Polygon was creating a FAQ for our node validators. Not only that, I updated the entire look the FAQ guide.',
    subdesc:
      'To achieve the goal, I replicated a mainnet full PoS node from our docker image, stress test it and gather real time data from users.',
    href: 'https://support.polygon.technology/support/solutions/folders/82000697075',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/docker.jpg',
      },
     
    ],
  },
  {
    title: 'DappRadar $RADAR launch support',
    desc: 'I am very proud of the work I did with the amazing DappRadar team when we launched the $RADAR token.',
    subdesc:
      'It was addrenaline filled, tons of queries from users, jira tickets, discord questions - but of course we were well prepared. I single handedly handled all inboud jira requests and cleared them all!',
    href: 'https://dappradar.com/radar/overview',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/dappradar.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
    
     
   
    
    ],
  },
  {
    title: 'Built and curated Chainwire blog',
    desc: 'Contracted with chainwire to research SEO strategies and implement on a series of blog articles for their blog.',
    subdesc:
      'As a support specialist I ensure to take on varying writing tasks on the industry to stay informed and learn first hand modern practices to apply into support services.',
    href: 'https://chainwire.org/blog/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/chainwire.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      
    ],
  },
  
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Polygon',
    pos: 'Technical support engineer',
    duration: '2023 - 2024',
    title: "Enhanced documentation, reduced support inquiries by 20%. Created tutorials to improve onboarding. Monitored and resolved validator issues across Discord, and Telegram. Identified pain points and streamlined troubleshooting with targeted content. Acted as the primary technical POC, ensuring fast query resolution. Used community insights to shape validator client development.",
    icon: '/assets/project-logo1.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Meson Finance',
    pos: 'Technical support specialist',
    duration: '2022 - 2023',
    title: "Increased user issue response time. Ensured tickets were excalated to appropriate teams or poc. Owned support on discord, telegram and email.",
    icon: '/assets/meson.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'DappRadar',
    pos: 'Dapp Support Specialist',
    duration: 'Mar 2022 - Dec 2022',
    title: "Collaborated with dApp developers to integrate new ecosystems, leading the implementation of a Cardano library. Provided user support across Slack, Discord, and Telegram, ensuring timely resolution of technical issues. Managed developer inquiries via email, streamlining communication and troubleshooting.",
    icon: '/assets/dappradar.png',
    animation: 'salute',
  },
];
