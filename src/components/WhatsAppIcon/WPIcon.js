import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useMemo, useRef } from "react";
import * as utils from "../../utils/utils";

import animations from "@/styles/animations.module.css";

const WPIcon = () => {
  useEffect(() => {
    function handleWPI() {
      let mainHeigth = document.querySelector("main").clientHeight;
      let footerHeigth = document.querySelector("footer").clientHeight;
      let ref = document.querySelector(".wpi");

      window.scrollY >= mainHeigth - window.innerHeight - footerHeigth &&
      window.scrollY > 0
        ? ref.classList.replace("showWPI", "hideWPI")
        : ref.classList.replace("hideWPI", "showWPI");
    }
    window.addEventListener("scroll", handleWPI);
    return () => {
      window.removeEventListener("scroll", handleWPI);
    };
  }, []);

  return (
    <a
      href={
        "https://wa.me/573138653285?text=Quiero%20tener%20mas%20información%20sobre%20sus%20servicios"
      }
      target="_blank"
      className={`${[animations.wpiApearence]} showWPI wpi`}
    >
      <WhatsAppIcon sx={{ fontSize: 28 }} />
      <p className="text-sm">WhatsApp</p>
    </a>
  );
};

export default WPIcon;
