import HomeLayout from "@/components/HomeLayout";
import animations from "@/styles/animations.module.css";

const Service = () => {
  return (
    <HomeLayout>
      <section className="grid grid-cols-4x4 md:grid-cols-3 h-fit md:h-screen w-fit px-8 bg-white text-gold-400 relative">
        <div className="grid place-content-end h-full w-full order-2">
          <img
            className="w-3/4"
            src="https://res.cloudinary.com/cancionero/image/upload/v1694721952/joa_choose_main_tfrl4n.webp"
            alt="joa_alone"
          />
        </div>
        {/* div titulo y texto */}
        <div
          className={`${animations.textAppereance} flex flex-col justify-center items-center w-full text-center order-1 md:order-2 col-span-2 md:col-span-1 pt-10 md:pt-0`}
        >
          {/* Texto */}
          <h2 className="text-2xl md:text-5xl font-bold">Servicio 1</h2>
          <p className="my-4 text-sm md:text-base text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit
            inventore tempore asperiores harum repudiandae odit, eos debitis
            laudantium, cupiditate magni est dolor odio beatae earum vel fugit
            libero, doloremque ex id voluptates rem facilis iusto.
          </p>
          <p className=" sm:text-xl lg:text-2xl">
            Price: <span className="font-bold">$150</span> USD
          </p>
          <audio
            className="mt-4"
            src={
              "https://res.cloudinary.com/cancionero/video/upload/v1694639858/OBSESI%C3%93N_01_hqmqpl.mp3"
            }
            controls
          />
        </div>
        <div className="grid place-content-end h-full w-full order-3">
          <img
            className="w-full"
            src="https://res.cloudinary.com/cancionero/image/upload/v1694721952/alejo_choose_main_dveqyo.webp"
            alt="alejo"
          />
        </div>
      </section>
    </HomeLayout>
  );
};

export default Service;
