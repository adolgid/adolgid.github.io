import Icon from "../Icon/Icon";
import styles from "./Button.module.css";
import { variants } from "./variants";

type Props = {
  text?: string;
  icon?: string;
  onClick?: () => void;
  template?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link"
    | "outlinePrimary"
    | "outlineSecondary"
    | "outlineSuccess"
    | "outlineDanger"
    | "outlineWarning"
    | "outlineInfo"
    | "outlineLight"
    | "outlineDark"
    | "header"
    | "large"
    | "outlineLarge"
    | "small"
    | "outlineSmall"
    | "disabled"
    | "github";
  size?: "S" | "M" | "L" | "XL";
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  template,
  size,
  icon,
  disabled,
}: Props) {
  const sizeClasses = {
    S: "px-4 py-2 text-sm",
    M: "px-4 py-2 text-base",
    L: "px-6 py-3 text-lg",
    XL: "px-8 py-4 text-xl",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${template ? variants[template] : variants.primary} ${
        sizeClasses[size || "M"]
      } ${styles.button}`}
    >
      {icon && (
        <Icon
          name={icon}
          className={`mr-2 ${
            size === "S"
              ? "h-4 w-4"
              : size === "M"
              ? "h-6 w-6"
              : size === "L"
              ? "h-8 w-8"
              : "h-10 w-10 "
          }`}
        />
      )}
      {text && text}
    </button>
  );
}
