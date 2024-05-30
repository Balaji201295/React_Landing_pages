import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Image_3 } from "../assets";
import styles, { layout } from "../styles";
const AlwaysOnline = () => (
  <section id="features" className={`${styles.paddingY} ${layout.section}`}>
    <div className={`${layout.sectionInfo} gap-6`}>
      <p className={`${styles.paragraph} uppercase`}>Always online</p>
      <h1 className={`${styles.heading}`}>
        Real-time <br className="md:block hidden" /> support
        <br className="md:block hidden" />
        with cloud
      </h1>
      <p className={`${styles.paragraph} max-w-[500px]`}>
        Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan
        nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.
      </p>
      <a
        href="#"
        className={`${styles.flexCenter} ${styles.paragraph} text-primary`}
      >
        Learn more&nbsp;
        <IoIosArrowRoundForward />
      </a>
    </div>
    <div className={layout.sectionImg}>
      <img src={Image_3} alt="Image" className="w-full h-full object-contain" />
    </div>
  </section>
);
export default AlwaysOnline;
