import React from "react";
import { IconType } from "react-icons";
import {
  FaHeart,
  FaBars,
  FaTimes,
  FaPlay,
  FaPause,
  FaUser,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

const icons: Record<string, IconType> = {
  love: FaHeart,
  menu: FaBars,
  x: FaTimes,
  play: FaPlay,
  stop: FaPause,
  bio: FaUser,
  volumeUp: FaVolumeUp,
  mute: FaVolumeMute,
};

export const IconContext = React.createContext(icons);
