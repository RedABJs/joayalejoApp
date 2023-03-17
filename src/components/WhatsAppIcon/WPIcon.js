import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useRef } from "react";
import { useEffect } from "react";

import animations from "@/styles/animations.module.css";

const WPIcon = () => {
  const wpi = useRef(null);

  useEffect(() => {
    const handlerWPI = () => {
      let mainHeigth = document.querySelector("main").clientHeight;
      let footerHeigth = document.querySelector("footer").clientHeight;

      window.scrollY >= mainHeigth - window.innerHeight - footerHeigth &&
      window.scrollY !== 0
        ? wpi.current.classList.replace("showWPI", "hideWPI")
        : wpi.current.classList.replace("hideWPI", "showWPI");
    };

    window.addEventListener("scroll", handlerWPI);
    return () => {
      window.removeEventListener("scroll", handlerWPI);
    };
  }, []);

  return (
    <a
      ref={wpi}
      href={
        "https://wa.me/573138653285?text=Quiero%20tener%20mas%20información%20sobre%20sus%20servicios"
      }
      target="_blank"
      className={`${[
        animations.wpiApearence,
      ]} text-gold-400 z-10 fixed right-2 sm:right-3 bottom-2 bg-black flex items-center py-1 px-2 cursor-pointer rounded-md showWPI`}
    >
      <WhatsAppIcon sx={{ fontSize: 28 }} />
      <p className="text-sm">WhatsApp</p>
    </a>
  );
};

export default WPIcon;
