import { useLottie, useLottieInteractivity } from "lottie-react";
import ProfileIcon from "../ProfileIcon/profileIcon.json";

const style = {
  height: 70,
  borderStyle: "None",
};

const options = {
  animationData: ProfileIcon,
};

const Profile = () => {
  const lottieObj = useLottie(options, style);

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "play",
        frames: [0, lottieObj?.frames - 1],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [lottieObj?.frames - 1],
      },
    ],
  });

  return Animation;
};

export default Profile;
