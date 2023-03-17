import { useEffect, useState } from "react";
import * as utils from "../../utils/utils";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import NavBarRes from "./NavBarRes";

const NavBar = () => {
  const [formVals, setFormVals] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormVals({
      ...formVals,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    utils.addScrollEvent();
    return () => {};
  }, []);

  return (
    <>
      <header className="w-full z-10 fixed h-16 transition-all ease-out duration-200 delay-75 text-gold-400 hidden lg:flex">
        <nav className="w-full flex items-center h-full">
          <ul className="flex ml-auto gap-4 px-4 hover:text-gold-400 sm:text-lg">
            <li className="hoverLinks">
              <Link href="/">Home</Link>
            </li>
            <li className="hoverLinks">
              <Link href="/contact">Contacto</Link>
            </li>
            <li className="hoverLinks">
              <Link href="/services/1">ServiceRandom</Link>
            </li>
            <li className="hoverLinks">
              <Link href="/testingShit">Testing</Link>
            </li>
            <li className="hoverLinks">
              <a
                target={"_blank"}
                href="https://www.facebook.com/JoayAlejoMusica"
              >
                <FacebookIcon />
              </a>
            </li>
            <li className="hoverLinks">
              <a
                target={"_blank"}
                href="https://www.instagram.com/joa_y_alejo/"
              >
                <InstagramIcon />
              </a>
            </li>
            <li className="hoverLinks">
              <a
                target={"_blank"}
                href="https://www.youtube.com/channel/UCTPl4noHkXjhXFklon-zyQg"
              >
                <YouTubeIcon />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <NavBarRes />
    </>
  );
};

export default NavBar;
