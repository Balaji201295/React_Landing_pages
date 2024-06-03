import React from "react";
import { Button } from "../components";
import styles from "../styles";
const Demo = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} flex items-start justify-center flex-col gap-8 bg__demo min-h-screen`}
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-bold text-[#F2DCE4]">
      Believe your eyes
    </h2>
    <p className="text-xl sm:text-2xl font-normal text-[#F2DCE4] tracking-[1px] max-w-[470px]">
      Let us show you how to work smarter with contracts in Oneflow.
    </p>
    <Button label="get a demo" styles="text-primary bg-yellow border-yellow" />
  </section>
);
export default Demo;
