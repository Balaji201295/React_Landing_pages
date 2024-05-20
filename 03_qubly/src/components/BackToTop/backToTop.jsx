import React, { useState, useEffect } from "react";
import "./backToTop.css";
import { PiArrowBendLeftUpBold } from "react-icons/pi";
const backToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div className="backToTop">
          <button onClick={scrollOnTop} className="flex__center">
            <PiArrowBendLeftUpBold /> <span>Top</span>
          </button>
        </div>
      )}
    </>
  );
};
export default backToTop;
