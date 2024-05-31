import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "../styles";
const DropdownButton = ({ customStyles, optionStyles }) => {
  const options = [
    "Try with Demo",
    "Standard Plan",
    "Silver Plan",
    "Diamond Plan",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(option);
  };
  return (
    <div className="relative inline-block text-left w-full min-w-[140px] max-w-[175px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          styles.flexCenter
        } text-sm sm:text-base font-medium rounded-lg py-3 px-3 sm:px-6 border-2 w-full transition-all shadow-sm ${
          customStyles
            ? customStyles
            : "text-white bg-primary hover:bg-white hover:text-primary"
        }`}
      >
        {selectedOption}
        <MdKeyboardArrowDown
          fontSize={20}
          className={`${isOpen ? "rotate-180" : ""} transition-all`}
        />
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`origin-top-right absolute right-0 w-full mt-2 bg-white border-2 border-primary z-10 rounded-md shadow-sm ${
            optionStyles ? optionStyles : ""
          }`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`block px-4 py-2 text-sm cursor-pointer transition-all hover:bg-primary hover:text-white ${
                selectedOption === option ? "bg-primary text-white" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropdownButton;
