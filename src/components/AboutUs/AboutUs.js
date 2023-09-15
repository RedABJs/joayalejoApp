import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-1 sm:grid-cols-2 place-content-center gap-5 py-4 px-[15%] aparecer">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl h-fit my-10 text-gold-400 font-bold">
          About Us
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          quam exercitationem pariatur odit expedita labore, mollitia fuga
          ipsam. Nisi neque facere nobis vel molestiae vero nostrum magnam eius
          placeat reiciendis soluta aperiam minus velit, rem totam
          exercitationem repellendus, quis dolores consequatur temporibus.
          Ratione nam ipsum eos consequatur porro, odio sunt?
        </p>
      </div>
      <div className="flex items-center justify-center sm:mb-0 mb-10">
        <Image
          src={
            "https://res.cloudinary.com/cancionero/image/upload/v1694544911/joayalejo_bodyfront_main_m08mkp.webp"
          }
          width={300}
          height={300}
          alt="aboutus_img"
        />
      </div>
      {/* <svg
        className="absolute bottom-0 sm:-bottom-8 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#202020"
          fill-opacity="1"
          d="M0,192L120,208C240,224,480,256,720,261.3C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}
    </section>
  );
};

export default AboutUs;
