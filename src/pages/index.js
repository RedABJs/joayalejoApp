import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

// Components
import MusicImg from "../../public/music.png";

const inter = Inter({ subsets: ["latin"] });

import HomeLayout from "@/components/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <figcaption className="h-screen bg-dark_gray sm:bg-black relative w-full flex items-center justify-center">
        <Image
          className="opacity-40 hidden sm:flex"
          src={MusicImg}
          fill
          alt="banner_img"
          priority
        />
        <div className="absolute sm:left-1/2 lg:left-2/3 font-bold text-gold-400 text-center font-serif">
          <h1 className="text-5xl sm:text-6xl">Joa y Alejo</h1>
          <i className="text-2xl sm:text-4xl">¡Live Music!</i>
        </div>
      </figcaption>
      <section className="p-4">
        <h1 className="text-4xl h-fit my-3 text-gold-400 font-bold">
          About us
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          quam exercitationem pariatur odit expedita labore, mollitia fuga
          ipsam. Nisi neque facere nobis vel molestiae vero nostrum magnam eius
          placeat reiciendis soluta aperiam minus velit, rem totam
          exercitationem repellendus, quis dolores consequatur temporibus.
          Ratione nam ipsum eos consequatur porro, odio sunt?
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 w-full place-items-center gap-4 p-4">
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            className="absolute w-full h-full top-0"
            src="https://www.youtube.com/embed/j_IFZZ3YSsA?fs=0&color=white"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            className="absolute w-full h-full top-0"
            src="https://www.youtube.com/embed/ZrZcvVV5_dE?fs=0&color=white"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            className="absolute w-full h-full top-0"
            src="https://www.youtube.com/embed/yKnWiR846MA?fs=0&color=white"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            className="absolute w-full h-full top-0"
            src="https://www.youtube.com/embed/rKHv8afKG7k?fs=0&color=white"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </HomeLayout>
  );
}
