import Icon from "../Icon/Icon";

export default function Eye() {
  return (
    <div className="absolute top-0 right-0 gap-3 items-center flex justify-end py-2 px-2">
      <div className="gap-3 items-center flex justify-end py-2 px-2 mr-2">
        <Icon name="live" className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}
