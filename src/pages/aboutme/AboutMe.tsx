export default function AboutMe() {
  return (
    <div className="flex-1 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="max-w-xl">
          <h1 className="text-2xl md:text-3xl lg:text-7xl font-bold text-amber-900 mb-4 md:mb-6 uppercase">
            biografía
          </h1>
          <p className="font-semibold text-amber-600">Proximamente</p>
        </div>
      </div>
    </div>
  );
}
