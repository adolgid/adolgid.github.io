import { Link } from "react-router-dom";

type Props = {
  to: string;
  text: string;
};

export default function ViewMore({ to, text }: Props) {
  return (
    <div className="w-full flex items-center justify-center mt-8">
      <Link
        to={to}
        className="flex items-center uppercase font-semibold rounded-lg shadow-md transition duration-300 ease-in-out border border-indigo-500 text-indigo-500 py-3 px-6"
      >
        {text}
      </Link>
    </div>
  );
}
