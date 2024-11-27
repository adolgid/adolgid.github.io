import React from "react";
import { IconType } from "react-icons";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

const icons: Record<string, IconType> = {
  love: FaHeart,
  menu: FaBars,
  x: FaTimes,
};

export const IconContext = React.createContext(icons);
