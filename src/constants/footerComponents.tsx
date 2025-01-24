import { MdMailOutline, MdOutlineLocationOn, MdCall } from "react-icons/md";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

export const addresses = [
  {
    value: "career@tickets.com",
    logo: <MdMailOutline />,
  },
  {
    value: "89 KG 14 AVE, Kigali",
    logo: <MdOutlineLocationOn />,
  },
  {
    value: "+250 700 000",
    logo: <MdCall />,
  },
];

export const quickLinks = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Program",
    href: "",
  },
  {
    name: "About",
    href: "",
  },
  {
    name: "Contact Us",
    href: "",
  },
];

export const socialMedia = [
  {
    name: "facebook",
    logo: <CgFacebook />,
    href: "",
    hover:"hover:text-blue-600"
  },
  {
    name: "google+",
    logo: <AiOutlineGooglePlus />,
    href: "",
    hover:"hover:text-red-600"
  },
  {
    name: "linkedin",
    logo: <RiLinkedinFill />,
    href: "",
    hover:"hover:text-blue-600"
  },
  {
    name: "youtube",
    logo: <FaYoutube />,
    href: "",
    hover:"hover:text-red-600"
  },
];
