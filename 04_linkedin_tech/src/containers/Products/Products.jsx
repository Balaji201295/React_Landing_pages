import React from "react";
import { Rating } from "../../components";
import { products } from "../../constants";
import { FiShoppingCart } from "react-icons/fi";
import "./products.css";
const Products = () => (
  <article
    className="tech__product flex__center section__padding"
    id="product-items"
  >
    {products.slice(0, 2).map((product, index) => {
      const {
        imgUrl,
        productName,
        description,
        offerPrice,
        retailPrice,
        ratings,
      } = product;
      return (
        <div key={index} className="tech__product-item">
          <div className="tech__product-item_img">
            <img src={imgUrl} alt={productName} />
            <div className="shopping__cart flex__center">
              <FiShoppingCart fontSize={16} />
            </div>
          </div>
          <div className="tech__product-item_info">
            <h3>{productName}</h3>
            <p className="p__content">{description}</p>
            <div className="tech__product-item_price flex__start">
              <p className="p__price">{`$ ${offerPrice}`}</p>
              <p style={{ padding: "0 4px", color: "rgba(3,13,21,0.5)" }}>/</p>
              <p className="p__price retail__price">{`$ ${retailPrice}`}</p>
            </div>
            <Rating ratings={ratings} />
          </div>
        </div>
      );
    })}
  </article>
);
export default Products;
