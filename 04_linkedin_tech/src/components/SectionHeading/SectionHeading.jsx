import React from "react";
import "./sectionHeading.css";

const SectionHeading = ({ title, subtitle, styles }) => {
  const classNames = ["tech__sectionHeading"];
  if (styles && styles.textAlign === "center") {
    classNames.push("centerText");
  }

  return (
    <div className={classNames.join(" ")}>
      <p className="p__subtitle">{subtitle}</p>
      {title && <h2 className="h2__headtext">{title}</h2>}
    </div>
  );
};

export default SectionHeading;
