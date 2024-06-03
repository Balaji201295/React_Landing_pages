import React from "react";
import styles, { layout } from "../styles";
import { Button } from "../components";
import { Image_2 } from "../assets";
const Contracts = () => (
  <section
    id="learn"
    className={`${styles.boxWidth} ${styles.padding} ${layout.section} bg-primary`}
  >
    <div className={`${layout.sectionInfo} gap-6`}>
      <h2 className="text-3xl ss:text-4xl md:text-5xl font-roboto font-normal tracking-[0.4px] text-[#F2DCE4]">
        Turn e-signatures <br className="sm:block hidden" /> into smart{" "}
        contracts
      </h2>
      <p className="text-base sm:text-lg font-normal text-white">
        Experience true contract magic by automating the entire contract process
        — from creating to signing and managing.
      </p>
      <Button label="Take our product tour" borderColor="hover:border-yellow" />
    </div>
    <div className={layout.sectionImg}>
      <img
        src={Image_2}
        alt="Image"
        className="w-full sm:w-[80%] h-full object-contain"
      />
    </div>
  </section>
);
export default Contracts;
