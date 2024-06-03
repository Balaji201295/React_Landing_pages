import React from "react";
import { Button } from "../components";
import { article } from "../constants";
import styles from "../styles";
const MoreOneFlow = () => (
  <section
    id="more-oneflow"
    className={`${styles.boxWidth} ${styles.padding} w-full`}
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-bold text-primary mb-12">
      More from Oneflow...
    </h2>
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-12 sm:gap-8">
      {article.map((item, index) => (
        <article
          key={index}
          className="flex-1 flex flex-col justify-center items-center text-center gap-4"
        >
          <img
            src={item.imgUrl}
            alt={item.title}
            className="w-full h-full object-contain"
          />

          <h5 className="text-sm sm:text-base font-normal text-primary ">
            {item.title}
          </h5>
          <p className="text-lg sm:text-xl font-roboto font-normal text-primary tracking-[0.7px] max-w-[450px]">
            {item.content}
          </p>
          <Button label="find out more" />
        </article>
      ))}
    </div>
  </section>
);
export default MoreOneFlow;
