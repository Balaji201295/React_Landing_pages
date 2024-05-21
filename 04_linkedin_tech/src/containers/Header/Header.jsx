import React from "react";
import { Image_1 } from "../../assets";
import { SectionHeading } from "../../components";
import "./header.css";
const Header = () => (
  <header className="tech__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SectionHeading subtitle="Favorite brands" />
      <h1>
        <span>An exciting place</span>
        <br /> for the whole family to shop.
      </h1>
      <p className="p__content">
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested.
      </p>
      <div className="tech__header-btn">
        <button type="button" className="custom__button">
          shop now
        </button>
        <div className="tech__header-price">
          <p>$ 249.99</p>
          <p>$ 299.99</p>
        </div>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={Image_1} alt="Image" />
    </div>
  </header>
);
export default Header;
