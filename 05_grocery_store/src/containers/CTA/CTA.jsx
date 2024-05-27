import React from "react";
import { Fruit_10 } from "../../assets";
import { SectionHeading } from "../../components";
import "./cta.css";
const CTA = () => (
  <article
    className="grocery__cta flex__center section__margin"
    id="contact-us"
  >
    <div className="grocery__cta-img">
      <img src={Fruit_10} alt="Strawberry" />
    </div>
    <div className="grocery__cta-content">
      <SectionHeading
        title="Subscribe Newsletter"
        content="Vegetables are available in many varieties and can be classified into biological groups or ‘families’, including:"
      />
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  </article>
);
export default CTA;
