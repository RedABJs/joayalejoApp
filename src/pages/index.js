import Image from "next/image";
import * as utils from "../utils/utils";
import { Inter } from "next/font/google";
import { useEffect } from "react";

// Components
import MusicImg from "../../public/music.png";
import Carrousel from "@/components/Carrousel/Carrousel";
import AboutUs from "@/components/AboutUs/AboutUs";
import VideosTL from "@/components/VideosTL/VideosTL";

const inter = Inter({ subsets: ["latin"] });

import HomeLayout from "@/components/HomeLayout";

export default function Home() {
  useEffect(() => {
    utils.addScrollForText();
    return () => {};
  }, []);
  return (
    <HomeLayout>
      <figcaption
        className="h-screen relative w-full flex items-center justify-center overflow-hidden
      bg-[url('https://res.cloudinary.com/cancionero/image/upload/v1694636560/home_bg_main_fblbra.jpg')] bg-cover bg-no-repeat"
      >
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <Carrousel />
        <div className="absolute sm:left-1/2 lg:left-2/3 font-bold text-gold-400 text-center font-serif [text-shadow:2px_2px_0px_#805b10]">
          <h1 className="text-4xl sm:text-6xl ">Joa y Alejo</h1>
          <i className="text-xl sm:text-4xl">¡Live Music!</i>
        </div>
        {/* <svg
          className="absolute -bottom-1 sm:-bottom-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="miDegradado" x1="70%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ "stop-color": "#c9a227" }} />
              <stop offset="100%" style={{ "stop-color": "#202020" }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#miDegradado)"
            fill-opacity="1"
            d="M0,224L120,240C240,256,480,288,720,272C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg> */}
      </figcaption>
      <AboutUs />
      <VideosTL />
    </HomeLayout>
  );
}
