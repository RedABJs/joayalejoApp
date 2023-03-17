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
      <figcaption className="h-screen bg-dark_gray sm:bg-black relative w-full flex items-center justify-center overflow-hidden">
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
        <svg
          className="absolute -bottom-1 sm:-bottom-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#b69121"
            fill-opacity="1"
            d="M0,224L120,240C240,256,480,288,720,272C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </figcaption>
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
      >
        <path
          fill="#b69121"
          fill-opacity="1"
          d="M0,192L6.2,170.7C12.3,149,25,107,37,96C49.2,85,62,107,74,101.3C86.2,96,98,64,111,80C123.1,96,135,160,148,197.3C160,235,172,245,185,229.3C196.9,213,209,171,222,133.3C233.8,96,246,64,258,80C270.8,96,283,160,295,154.7C307.7,149,320,75,332,69.3C344.6,64,357,128,369,133.3C381.5,139,394,85,406,106.7C418.5,128,431,224,443,240C455.4,256,468,192,480,170.7C492.3,149,505,171,517,186.7C529.2,203,542,213,554,208C566.2,203,578,181,591,176C603.1,171,615,181,628,181.3C640,181,652,171,665,181.3C676.9,192,689,224,702,208C713.8,192,726,128,738,122.7C750.8,117,763,171,775,197.3C787.7,224,800,224,812,192C824.6,160,837,96,849,64C861.5,32,874,32,886,74.7C898.5,117,911,203,923,234.7C935.4,267,948,245,960,202.7C972.3,160,985,96,997,64C1009.2,32,1022,32,1034,80C1046.2,128,1058,224,1071,245.3C1083.1,267,1095,213,1108,192C1120,171,1132,181,1145,181.3C1156.9,181,1169,171,1182,165.3C1193.8,160,1206,160,1218,160C1230.8,160,1243,160,1255,181.3C1267.7,203,1280,245,1292,218.7C1304.6,192,1317,96,1329,74.7C1341.5,53,1354,107,1366,128C1378.5,149,1391,139,1403,149.3C1415.4,160,1428,192,1434,208L1440,224L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
        ></path>
      </svg>
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
