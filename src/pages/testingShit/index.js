import animations from "@/styles/animations.module.css";
import { toast } from "react-toastify";

import HomeLayout from "@/components/HomeLayout";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import WPIcon from "@/components/WhatsAppIcon/WPIcon";

const TestingShit = () => {
  return (
    <HomeLayout>
      <div className="grid place-content-center h-screen">
        <WPIcon />
      </div>
    </HomeLayout>
  );
};

export default TestingShit;
