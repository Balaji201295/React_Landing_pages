import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Image_4 } from "../assets";
import styles, { layout } from "../styles";
const SaveCost = () => {
  return (
    <section
      id="features"
      className={`${styles.paddingY} ${layout.sectionReverse}`}
    >
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={Image_4}
          alt="Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className={`${layout.sectionInfo} gap-6`}>
        <p className={`${styles.paragraph} uppercase`}>free some cost</p>
        <h1 className={`${styles.heading}`}>
          Save cost <br className="md:block hidden" /> for you and{" "}
          <br className="md:block hidden" /> family
        </h1>
        <p className={`${styles.paragraph} max-w-[500px]`}>
          Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
          accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget
          ut.
        </p>
        <a
          href="#"
          className={`${styles.flexCenter} ${styles.paragraph} text-primary`}
        >
          Learn more&nbsp;
          <IoIosArrowRoundForward />
        </a>
      </div>
    </section>
  );
};
export default SaveCost;
