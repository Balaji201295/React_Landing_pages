import React from "react";
const Button = ({ label, styles }) => (
  <button
    type="button"
    className={`text-base font-semibold rounded-[100px] py-3 px-6 border border-solid border-primary transition-all ${
      styles
        ? styles
        : "text-white bg-secondary hover:bg-white hover:text-primary"
    }`}
  >
    {label}
  </button>
);
export default Button;
