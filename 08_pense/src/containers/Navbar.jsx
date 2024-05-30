import React, { useState, useEffect } from "react";
import { Logo } from "../assets";
import { navLinks } from "../constants";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "../styles";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].id);
  const [toggleOpen, setToggleOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`${styles.boxWidth} ${
        styles.paddingX
      } w-full fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center transition-all duration-500 ease-in-out ${
        isScrolled ? "py-3 bg-white shadow-md" : "py-5"
      }`}
    >
      <a
        href="/"
        className={`flex justify-start items-center gap-3 uppercase text-xl font-semibold text-dark`}
      >
        <img src={Logo} alt="PENES" />
        <span>penes</span>
      </a>
      <ul className="flex-1 hidden md:flex justify-center items-center list-none gap-8">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`text-base sm:text-lg font-medium transition-all hover:text-primary border-b-2 border-solid ${
              activeLink === nav.id
                ? "border-primary text-primary"
                : "border-transparent"
            }`}
            onClick={() => setActiveLink(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="hidden sm:flex justify-end items-center w-full md:w-max mr-8 md:mr-0">
        <button
          type="button"
          className="text-base sm:text-lg font-normal text-primary bg-white border border-solid border-primary capitalize py-3 px-6 rounded-lg hover:text-white hover:bg-primary transition-all duration-300"
        >
          Request a demo
        </button>
      </div>
      {/* responsive */}
      <div className="block md:hidden">
        <FaBars
          fontSize={36}
          className="text-primary cursor-pointer"
          onClick={() => setToggleOpen(true)}
        />
        {toggleOpen && (
          <div className="w-full flex flex-col justify-center items-center fixed top-0 left-0 min-h-screen bg-dark transition-all duration-300 ease-in-out slide-bottom z-30">
            <IoClose
              fontSize={36}
              className="text-white absolute top-5 right-5 sm:right-10 cursor-pointer"
              onClick={() => setToggleOpen(false)}
            />
            <ul className="flex flex-col justify-center items-center list-none gap-4 sm:gap-8">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className="text-2xl sm:text-3xl font-semibold text-center text-white cursor-pointer uppercase transition-all duration-300 ease-in-out"
                  onClick={() => setToggleOpen(false)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="flex sm:hidden justify-center items-center mt-4">
              <button
                type="button"
                className="text-base sm:text-lg text-primary font-semibold bg-white capitalize py-3 px-6 rounded-lg hover:text-white hover:bg-primary transition-all duration-300"
              >
                Request a demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
