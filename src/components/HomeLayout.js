import Head from "next/head";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import WPIcon from "@/components/WhatsAppIcon/WPIcon";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Joa y Alejo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen min-h-screen h-fit mx-auto my-0 p-0 bg-white text-black">
        <NavBar />
        {children}
        <WPIcon />
        <Footer />
      </main>
    </>
  );
};

export default HomeLayout;
