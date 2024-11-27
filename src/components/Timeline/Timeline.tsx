import { IExperience } from "../../modules/experiences/domain/IExperiences";
import CardExperience from "../Card/CardExperience";

interface TimelineProps {
  experiences: IExperience[];
}
export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative container mx-auto px-6 py-6 md:mb-4">
      <div className="hidden md:block md:absolute md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
      {experiences.map((experience, index) => (
        <CardExperience
          experience={experience}
          index={index}
          key={experience.position}
        />
      ))}
    </div>
  );
};
