import React from "react";
import { Image_1 } from "../../assets";
import { SectionHeading } from "../../components";
import "./header.css";
const Header = () => (
  <header className="tech__header app__wrapper section__padding" id="home">
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
      <div className="tech__header-btn flex__start">
        <button type="button" className="custom__button">
          shop now
        </button>
        <div className="tech__header-price flex__start">
          <p className="p__price">$ 249.99</p>
          <p className="p__price retail__price">$ 299.99</p>
        </div>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={Image_1} alt="Image" />
    </div>
  </header>
);
export default Header;
