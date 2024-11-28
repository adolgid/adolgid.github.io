import React, { useContext } from "react";
import { IconContext } from "../../contexts/IconContext";

interface IconProps {
  name: string;
  color?: string;
  title?: string;
  size?:
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const icons = useContext(IconContext);
  const IconElement = icons[name];
  const IconComponent = () => <IconElement {...rest} />;

  if (!IconElement) {
    throw new Error(`Icon "${name}" is not registered.`);
  }

  return <IconComponent />;
};

export default Icon;
