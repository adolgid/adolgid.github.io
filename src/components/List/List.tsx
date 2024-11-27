import { Link } from "react-router-dom";

type Props = {
  items: string[];
  template?: "navbar" | "sidebar" | "footer";
  customClass?: string;
  to?: string;
};

export default function List({ items, template, to }: Props) {
  if (template === "navbar") {
    return (
      <ul className="flex items-center space-x-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={to ?? "/"}
              className="text-sm font-medium text-gray-900 hover:text-gray-900"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  if (template === "sidebar") {
    return (
      <ul className="flex flex-col space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={to ?? "/"}
              className="text-sm font-medium text-gray-900 hover:text-gray-900"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  if (template === "footer") {
    return (
      <ul className="flex items-center space-x-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={to ?? "/"}
              className="text-sm font-medium text-gray-900 hover:text-gray-900"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-gray-900"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
