import image1 from "../../assets/images/1.jpeg";
import image2 from "../../assets/images/2.jpeg";
import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";

const images: string[] = [image1, image2];

export default function Landing() {
  return (
    <div className="flex-1 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="max-w-xl">
          <h1 className="text-2xl md:text-3xl lg:text-7xl font-bold text-amber-900 mb-4 md:mb-6">
            Creador de Contenido Digital
          </h1>
          <p className="text-lg md:text-xl text-amber-700 leading-relaxed mb-6 md:mb-8">
            Nacido en <span className="font-semibold text-3xl">Argentina</span>,
            viajando por el{" "}
            <span className="font-semibold text-4xl">mundo</span> sin{" "}
            <span className="font-semibold text-3xl">fines de lucro</span>.
          </p>
          <a
            className="md:w-auto bg-amber-600 text-white px-6 md:px-8 py-3 rounded-lg 
            hover:bg-amber-700 transition-colors duration-300 uppercase"
            href="https://paypal.me/juangidoni"
            target="_BLANK"
          >
            CONTRIBUIR
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-[calc(100vh-8rem)]">
        <ImageCarousel images={images} />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="max-w-xl md:text-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-4 md:mb-6">
            Experto en síntesis sensorial
          </h1>
          <p className="text-lg md:text-xl text-amber-700 leading-relaxed mb-2 md:mb-2">
            <span className="font-semibold text-2xl"> Improvisador</span> desde{" "}
            <span className="font-bold">1993</span>
          </p>
          <p className="text-lg md:text-xl text-amber-700 leading-relaxed mb-2 md:mb-2">
            Fundador innato.{" "}
            <span className="font-bold uppercase text-2xl">Artista</span>
          </p>
          <p className="text-lg md:text-xl text-amber-700 leading-relaxed mb-6 md:mb-8">
            <span className="font-bold text-6xl">2025</span>
          </p>
        </div>
      </div>
    </div>
  );
}
