import React from "react";
import "./subHeading.css";
const SubHeading = ({ icon, text, link }) => {
  return (
    <div className="qubly__subheading">
      <img src={icon} alt="Icon" />
      <p>
        {text} {link && <a href="#">{link}</a>}
      </p>
    </div>
  );
};
export default SubHeading;
