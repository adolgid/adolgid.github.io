interface IProps {
  text: string;
}

export default function Pill({ text }: Readonly<IProps>) {
  return (
    <span
      key={text}
      className="px-3 py-1 text-xs bg-transparent border border-indigo-600 text-indigo-300 rounded-full"
    >
      {text}
    </span>
  );
}
