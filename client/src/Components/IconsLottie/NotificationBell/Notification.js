import { useLottie, useLottieInteractivity } from "lottie-react";
import NotificationBell from "../NotificationBell/notificationBell.json";

const style = {
  height: 70,
  borderStyle: "None",
};

const options = {
  animationData: NotificationBell,
};

const Notification = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "play",
        frames: [45, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  });

  return Animation;
};

export default Notification;
