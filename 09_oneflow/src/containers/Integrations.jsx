import React from "react";
import styles, { layout } from "../styles";
import { Image_5 } from "../assets";
import { Button } from "../components";
const Integrations = () => (
  <section
    className={`${styles.boxWidth} ${styles.paddingX} ${layout.section} w-full`}
  >
    <div className={layout.sectionInfo}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-normal text-primary">
        Seamless integrations
      </h2>
      <p className="text-base sm:text-lg font-normal text-primary max-w-[400px] my-6">
        Integrate your favorite tools with your contract workflow and work
        wonders.
      </p>
      <Button label="view all integrations" />
    </div>
    <div className={layout.sectionImg}>
      <img
        src={Image_5}
        alt="Image"
        className="w-full sm:w-[80%] h-full object-contain"
      />
    </div>
  </section>
);
export default Integrations;
