import {
  faLinkedinIn,
  faGithubAlt,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faHome,
  faPaperPlane,
  faToolbox,
  faCompassDrafting,
} from "@fortawesome/free-solid-svg-icons";

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
  { name: "Home", icon: faHome, link: "#" },
  { name: "Contact", icon: faPaperPlane, link: "#contact" },
  { name: "About", icon: faAddressCard, link: "#about" },
  { name: "Projects", icon: faCompassDrafting, link: "#projects" },
  { name: "Tools", icon: faToolbox, link: "#" },
];
export { socialInfo, pageInfo };
