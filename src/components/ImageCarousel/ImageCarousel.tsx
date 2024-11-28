import { useState, useEffect } from "react";

export interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export function ImageCarousel({
  images,
  interval = 3000,
}: Readonly<ImageCarouselProps>): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) return <></>;

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <img
          key={image}
          src={`${image}?auto=format&fit=crop&w=800&q=80`}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover ${
            index === currentIndex ? "block" : "hidden"
          }`}
        />
      ))}
    </div>
  );
}
