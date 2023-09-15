import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const bannerImages = [
  "https://res.cloudinary.com/cancionero/image/upload/v1694202016/joayAlejo_main5_yshsy3.webp",
  "https://res.cloudinary.com/cancionero/image/upload/v1694286613/alejo_front_main_phmaps.webp",
  "https://res.cloudinary.com/cancionero/image/upload/v1694286613/joa_front_main_ubh7xg.webp",
];

const Carrousel = () => {
  const [actualImg, setActualImg] = useState(0);
  const timer = useRef(null);
  const resetTimeOut = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  useEffect(() => {
    resetTimeOut();
    timer.current = setTimeout(
      () =>
        setActualImg((prevIndex) =>
          prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeOut();
    };
  }, [actualImg]);

  return (
    <div className="absolute hidden sm:flex sm:left-0 sm:w-1/2 w-full h-full justify-center">
      {bannerImages.map((image, idx) => {
        return (
          <div
            key={`${idx + 1}img`}
            className={`${
              actualImg === idx ? "opacity-100" : "opacity-0"
            } flex h-full w-auto justify-center transition-all ease-in-out duration-700 absolute`}
          >
            {actualImg === idx && (
              <img src={image} alt="banner_img" priority="true" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carrousel;
