import React from "react";
import { Icon_1, Icon_2, Icon_3, Icon_4 } from "../../assets";
import { Rating } from "../../components";
import "./productItems.css";

const ProductItems = ({
  product: {
    offerPercentage,
    imgUrl,
    productName,
    offerPrice,
    retailPrice,
    ratings,
    colors = [],
  },
}) => (
  <div className="productItem">
    <p className="productItem__offer">
      Get up to {offerPercentage}% off Today Only!
    </p>
    <div className="productItem__img">
      <img src={imgUrl} alt={productName} />
    </div>
    <div className="productItem__info">
      <h3>{productName}</h3>
      <div className="productItem_price flex__start">
        <p className="p__price">${offerPrice}</p>
        <p style={{ padding: "0 4px", color: "rgba(3,13,21,0.5)" }}>/</p>
        <p className="p__price retail__price">${retailPrice}</p>
      </div>
      <Rating ratings={ratings} />
    </div>
    <div className="productItem__options">
      <div className="productItem__options-icons">
        <img src={Icon_1} alt="Cart" />
        <img src={Icon_2} alt="Search" />
        <img src={Icon_3} alt="Wishlist" />
        <img src={Icon_4} alt="Reload" />
      </div>
      <div className="productItem__options-info">
        <div className="productItem__options-info_prices">
          <div className="productItem_price flex__start">
            <p className="p__price">${offerPrice}</p>
            <p style={{ padding: "0 4px", color: "rgba(3,13,21,0.5)" }}>/</p>
            <p className="p__price retail__price">${retailPrice}</p>
          </div>
          <Rating ratings={ratings} />
        </div>
        <ul className="productItem__colors">
          {colors.map((color, index) => (
            <li key={index} style={{ backgroundColor: color }}></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ProductItems;
