import React from "react";
import { brands } from "../constants";
import styles from "../styles";
const Brands = () => (
  <section className={`${styles.paddingY} flex flex-wrap gap-8`}>
    {brands.map((brand, index) => (
      <div key={index} className={`flex-1 ${styles.flexCenter} min-w-[175px]`}>
        <img src={brand.imgUrl} alt="Brand" />
      </div>
    ))}
  </section>
);
export default Brands;
