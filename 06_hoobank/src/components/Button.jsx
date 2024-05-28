import React from "react";
const Button = ({ label, styles }) => (
  <button
    type="button"
    className={`font-poppins font-medium text-base text-primary outline-none bg-blue-gradient rounded-lg py-4 px-6 ${styles}`}
  >
    {label}
  </button>
);
export default Button;
