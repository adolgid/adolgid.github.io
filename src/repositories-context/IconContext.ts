import React from "react";
import { IconType } from "react-icons";
import {
  FaArrowUp,
  FaBars,
  FaBriefcase,
  FaChartBar,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaHome,
  FaLinkedin,
  FaMoon,
  FaReact,
  FaSitemap,
  FaSun,
  FaUikit,
  FaCode,
  FaCalendar,
  FaTimes,
  FaUserAlt,
  FaSignInAlt,
  FaUserSecret,
  FaArrowDown,
  FaPenAlt,
  FaQuestion,
  FaLightbulb,
  FaTag,
  FaClock,
  FaUserGraduate,
} from "react-icons/fa";
import { GoSignOut as FaSign } from "react-icons/go";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaBuildingCircleCheck,
  FaMapLocationDot,
  FaRegFaceGrinSquintTears,
  FaEye,
  FaPlus,
} from "react-icons/fa6";

const icons: Record<string, IconType> = {
  home: FaHome,
  graduationCap: FaGraduationCap,
  briefcase: FaBriefcase,
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  location: FaMapLocationDot,
  menu: FaBars,
  arrowRight: FaArrowRightLong,
  arrowLeft: FaArrowLeftLong,
  ui: FaUikit,
  front: FaReact,
  research: FaChartBar,
  arquitecture: FaSitemap,
  sitemap: FaSitemap,
  moon: FaMoon,
  sun: FaSun,
  arrowUp: FaArrowUp,
  building: FaBuildingCircleCheck,
  calendar: FaCalendar,
  code: FaCode,
  admin: FaUserSecret,
  user: FaUserAlt,
  thinking: FaRegFaceGrinSquintTears,
  x: FaTimes,
  signOut: FaSign,
  signIn: FaSignInAlt,
  arrowDown: FaArrowDown,
  edit: FaPenAlt,
  question: FaQuestion,
  bulb: FaLightbulb,
  userGraduate: FaUserGraduate,
  live: FaEye,
  plus: FaPlus,
  tag: FaTag,
  clock: FaClock,
};

export const IconContext = React.createContext(icons);
