import React from "react";
import "./sectionHeading.css";
const SectionHeading = ({ title, subtitle }) => (
  <div className="tech__sectionHeading">
    <p className="p__subtitle">{subtitle}</p>
    {title && <h2 className="h2__headtext">{title}</h2>}
  </div>
);
export default SectionHeading;
