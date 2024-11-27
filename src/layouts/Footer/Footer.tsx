import Icon from "../../components/Icon/Icon";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-white shadow-md h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="flex items-center space-x-2 text-gray-600">
            <span>Created with</span>
            <Icon name="love" className="h-4 w-4 text-red-500" />
            <span>
              by{" "}
              <a href="https://juani.dev" target="_BLANK">
                juani.dev
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
