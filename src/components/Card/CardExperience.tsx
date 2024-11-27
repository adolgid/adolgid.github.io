import { calculatePeriod } from "../../config/utils";
import { IExperience } from "../../modules/experiences/domain/IExperiences";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";
import Pills from "../Pill/Pills";

type Props = {
  experience: IExperience;
  index: number;
};

export default function CardExperience({ experience, index }: Readonly<Props>) {
  return (
    <motion.div
      key={experience.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative md:flex md:items-center mt-6 mb-6 md:mb-12 md:mt-0 ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-4" : "md:pr-4"}`}
      >
        <div className="bg-zinc-800 rounded-lg shadow-xl p-6 transform transition-all duration-300 border-b border-transparent hover:border-indigo-400">
          <div className="flex items-center mb-4">
            <Icon name="code" className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="text-xl font-bold text-indigo-600">
              {experience.position}
            </h3>
          </div>
          <div className="flex items-center mb-3">
            <Icon name="building" className="w-5 h-5 text-purple-500 mr-2" />
            <p className="text-gray-600">{experience.company}</p>
          </div>
          <div className="flex items-center mb-4">
            <Icon name="calendar" className="w-5 h-5 text-gray-400 mr-2" />
            <p className="text-sm text-gray-500">
              {calculatePeriod(experience.startDate, experience.endDate)}
            </p>
          </div>
          <p className="text-gray-600 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            <Pills technologies={experience.technologies} />
          </div>
        </div>
      </div>
      <div className="hidden md:block md:absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow"></div>
    </motion.div>
  );
}
