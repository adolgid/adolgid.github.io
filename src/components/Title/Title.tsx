type IProps = {
  title: string;
  variant: "landing" | "pages";
};

export default function Title({ title, variant }: Readonly<IProps>) {
  if (variant === "landing") {
    return (
      <div className="text-center">
        <h2 className="text-transparent uppercase text-4xl md:text-3xl font-bold font-mono bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          {title}
        </h2>
      </div>
    );
  }
  return <h1 className="text-3xl font-extrabold text-indigo-600">{title}</h1>;
}
