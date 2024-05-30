import React from "react";
import { Image_2 } from "../assets";
import styles from "../styles";
const Chart = () => (
  <section className={`${styles.marginY} pt-8 sm:pt-16 md:pt-24`}>
    <img src={Image_2} alt="Chart" className="w-full h-full object-contain" />
  </section>
);
export default Chart;
