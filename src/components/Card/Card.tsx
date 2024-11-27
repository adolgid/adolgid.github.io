import Icon from "../Icon/Icon";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function Card({
  title,
  description,
  icon,
}: Readonly<CardProps>) {
  const {
    fontStyle,
    cardContainer,
    cardRow,
    cardPadding,
    cardTitleIcon,
    cardIcon,
    cardDescription,
  } = styles;

  return (
    <div className={fontStyle}>
      <div className={cardContainer}>
        <div className={cardRow}>
          <div className={cardPadding}>
            <h2 className={cardTitleIcon}>
              {title}
              {icon && <Icon name={icon} className={cardIcon} />}
            </h2>
            <p className={cardDescription}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
