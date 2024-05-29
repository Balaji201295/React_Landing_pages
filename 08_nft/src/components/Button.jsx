import React from "react";
const Button = ({ label, styles }) => (
  <button
    type="button"
    className={`text-base font-semibold border border-solid border-primary transition-all duration-300 py-3 px-5 ${
      styles
        ? styles
        : "text-primary bg-primary/10 hover:bg-primary hover:text-dark"
    }`}
  >
    {label}
  </button>
);
export default Button;
