export const METADATA = {
  title: "Portfolio | Saurabh Singh",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://pixidesk.in/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "rsaurabh221@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/saurabh-kumar-b4b44aa4/",
  github: "https://github.com/saurabh2215678",
  medium: "https://medium.com/",
  instagram: "https://www.instagram.com/saurabhraj1/",
  facebook: "https://www.facebook.com/saurabh.raj.221/",
  dribbble: "https://dribbble.com",
  behance: "https://www.behance.net",
  twitter: "https://twitter.com/saurabhraj32e",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "creative wedding movie",
    image: "/projects/pj1.jpg",
    blurImage: "/projects/blur/pj1.jpg",
    description: "wedding website design and development.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "http://www.creativeweddingmovie.com/",
    tech: ["html", "javascript", "css"],
  },
  {
    name: "Join viral website",
    image: "/projects/pj2.jpg",
    blurImage: "/projects/blur/pj2.jpg",
    description: "E-commerce platform for businesses growth.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://joinviral.com",
    tech: ["react", "npm", "css", "illustrator"],
  },
  {
    name: "opengrowth hub",
    image: "/projects/pj3.jpg",
    blurImage: "/projects/blur/pj3.jpg",
    description: "Marketing site with an Internal CMS from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["figma", "react", "svg"],
  },
  {
    name: "Enklude",
    image: "/projects/pj4.jpg",
    blurImage: "/projects/blur/pj4.jpg",
    description: "Built the website from zero to production 🚀",
    gradient: ["#e06287", "#b03e60"],
    url: "http://enklude.com/",
    tech: ["html", "css", "gsap", "svg"],
  },
  {
    name: "agrocrops",
    image: "/projects/pj5.jpg",
    blurImage: "/projects/blur/pj5.jpg",
    description: "Scroll based creative animation",
    gradient: ["#3A0000", "#771E1E"],
    url: "http://ehostinguk.com/iidemo/agrocrop_2021/index_scroll_slide7.php",
    tech: ["gsap", "html", "css"],
  },
  {
    name: "lifecareinnovations",
    image: "/projects/pj6.jpg",
    blurImage: "/projects/blur/pj6.jpg",
    description: "BioTech product provider company",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://www.lifecareinnovations.com/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "cheapfarebooking",
    image: "/projects/pj7.jpg",
    blurImage: "/projects/blur/pj7.jpg",
    description: "online flight booking website",
    gradient: ["#172839", "#334659"],
    url: "https://www.cheapfarebooking.com/",
    tech: ["html", "javascript", "css", "svg"],
  },
  {
    name: "wheel of fortune",
    image: "/projects/pj8.jpg",
    blurImage: "/projects/blur/pj8.jpg",
    description: "Lucky winner spin wheel 🔥",
    gradient: ["#142D46", "#2E4964"],
    url: "https://www.ehostinguk.com/iidemo/wheeloffortune/wheel-of-fortune.php",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "neomoral Website",
    image: "/projects/pj9.jpg",
    blurImage: "/projects/blur/pj9.jpg",
    description: "Contributed in overall design and development",
    gradient: ["#5E4C06", "#746528"],
    url: "http://neomoral.com/",
    tech: ["javascript", "html", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (Current)",
    size: ItemSize.SMALL,
    subtitle: "Working as Founder of Pixidesk 😎",
    image: "/timeline/ach1.svg",
    slideImage: "/timeline/ach1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/ach2.png",
    slideImage: "/timeline/ach2.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "flight booking website",
    size: ItemSize.SMALL,
    subtitle: "Created travrel booking Website 🚀",
    image: "/timeline/ach4.png",
    slideImage: "/timeline/ach4.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Garduated",
    size: ItemSize.SMALL,
    subtitle:
      "Completed my garduation in computer science.",
    // image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/ach5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
