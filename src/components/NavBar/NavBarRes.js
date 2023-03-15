import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const NavBarRes = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (e.target.name !== "close-icon") {
        setOpenMenu(false);
      } else if (!menuOptions.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="w-full lg:hidden absolute z-10">
      <div className={`ml-auto flex flex-col w-full`}>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className={`${openMenu ? "hidden" : "block"} ml-auto mr-4`}
        >
          <MenuIcon sx={{ fontSize: 32 }} />
        </div>
        <div
          className={`${
            openMenu ? "active" : "inactive"
          } flex bg-black text-gold-400 absolute flex-col w-full items-center px-4`}
        >
          <span className="self-end mt-1" name="close-icon">
            <CloseIcon />
          </span>
          <ul
            ref={menuOptions}
            className="flex flex-col gap-2 p-2 items-center mb-4"
          >
            <li className="linksMenuRes">
              <Link href="/">Home</Link>
            </li>
            <li className="linksMenuRes">
              <Link href="/contact">Contacto</Link>
            </li>
            <li className="linksMenuRes">
              <Link href="/testingShit">Testing</Link>
            </li>
            <li>
              <ul className="flex flex-row gap-2">
                <li className="">
                  <a
                    target={"_blank"}
                    href="https://www.facebook.com/JoayAlejoMusica"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li className="">
                  <a
                    target={"_blank"}
                    href="https://www.instagram.com/joa_y_alejo/"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li className="">
                  <a
                    target={"_blank"}
                    href="https://www.youtube.com/channel/UCTPl4noHkXjhXFklon-zyQg"
                  >
                    <YouTubeIcon />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarRes;
