import React from "react";

const Button = ({ label, styles, isScrolled, borderColor }) => (
  <button
    type="button"
    className={`text-sm font-normal text-center py-3 px-4 border rounded capitalize transition-all duration-300 ease-linear ${
      styles
        ? styles
        : isScrolled
        ? "bg-primary text-yellow border-primary hover:bg-white hover:text-primary"
        : "bg-yellow text-primary border-yellow hover:bg-primary hover:text-yellow hover:border-primary"
    } ${borderColor}`}
  >
    {label}
  </button>
);

export default Button;
