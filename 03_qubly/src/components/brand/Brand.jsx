import React from "react";
import "./brand.css";
const Brand = ({ brand: { imgUrl } }) => (
  <div className="brand__img">
    <img src={imgUrl} alt="Brand" />
  </div>
);
export default Brand;
