import React from "react";
import { products } from "../../constants";
import "./offers.css";
const Offers = () => (
  <div className="tech__offers flex__center section__padding">
    {products.slice(2, 4).map((product, index) => {
      const { offerPercentage, productName, imgUrl } = product;
      return (
        <div
          key={index}
          className="tech__offers-item flex__center app__gradient"
        >
          <div className="tech__offers-item_info">
            <p>Get up to {offerPercentage}% off Today Only!</p>
            <h3>{productName}</h3>
            <a href="#">Show Now</a>
          </div>
          <div className="tech__offers-item_img">
            <img src={imgUrl} alt={productName} />
          </div>
        </div>
      );
    })}
  </div>
);
export default Offers;
