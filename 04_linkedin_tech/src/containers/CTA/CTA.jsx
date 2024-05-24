import React from "react";
import { SectionHeading } from "../../components";
import "./cta.css";
const CTA = () => (
  <article className="tech__cta flex__center section__padding" id="contact-us">
    <div className="tech__cta-content">
      <SectionHeading
        title="Contact Us for those interested."
        subtitle="User Contact"
        styles={{ textAlign: "center", width: "100%" }}
      />
      <p className="p__content">
        The standard chunk of Lorem Ipsum used since the is reproduced below for
        those interested.
      </p>
    </div>
    <form className="tech__cta-form">
      <input type="email" placeholder="Enter Your Email Address" />
      <button type="submit" className="custom__button">
        subscribe
      </button>
    </form>
  </article>
);
export default CTA;
