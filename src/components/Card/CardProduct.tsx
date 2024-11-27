import { Link } from "react-router-dom";
import { IProject } from "../../modules/projects/domain/IProject";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";
import Pills from "../Pill/Pills";
import ImageCard from "../Image/ImageCard";

type Props = {
  project: IProject;
  index: number;
  viewMore?: boolean;
};

export default function CardProduct({
  project,
  index,
  viewMore,
}: Readonly<Props>) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-zinc-800 rounded-xl shadow-xl overflow-hidden h-full"
    >
      <Link to={`/projects/${project.id}`} className="block h-full">
        <ImageCard imageUrl={project.imageUrl} title={project.title} eye />
        <div className="p-1 mb-">
          <div className="flex space-x-4 items-center justify-start py-2 px-2 border-t border-zinc-600">
            <h3 className="text-xl font-bold text-indigo-600">
              {project.title}
            </h3>
          </div>
          <div className="flex space-x-4 items-center justify-start py-2 px-2">
            <p className="text-gray-600">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 items-center justify-start py-2 px-2">
            <Pills technologies={project.technologies} />
          </div>
        </div>
        {viewMore && (
          <div className="gap-3 items-center flex justify-end py-2 px-2 mr-2">
            <div className="gap-3 items-center flex justify-end py-2 px-2 mr-2">
              <Icon name="live" className="h-5 w-5 text-gray-400" />
              <p className="text-gray-600 font-bold">VIEW MORE</p>
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
