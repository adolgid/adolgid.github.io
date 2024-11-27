import { IProject } from "../../modules/projects/domain/IProject";
import Pill from "./Pill";

interface IProps {
  technologies: IProject["technologies"];
}

function Pills({ technologies }: Readonly<IProps>) {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-start py-2 px-2">
      {technologies
        ?.slice(0, technologies.length > 3 ? 3 : technologies.length)
        .map((tech) => (
          <Pill key={tech} text={tech} />
        ))}
      {technologies && technologies.length > 6 && (
        <Pill text={`+${technologies.length - 3} skills more`} />
      )}
    </div>
  );
}

export default Pills;
