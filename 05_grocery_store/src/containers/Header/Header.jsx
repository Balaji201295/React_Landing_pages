import React from "react";
import { Image_1 } from "../../assets";
import "./header.css";
import { Button } from "../../components";
const Header = () => (
  <header className="grocery__header section__padding app__wrapper">
    <div className="app__wrapper_info">
      <h5>fresh fruit for you</h5>
      <h1>Eat as you want</h1>
      <p className="p__content">
        Fruit and vegetables should be an important part of your daily diet.
        They are naturally good and contain vitamins and minerals that can help
        to keep you healthy. .
      </p>
      <div className="grocery__header-btn">
        <Button label="Add To Cart" />
        <Button label="Learn More" />
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={Image_1} alt="Image" />
    </div>
  </header>
);
export default Header;
