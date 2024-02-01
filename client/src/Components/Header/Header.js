import styles from "./Header.module.css";
import React from "react";
import Notification from "../IconsLottie/NotificationBell/Notification";
import Profile from "../IconsLottie/ProfileIcon/ProfileIcon";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="Cpms w-48 text-center text-black text-6xl font-bold font-['Inter']">
        CPMS
      </div>
      <div className={styles.HeaderOptions}>
        <div className="animation" id={styles.NotificationBell}>
          <Notification />
        </div>
        <div className="ProfileIcon">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
