import React from "react";
import { DropdownButton } from "../components";
import styles from "../styles";
import { Image_6 } from "../assets";
const Demo = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col text-center`}
  >
    <h2 className={`${styles.heading} text-white`}>
      20M+ downloaded from 32 <br className="sm:block hidden" /> different
      countries
    </h2>
    <p className="text-base sm:text-2xl font-medium text-white my-6">
      Try demo for 7 days with full features.
    </p>
    <div className="sm:-mb-10">
      <DropdownButton
        customStyles="bg-white text-primary"
        optionStyles="border-white"
      />
    </div>
    <img
      src={Image_6}
      alt="Image"
      className="sm:block hidden w-full h-full object-contain"
    />
  </section>
);
export default Demo;
