import Card from "./Card";
import { motion } from "framer-motion";
interface CardGridProps {
  cards: {
    title: string;
    description: string;
    image?: string;
    icon?: string;
  }[];
}

export default function CardGrid({ cards }: Readonly<CardGridProps>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={index + 1}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="ml-auto"
        >
          <Card key={index + 1} {...card} />
        </motion.div>
      ))}
    </div>
  );
}
