import React from "react";
import { SubHeading } from "../../components";
import { Electronic, Image_2 } from "../../assets";
import "./product.css";
const Product = () => (
  <article
    className="qubly__product app__wrapper app__wrapper-reverse section__padding"
    id="product"
  >
    <div className="app__wrapper_img">
      <img src={Image_2} alt="Product" />
    </div>
    <div className="app__wrapper_info" style={{ gap: "1.5rem" }}>
      <SubHeading icon={Electronic} text="For Product Teams" />
      <h2 className="h2__headtext">Launch with the best stack</h2>
      <p className="p__content">
        A centralized platform that integrates zillions of data sources using
        Big Data ELT (Extract, Load & Transform) that leaves no data behind
      </p>
    </div>
  </article>
);
export default Product;
