import perfil from "../../assets/images/perfil.png";

export default function AboutMe() {
  return (
    <>
      <div className="flex">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-end md:justify-center bg-white">
          <div className="max-w-full p-6 md:p-12 ">
            <h1 className="text-2xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 mb-4 md:mb-6 font-hoves-extended-extralight">
              Fundador innato
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <div className="object-cover h-full w-full">
            <img
              src={perfil}
              className="w-full h-full object-fill"
              alt="Adolfo Nilson Gidoni"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-full flex items-center md:justify-between justify-between bg-white pt-6 px-6">
          <h1 className="text-2xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 mb-4 md:mb-6 font-hoves-extended-extralight">
            Experto en síntesis <br></br>sensorial.
          </h1>
          <h1 className="text-2xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 mb-4 md:mb-6 font-hoves-extended-extralight">
            artista
          </h1>
        </div>
        <div className="w-full flex items-center justify-end bg-white pt-3 pr-6"></div>
        <div className="w-full flex items-center justify-start bg-white pt-3 pl-6">
          <h1 className="text-2xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 mb-4 md:mb-6 font-hoves-extended-extralight">
            improvisador desde 1993
          </h1>
        </div>

        <div className="w-full flex items-center justify-end bg-white pt-3 pr-6">
          <h1 className="text-2xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 mb-4 md:mb-6 font-hoves-extended-extralight">
            a partir de 2025
          </h1>
        </div>
      </div>
    </>
  );
}
