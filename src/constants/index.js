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
  { name: "About", icon: faCircleInfo, link: "#about" },
  { name: "Tools", icon: faToolbox, link: "#" },
  { name: "Projects", icon: faCompassDrafting, link: "#projects" },
  { name: "Contact", icon: faAddressCard, link: "#contact" },
];

const quotes = [
  {
    text: "{Clarity} about what matters provides clarity about what does not.",
    reference: "Cal Newport",
  },
];

export { socialInfo, pageInfo, quotes };
