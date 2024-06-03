import React from "react";
import { Button } from "../components";
import { features } from "../constants";
import styles from "../styles";

const Platforms = () => (
  <section
    id="career"
    id="platform"
    className={`${styles.boxWidth} ${styles.padding} bg__platform`}
  >
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-roboto font-bold text-primary tracking-[0.7px] text-center">
      The complete <br className="sm:block hidden" /> platform for smart{" "}
      <br className="sm:block hidden" />
      contracts
    </h2>
    <div className="flex flex-col justify-center items-start gap-16 mt-16">
      {features.map((item, index) => {
        const { icon, title, content } = item;
        return (
          <div
            key={index}
            className={`w-full flex ${
              index % 2 === 0
                ? "justify-center sm:justify-end"
                : "justify-center sm:justify-start"
            }`}
          >
            <article className="flex flex-col justify-start items-start gap-4 sm:gap-6 ">
              <img
                src={icon}
                alt={title}
                className="w-[60px] sm:w-[109px] h-auto object-contain"
              />
              <h3 className="text-xl ss:text-2xl md:text-3xl font-roboto font-bold tracking-[0.4px]">
                {title}
              </h3>
              <p className="text-sm sm:text-base font-normal text-primary max-w-[480px]">
                {content}
              </p>
              <Button
                label="take the tour"
                styles="text-white bg-primary hover:text-primary hover:bg-white border-primary"
              />
            </article>
          </div>
        );
      })}
    </div>
  </section>
);

export default Platforms;
