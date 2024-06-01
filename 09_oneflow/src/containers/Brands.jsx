import React from "react";
import { brands } from "../constants";
import styles from "../styles";
const Brands = () => (
  <section className={`${styles.padding} ${styles.boxWidth} bg-primary`}>
    <h2 className="text-2xl font-normal text-white tracking-[0.7px] text-center font-roboto mb-6">
      Join these companies making business flow
    </h2>
    <div className={`${styles.flexCenter} flex-wrap gap-8`}>
      {brands.map((brand, index) => (
        <div key={index} className={`${styles.flexCenter} min-w-[100px]`}>
          <img
            src={brand.imgUrl}
            alt="Brand"
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);
export default Brands;
