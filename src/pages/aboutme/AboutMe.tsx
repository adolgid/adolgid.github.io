import image1 from "../../assets/images/1.jpeg";
import image2 from "../../assets/images/2.jpeg";
import perfil from "../../assets/images/perfil.png";
import music from "../../assets/audio/music.mp3";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";

const images: string[] = [image1, image2, perfil];

export default function AboutMe() {
  return (
    <>
      <div className="flex">
        <div className="w-full flex flex-col items-center justify-between bg-white">
          <div className="max-w-full p-6 md:p-12">
            <h1 className="text-4xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 mb-4 md:mb-6 font-hoves-extended-extralight">
              Adolfo Nilson Gidoni
            </h1>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-full flex items-center justify-between bg-white">
          <div className="w-1/2 p-6 md:p-3">
            <img src={images[0]} className="md:aspect-[2/2]" alt="Draw 1" />
          </div>
          <div className="w-1/2 p-6 md:p-3">
            <img src={images[1]} className="md:aspect-[2/2]" alt="Draw 2" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between bg-white">
          <div className="max-w-full p-6 md:p-12">
            <a
              href="mailto:adolgidoni@gmail.com"
              className="text-3xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 hover:text-slate-500 mb-4 md:mb-6 font-hoves-extended-extralight"
            >
              Contact
            </a>
          </div>
        </div>
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

      <div className="w-full flex-col items-center justify-center bg-white px-6 md:px-12 py-4 text-center md:text-left font-hoves-regular text-xl"></div>
    </>
  );
}
