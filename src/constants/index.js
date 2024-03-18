import {
  faLinkedinIn,
  faGithubAlt,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faHome,
  faToolbox,
  faCompassDrafting,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

import {
  pythonImg,
  javascriptImg,
  cssImg,
  htmlImg,
  arduinoImg,
  djangoImg,
  dockerImg,
  figmaImg,
  gitImg,
  githubImg,
  langchainImg,
  laravelImg,
  mongodbImg,
  mysqlImg,
  postmanImg,
  reactImg,
  reduxImg,
  tailwindImg,
} from "../assets";

const socialInfo = [
  { name: "Github", icon: faGithubAlt, link: "https://github.com/IIvexII" },
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/zafeer-hafeez/",
  },
  {
    name: "Twitter",
    icon: faXTwitter,
    link: "https://twitter.com/Zafeer_Hafeez",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/zafeerhafeez/",
  },
];

const pageInfo = [
  { name: "Home", icon: faHome, link: "#home" },
  { name: "About", icon: faCircleInfo, link: "#about-me" },
  { name: "Skills", icon: faToolbox, link: "#skills" },
  { name: "Projects", icon: faCompassDrafting, link: "#" },
  { name: "Contact", icon: faAddressCard, link: "#" },
];

const quotes = [
  {
    text: "{Clarity} about what matters provides clarity about what does not.",
    reference: "Cal Newport",
  },
];
const skills = [
  { name: "Python", icon: pythonImg },
  { name: "Javascript", icon: javascriptImg },
  { name: "CSS", icon: cssImg },
  { name: "HTML", icon: htmlImg },
  { name: "Arduino", icon: arduinoImg },
  { name: "Django", icon: djangoImg },
  { name: "Docker", icon: dockerImg },
  { name: "Figma", icon: figmaImg },
  { name: "Git", icon: gitImg },
  { name: "Github", icon: githubImg },
  { name: "LangChain", icon: langchainImg },
  { name: "Laravel", icon: laravelImg },
  { name: "MongoDB", icon: mongodbImg },
  { name: "MySQL", icon: mysqlImg },
  { name: "PostMan", icon: postmanImg },
  { name: "React", icon: reactImg },
  { name: "Redux", icon: reduxImg },
  { name: "TailwindCSS", icon: tailwindImg },
];

export { socialInfo, pageInfo, quotes, skills };
