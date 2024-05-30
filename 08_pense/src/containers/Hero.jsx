import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Image_1 } from "../assets";
import styles, { layout } from "../styles";

const Hero = () => {
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
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(option);
  };

  return (
    <header id="about" className={`${layout.section} ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
          Track your Expenses & <br className="sm:block hidden" /> Save Money
        </h1>
        <p className={`${styles.paragraph} my-5`}>
          Helps you to organize your income and expenses
        </p>
        <div className="flex justify-start items-center gap-4 w-full">
          <div className="relative inline-block text-left w-full min-w-[140px] max-w-[175px]">
            <button
              ref={dropdownRef}
              onClick={() => setIsOpen((prev) => !prev)}
              className={`${styles.flexCenter} text-sm sm:text-base text-white font-medium bg-primary rounded-lg py-3 px-3 sm:px-6 border-2 w-full border-primary hover:bg-white hover:text-primary transition-all shadow-sm`}
            >
              {selectedOption}
              <MdKeyboardArrowDown
                fontSize={20}
                className={`${isOpen ? "rotate-180" : ""} transition-all`}
              />
            </button>
            {isOpen && (
              <div className="origin-top-right absolute right-0 w-full mt-2 bg-white border-2 border-primary z-10 rounded-md shadow-sm">
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
          <p className={styles.paragraph}>— Web, iOS and Android</p>
        </div>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={Image_1}
          alt="About"
          className="w-full h-full object-contain"
        />
      </div>
    </header>
  );
};
export default Hero;
