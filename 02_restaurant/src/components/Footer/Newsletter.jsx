import React from "react";
import { SubHeading } from "../../components";
import "./Newsletter.css";

const Newsletter = () => (
  <section className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter Your Email Address" />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>
  </section>
);

export default Newsletter;
