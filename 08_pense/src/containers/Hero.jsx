import React from "react";
import { DropdownButton } from "../components";
import { Image_1 } from "../assets";
import styles, { layout } from "../styles";

const Hero = () => {
  return (
    <header id="about" className={`${layout.section} ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
          Track your Expenses & <br className="sm:block hidden" /> Save Money
        </h1>
        <p className={`${styles.paragraph} my-5`}>
          Helps you to organize your income and expenses
        </p>
        <div className="flex justify-start items-center gap-4 w-full">
          <DropdownButton />
          <p className={styles.paragraph}>— Web, iOS and Android</p>
        </div>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={Image_1}
          alt="About"
          className="w-full h-full object-contain"
        />
      </div>
    </header>
  );
};
export default Hero;
