import React from "react";
import { Rating } from "../../components";
import { products } from "../../constants";
import { Icon_1, Icon_2, Icon_3, Icon_4 } from "../../assets";
import "./shopImages.css";

const ShopImages = () => (
  <div className="shop__img-container">
    {products
      .slice(8)
      .map(({ id, imgUrl, offerPrice, retailPrice, ratings }) => (
        <div key={id} className="shop-img">
          <img src={imgUrl} alt="Product Image" />
          <div className="shop-img_top">
            <div className="productItem__options-info_prices">
              <div className="productItem_price flex__start">
                <p className="p__price">${offerPrice}</p>
                <p style={{ padding: "0 4px", color: "rgba(3,13,21,0.5)" }}>
                  {" "}
                  /{" "}
                </p>
                <p className="p__price retail__price">${retailPrice}</p>
              </div>
              <Rating ratings={ratings} />
            </div>
          </div>
          <div className="shop-img_bottom">
            <img src={Icon_1} alt="Cart" />
            <img src={Icon_2} alt="Search" />
            <img src={Icon_3} alt="Wishlist" />
            <img src={Icon_4} alt="Reload" />
          </div>
        </div>
      ))}
  </div>
);

export default ShopImages;
