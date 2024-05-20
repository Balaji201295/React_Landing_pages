import React from "react";
import { SubHeading } from "../../components";
import { Image_3, Compass } from "../../assets";
import "./engineering.css";
const Engineering = () => (
  <article
    className="qubly__product app__wrapper section__padding"
    id="product"
  >
    <div className="app__wrapper_info" style={{ gap: "1.5rem" }}>
      <SubHeading icon={Compass} text="For Engineering Teams" />
      <h2 className="h2__headtext">Data-driven pipelines in minutes</h2>
      <p className="p__content">
        Maintenance-free data pipelines with quick set-up and straight-forward
        deployments that are powered by a modern & scalable platform.
      </p>
    </div>
    <div className="app__wrapper_img">
      <img src={Image_3} alt="Product" />
    </div>
  </article>
);
export default Engineering;
