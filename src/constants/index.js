import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import card1 from '../assets/benefits/card-1.png';
import card2 from '../assets/benefits/card-2.png';
import card3 from '../assets/benefits/card-3.png';
import card4 from '../assets/benefits/card-4.png';
import card5 from '../assets/benefits/card-5.png';
import card6 from '../assets/benefits/card-6.png';

export const navigation = [
  {
    id: "0",
    title: "AboutUs",
    url: "#aboutus",
  },
  {
    id: "1",
    title: "Services",
    url: "#services",
  },
  {
    id: "2",
    title: "OurTeam",
    url: "#team",
  },
  
  {
    id: "3",
    title: "Projects",
    url: "#blog",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#contactus",
  },
  {
    id: "5",
    title: "",
    url: "",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "",
    url: "",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo];

export const brainwaveServices = [
  "Modern Design",
  "Expert Team",
  "Reasonable Price",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Newze Home Interior",
    text: "Create your dream space with our innovative and stylish home interior solutions.",
    date: "2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    route:"/project1"
  },
  {
    id: "1",
    title: "Full Home Decor",
    text: "Transform your space with our full home decor services.",
    date: "2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  // {
  //   id: "2",
  //   title: "Customization Plan",
  //   text: "Tailor your space to perfection with our flexible customization plans, designed to suit your unique style and needs.",
  //   date: "2023",
  //   status: "done",
  //   imageUrl: roadmap3,
  //   route:"/about"
  // },
  // {
  //   id: "3",
  //   title: "2D/3D Designs",
  //   text: "Bring your ideas to life with our detailed 2D and 3D designs, offering a realistic preview of your project before it becomes a reality.",
  //   date: "2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  //   route:"/exploremorecustom"
  // },
];

export const collabText =
  "We aim to design interiors that resonate with our clients' personalities, ensuring every project exudes warmth, reliability, and timeless appeal.";

export const collabContent = [
  {
    id: "0",
    title: "Interior Design",
    text: collabText,
  },
  {
    id: "1",
    title: "Architecture",
  },
  {
    id: "2",
    title: "2D/3D Design",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const items = [
  {
    id: "0",
    title: "Home Interior Design",
    text: "Transform your home's curb appeal with stylish, modern, and timeless exterior designs.",
    backgroundUrl: card1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light:true,
    route: "/exploremoreinterior"
  },
  {
    id: "1",
    title: "Home Exterior Design",
    text: "Elevate your home’s look with stunning exterior designs that blend style and function.",
    backgroundUrl: card2,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
    route:"/exploremoreexterior"
  },
  {
    id: "2",
    title: "2D/3D Design Layout",
    text: "Craft detailed 2D and 3D layouts for spaces that inspire and impress.",
    backgroundUrl: card3,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light:true,
    route:"/exploremore3ddesign"
  },
  {
    id: "3",
    title: "Residential Design",
    text: "Create beautiful residential designs that reflect comfort, style, and functionality.",
    backgroundUrl:card4,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
    route:"/exploremoreresidential"
  },
  {
    id: "4",
    title: "Modular Kitchen Design",
    text: "Design your dream modular kitchen with efficiency, style, and innovative storage solutions.",
    backgroundUrl: card5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
    route:"/exploremorekitchen"
  },
  {
    id: "5",
    title: "Custom Design plan",
    text: "Develop a tailored custom design plan that meets your unique needs and preferences.",
    backgroundUrl: card6,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
    route:"/exploremorecustom"
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
