import React from "react";
import "./sectionHeading.css";
const SectionHeading = ({ title, titleImg, content }) => (
  <section className="section__heading">
    <h2 className="h2__headtext">
      <span>
        {title}
        {titleImg && (
          <img
            src={titleImg}
            style={{ width: "130px", height: "65px", verticalAlign: "middle" }}
            alt="Image"
          />
        )}
      </span>
    </h2>

    <p className="p__content">{content}</p>
  </section>
);
export default SectionHeading;
