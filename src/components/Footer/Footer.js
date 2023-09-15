import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const currentURL = useRouter().asPath;

  return (
    <footer className=" bg-gold-400  text-black max-w-screen pt-20">
      <section className="grid sm:grid-cols-3 gap-3 sm:gap-0 my-0">
        <div className="font-serif flex flex-col items-center">
          <h1 className="sm:text-5xl text-4xl">Joa y Alejo</h1>
          <i className="sm:text-3xl text-2xl">Live Music</i>
        </div>
        <div className="flex flex-col items-center sm:ml-auto">
          <ul>
            <li className="text-xl sm:text-left my-2 sm:mt-0 text-center sm:mb-1">
              Contacto
            </li>
            <li className="font-light  text-sm sm:text-base">
              (+57) 310 751 2476
            </li>
            <li className="font-light  text-sm sm:text-base">
              (+57) 316 308 7458
            </li>
            <li className="font-light  text-sm sm:text-base">
              joayalejomusic@gmail.com
            </li>
          </ul>
          <div className="sm:mt-2 mt-4 flex flex-col gap-1 sm:text-sm sm:self-start">
            <Link
              href={
                "https://wa.me/573138653285?text=Quiero%20tener%20mas%20información%20sobre%20sus%20servicios"
              }
              className="hover:text-gold-900 mt-auto flex items-center gap-1"
            >
              <WhatsAppIcon />
              Chatea con nosotros!
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-gold-900 mt-auto flex items-center gap-1"
            >
              <EmailIcon />
              Envianos un e-mail!
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-left">Siguenos</h2>
          <ul className="flex flex-row gap-4 mt-1 ">
            <li className="hover:text-gold-900">
              <a target={"_blank"} href="https://www.facebook.com/joa.alejo.9">
                <FacebookIcon />
              </a>
            </li>
            <li className="hover:text-gold-900">
              <a
                target={"_blank"}
                href="https://www.instagram.com/joa_y_alejo/"
              >
                <InstagramIcon />
              </a>
            </li>
            <li className="hover:text-gold-900">
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
      <section className="border-t-[1px] mx-auto border-black mt-4 w-[90%] flex px-4">
        <p className="text-xs ml-auto my-1 ">
          Designed and developed by{" "}
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/james-andrey-santos-gaviria-1198a5258/"
            className="font-semibold hover:text-gold-900"
          >
            RedABJ
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
