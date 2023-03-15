import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gold-400 p-4 my-0 max-w-screen">
      <section className="grid sm:grid-cols-3 gap-3 sm:gap-0">
        <div className="font-serif flex flex-col items-center">
          <h1 className="sm:text-5xl text-4xl">Joa y Alejo</h1>
          <i className="sm:text-3xl text-2xl">Live Music</i>
        </div>
        <div className="flex flex-col items-center sm:ml-auto">
          <ul>
            <li className="text-xl sm:text-left my-2 text-center">Contacto</li>
            <li className="font-light text-gold-700 text-sm sm:text-base">
              (+57) 310 751 2476
            </li>
            <li className="font-light text-gold-700 text-sm sm:text-base">
              (+57) 316 308 7458
            </li>
            <li className="font-light text-gold-700 text-sm sm:text-base">
              joayalejomusic@gmail.com
            </li>
            <li className="hover:text-gold-100 text-gold-500">
              <Link href={"/contact"}>¡Enviar e-mail ahora!</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-left">Siguenos</h2>
          <ul className="flex flex-row gap-4 mt-1 text-gold-700">
            <li>
              <a target={"_blank"} href="https://www.facebook.com/joa.alejo.9">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                href="https://www.instagram.com/joa_y_alejo/"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                href="https://www.youtube.com/channel/UCTPl4noHkXjhXFklon-zyQg"
              >
                <YouTubeIcon />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="border-t-[1px] border-gold-700 mt-4 w-full flex">
        <p className="text-xs ml-auto my-1 text-gold-700">
          Designed and developed by{" "}
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/james-andrey-santos-gaviria-1198a5258/"
            className="font-semibold hover:text-gold-100 text-gold-400"
          >
            RedABJ
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
