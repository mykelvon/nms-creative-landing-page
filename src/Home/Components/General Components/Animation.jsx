import React, { useState } from "react";
import { motion, useTime, useTransform } from "framer-motion";

import { IconAvatarSvg, LetterAvatarSvg, NotificationIcon } from "./CustomSvg";
import { Avatar } from "nms-creative-ui";

export const RotateAnimation = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <div className="">
      <motion.div style={{ rotate }}>
        <LetterAvatarSvg />
      </motion.div>
    </div>
  );
};

export const ScaleRotateAnimation = () => {
  return (
    <div className="">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <IconAvatarSvg />
      </motion.div>
    </div>
  );
};
export const ScaleAnimation = () => {
  return (
    <div className="">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <NotificationIcon />
      </motion.div>
    </div>
  );
};

const distance = 50;
export const BouncingAnimation = () => {
    const [y, setY] = useState(distance);

  return (

    <div className="">
      <motion.div
        initial={{ y: -distance }}
        animate={{ y }}
        transition={{
          type: "spring",
          duration: 0.5,
          bounce: 0,
          velocity: 0,
          damping: 10,
        }}
        onAnimationComplete={() => {
          setY(y === distance ? -distance : distance);
        }}
      >
        <Avatar alt="User Avatar" src="/avatars/Avatar 1.svg" />
      </motion.div>
    </div>
  );
};
