import image1 from "../../assets/images/1.jpeg";
import image2 from "../../assets/images/2.jpeg";
import perfil from "../../assets/images/perfil.png";
import music from "../../assets/audio/music.mp3";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";

const images: string[] = [image1, image2, perfil];

export default function Landing() {
  return (
    <>
      <div className="flex">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between bg-white">
          <div className="max-w-full p-6 md:p-12">
            <h1 className="text-3xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 mb-4 md:mb-6 font-hoves-extended-extralight">
              Creador de contenido digital. Experto en síntesis sensorial.
              Improvisador desde 1993
              <br></br>
              Artista 2025
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <div className="object-cover h-full w-full">
            <ImageCarousel images={images} interval={400} />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between bg-white">
          <div className="max-w-full p-6 md:p-12">
            <AudioPlayer audioSrc={music} text="Play" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between bg-white">
          <div className="max-w-full p-6 md:p-12">
            <a
              href="https://paypal.me/juangidoni"
              target="_BLANK"
              className="text-3xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 hover:text-slate-500 mb-4 md:mb-6 font-hoves-extended-extralight"
            >
              Invest
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex-col items-center justify-center bg-white px-6 md:px-12 py-4">
        <h2 className="font-hoves-extended-extralight text-2xl text-center md:text-left">
          Adolfo Nilson Gidoni
        </h2>
      </div>

      <div className="w-full flex-col items-center justify-center bg-white px-6 md:px-12 py-4">
        <h2 className="font-hoves-regular text-2xl text-center md:text-left">
          adolgidoni@gmail.com
        </h2>
      </div>
    </>
  );
}
