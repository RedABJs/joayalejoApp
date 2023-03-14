import animations from "@/styles/animations.module.css";
import { toast } from "react-toastify";

import HomeLayout from "@/components/HomeLayout";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";

const TestingShit = () => {
  const handleClick = () => {
    toast.success("🦄 Wow so easy!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <HomeLayout>
      <div className="grid place-content-center h-screen">
        <div
          onClick={handleClick}
          className={[animations.loadingNoteAnimation]}
        >
          <MusicNoteRoundedIcon />
        </div>
      </div>
    </HomeLayout>
  );
};

export default TestingShit;
