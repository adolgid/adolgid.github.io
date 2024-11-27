import Eye from "../Eye/Eye";

type IProps = {
  imageUrl: string;
  title: string;
  eye?: boolean;
  onlyImage?: boolean;
};

export default function ImageCard({
  imageUrl,
  title,
  eye,
  onlyImage,
}: Readonly<IProps>) {
  return (
    <div
      className={`relative overflow-hidden ${
        onlyImage ? "h-full w-full" : "h-48"
      }`}
    >
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg shadow-xl max-h-56 md:max-h-full"
          />
          <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-zinc-700 rounded-lg shadow-xl">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      {eye && <Eye />}
    </div>
  );
}
