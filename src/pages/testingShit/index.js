import animations from "@/styles/animations.module.css";
import { toast } from "react-toastify";
import HomeLayout from "@/components/HomeLayout";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import WPIcon from "@/components/WhatsAppIcon/WPIcon";

const TestingShit = () => {
  return (
    <HomeLayout>
      <div className="grid place-content-center h-screen">
        <div className="grid grid-cols-4x4 h-[120px] w-[120px] place-content-center">
          <div className="bg-white w-[60px] h-[60px] col-span-2">1</div>
          <div className="bg-black w-[60px] h-[60px]">2</div>
          <div className="bg-redwine w-[60px] h-[60px]">3</div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default TestingShit;
