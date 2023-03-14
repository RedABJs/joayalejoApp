import { useEffect, useState } from "react";
import * as utils from "../../utils/utils";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
    <header className="w-full z-10 fixed  h-16 transition-all ease-out duration-200 delay-75 text-gold-400">
      <nav className="w-full flex items-center h-full">
        <ul className="flex ml-auto gap-2 px-1 hover:text-gold-400">
          <li className="hoverLinks">
            <Link href="/">Home</Link>
          </li>
          <li className="hoverLinks">
            <Link href="/contact">Contacto</Link>
          </li>
          <li className="hoverLinks">
            <Link href="/testingShit">Testing</Link>
          </li>
          <li className="hoverLinks">
            <a target={"_blank"} href="https://www.facebook.com/joa.alejo.9">
              <FacebookIcon />
            </a>
          </li>
          <li className="hoverLinks">
            <a target={"_blank"} href="https://www.instagram.com/joa_y_alejo/">
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
  );
};

export default NavBar;