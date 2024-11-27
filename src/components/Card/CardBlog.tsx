import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import { IBlog } from "../../modules/blogs/domain/IBlog";
import ImageCard from "../Image/ImageCard";

export default function CardBlog({
  title,
  id,
  category,
  startDate,
  imageUrl,
  description,
  authorName,
  authorImageUrl,
  readingTime,
}: Readonly<IBlog>) {
  return (
    <Link to={id ? `/blog/${id}` : "/"} className="group">
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <ImageCard imageUrl={imageUrl} title={title} />
        <div className="flex-1 bg-zinc-900 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-zinc-700">{category}</p>
            <div className="block mt-2">
              <p className="text-xl font-semibold text-indigo-600">{title}</p>
              <p className="mt-3 text-base text-zinc-500">{description}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{authorName}</span>
              {authorImageUrl ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={authorImageUrl}
                  alt=""
                />
              ) : (
                <Icon
                  name="user"
                  className="h-10 w-10 rounded-full text-zinc-600"
                />
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-indigo-900">
                {authorName}
              </p>
              <div className="flex space-x-1 text-sm text-indigo-500">
                <time dateTime={startDate}>{startDate}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
