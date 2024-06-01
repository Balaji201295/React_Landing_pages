import React from "react";
import { Button } from "../components";
import styles from "../styles";
const Hero = () => (
  <header
    id="home"
    className={`bg__header ${styles.padding} ${styles.boxWidth} flex justify-start items-center min-h-screen mt-20`}
  >
    <div className={`${styles.flexStart} flex-col gap-6`}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-roboto font-normal text-primary tracking-[2px]">
        Work wonders
      </h1>
      <p className="text-base sm:text-xl font-normal text-primary tracking-[0.5px] max-w-[490px]">
        Be more effective with smart contracts that make work faster, and life
        easier.
      </p>
      <div className="flex justify-start items-center gap-4">
        <Button label="Get OneFlow free" />
        <Button
          label="Take a tour"
          styles="bg-primary hover:bg-white text-white hover:text-primary border-primary"
        />
      </div>
    </div>
  </header>
);
export default Hero;
