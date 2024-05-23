import React from "react";
import { brands } from "../../constants";
import "./brand.css";
const Brand = () => (
  <article className="tech__brands flex__center">
    {brands.map((brand, index) => (
      <div key={index} className="flex__center">
        <img src={brand.imgUrl} alt="Brand" />
      </div>
    ))}
  </article>
);
export default Brand;
