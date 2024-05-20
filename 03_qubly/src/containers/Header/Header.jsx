import React from "react";
import { SubHeading } from "../../components";
import { Image_1, Star } from "../../assets";
import "./header.css";
const Header = () => {
  return (
    <header className="qubly__header app__wrapper section__padding" id="about">
      <div className="app__wrapper_info">
        <SubHeading icon={Star} text="v3.1 released." link="Learn more" />
        <h1>
          Your data with <br />
          real-time analytics
        </h1>
        <p className="p__content">
          Harness the potential of Big Data Analytics & Cloud Services and
          become a data-driven organization with Needle tail
        </p>
        <div className="qubly__header_btn">
          <button type="button">Start free trial</button>
          <button type="button">Learn more</button>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={Image_1} alt="About" />
      </div>
    </header>
  );
};
export default Header;
