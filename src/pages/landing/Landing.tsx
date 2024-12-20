import image1 from "../../assets/images/1.jpeg";
import image2 from "../../assets/images/2.jpeg";
import music from "../../assets/audio/music.mp3";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";

export default function Landing() {
  return (
    <>
      <div className="flex">
        <div className="w-full flex items-center justify-between bg-white">
          <div className="w-1/2 p-3 md:p-3">
            <img src={image1} className="w-full md:aspect-[2/2]" alt="Draw 1" />
          </div>
          <div className="w-1/2 p-3 md:p-3">
            <img src={image2} className="w-full md:aspect-[2/2]" alt="Draw 2" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between bg-white">
          <div className="max-w-full p-3 md:p-12">
            <a
              href="mailto:adolgidoni@gmail.com"
              className="text-2xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 hover:text-slate-500 mb-4 md:mb-3 font-hoves-extended-extralight"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between bg-white">
          <div className="max-w-full p-3 md:p-12">
            <AudioPlayer audioSrc={music} text="Play" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between bg-white">
          <div className="max-w-full p-3 md:p-12">
            <a
              href="https://paypal.me/juangidoni"
              target="_BLANK"
              className="text-2xl md:text-5xl font-wrap md:text-5xl lg:text-7xl font-bold text-slate-800 hover:text-slate-500 mb-4 md:mb-3 font-hoves-extended-extralight"
            >
              Invest
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
