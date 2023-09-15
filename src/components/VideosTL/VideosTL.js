import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const VideosTL = () => {
  return (
    <section className="w-full h-fit bg-black text-gold-400 sm:px-[15%] flex flex-col relative py-20 px-10">
      <h2 className="text-5xl font-bold text-center pb-28">Contenido</h2>
      <div className="flex flex-col w-full relative justify-center items-center space-y-14">
        {/* Gold time-line */}
        <div className="h-full absolute bg-gold-400 w-[1px] z-10 hidden sm:flex flex-col justify-around items-center">
          <div className="h-2 w-2 bg-gold-100 rounded-full">
            <div className="h-2 w-2 [box-shadow:0_0_5px_#ffe169] shadow-white bg-gold-100 rounded-full animate-ping"></div>
          </div>
          <div className="h-2 w-2 bg-gold-100 rounded-full">
            <div className="h-2 w-2 [box-shadow:0_0_5px_#ffe169] shadow-white bg-gold-100 rounded-full animate-ping "></div>
          </div>
          <div className="h-2 w-2 bg-gold-100 rounded-full">
            <div className="h-2 w-2 [box-shadow:0_0_5px_#ffe169] shadow-white bg-gold-100 rounded-full animate-ping "></div>
          </div>
          <div className="h-2 w-2 bg-gold-100 rounded-full">
            <div className="h-2 w-2 [box-shadow:0_0_5px_#ffe169] shadow-white bg-gold-100 rounded-full animate-ping"></div>
          </div>
        </div>
        {/* Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center gap-y-5 sm:gap-y-0 gap-x-10 aparecer">
          <div className="flex flex-col justify-center items-center px-5 text-center">
            <h3 className="text-2xl font-semibold mb-5 sm:my-5">Video Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              totam odio officia itaque sequi ad sunt adipisci excepturi vel
              perspiciatis.
            </p>
          </div>
          <div className="relative overflow-hidden w-full pt-[56.25%]">
            <iframe
              className="absolute w-full h-full top-0"
              src="https://www.youtube.com/embed/j_IFZZ3YSsA?fs=1&color=white"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="1"
            ></iframe>
          </div>
        </div>
        <div className="sm:hidden flex w-full h-[1px] bg-gold-300 justify-center items-center">
          <div className="h-2 w-2 rounded-full bg-gold-300">
            <div className="h-2 w-2 [box-shadow:0_0_5px_#ffe169] shadow-white bg-gold-100 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center gap-y-5 sm:gap-y-0 gap-x-10 aparecer">
          <div className="flex flex-col justify-center items-center px-5 text-center sm:order-2">
            <h3 className="text-2xl font-semibold mb-5 sm:my-5">Video Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              totam odio officia itaque sequi ad sunt adipisci excepturi vel
              perspiciatis.
            </p>
          </div>
          <div className="relative overflow-hidden w-full pt-[56.25%]">
            <iframe
              className="absolute w-full h-full top-0"
              src="https://www.youtube.com/embed/ZrZcvVV5_dE?fs=1&color=white"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="1"
            ></iframe>
          </div>
        </div>
        <div className="sm:hidden flex w-full h-[1px] bg-gold-300 justify-center items-center">
          <div className="h-2 w-2 rounded-full bg-gold-300">
            <div className="h-2 w-2 [box-shadow:0_0_5px_#ffe169] shadow-white bg-gold-100 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center gap-y-5 sm:gap-y-0 gap-x-10 aparecer">
          <div className="flex flex-col justify-center items-center px-5 text-center">
            <h3 className="text-2xl font-semibold mb-5 sm:my-5">Video Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              totam odio officia itaque sequi ad sunt adipisci excepturi vel
              perspiciatis.
            </p>
          </div>
          <div className="relative overflow-hidden w-full pt-[56.25%]">
            <iframe
              className="absolute w-full h-full top-0"
              src="https://www.youtube.com/embed/yKnWiR846MA?fs=1&color=white"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="1"
            ></iframe>
          </div>
        </div>
        <div className="sm:hidden flex w-full h-[1px] bg-gold-300 justify-center items-center">
          <div className="h-2 w-2 rounded-full bg-gold-300">
            <div className="h-2 w-2 [box-shadow:0_0_5px_#ffe169] shadow-white bg-gold-100 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center gap-y-5 sm:gap-y-0 gap-x-10 aparecer">
          <div className="flex flex-col justify-center items-center px-5 text-center sm:order-2">
            <h3 className="text-2xl font-semibold mb-5 sm:my-5">Video Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              totam odio officia itaque sequi ad sunt adipisci excepturi vel
              perspiciatis.
            </p>
          </div>
          <div className="relative overflow-hidden w-full pt-[56.25%]">
            <iframe
              className="absolute w-full h-full top-0"
              src="https://www.youtube.com/embed/rKHv8afKG7k?fs=1&color=white"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="1"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosTL;
