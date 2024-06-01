import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { VideoPlay } from "../assets";
import styles from "../styles";
const Video = () => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section className={`${styles.boxWidth} w-full relative z-0`}>
      <video
        src={VideoPlay}
        ref={videoRef}
        loop
        controls={false}
        muted
        className="w-full h-full"
      />
      <div className={`${styles.flexCenter} absolute inset-0 text-white z-10`}>
        <div
          onClick={handleVideo}
          className="bg-primary p-4 rounded-full cursor-pointer"
        >
          {playVideo ? (
            <BsPauseFill fontSize={24} color="#FFD063" />
          ) : (
            <BsFillPlayFill fontSize={24} color="#FFD063" />
          )}
        </div>
      </div>
    </section>
  );
};
export default Video;
