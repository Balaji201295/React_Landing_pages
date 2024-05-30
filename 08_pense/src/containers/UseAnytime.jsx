import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Image_5 } from "../assets";
import styles, { layout } from "../styles";
const UseAnytime = () => (
  <section id="features" className={`${styles.paddingY} ${layout.section}`}>
    <div className={`${layout.sectionInfo} gap-6`}>
      <p className={`${styles.paragraph} uppercase`}>Use anytime</p>
      <h1 className={`${styles.heading}`}>
        Use anytime <br className="md:block hidden" /> when you
        <br className="md:block hidden" /> need
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
      <img src={Image_5} alt="Image" className="w-full h-full object-contain" />
    </div>
  </section>
);
export default UseAnytime;
