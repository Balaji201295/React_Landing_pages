import React, { useState, useEffect } from "react";
import { Logo } from "../assets";
import { Button } from "../components";
import { navLinks } from "../constants";
import { IoClose } from "react-icons/io5";
import { FaBars, FaGlobeAfrica } from "react-icons/fa";
import styles from "../styles";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].id);
  const [toggleOpen, setToggleOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="home"
      className={`${styles.boxWidth} ${
        styles.paddingX
      } w-full fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center transition-all duration-500 ease-in-out ${
        isScrolled ? "py-3 bg-yellow shadow-md" : "py-5 bg-white"
      }`}
    >
      <a href="/">
        <img
          src={Logo}
          alt="OneFlow"
          className="w-[140px] h-[31px] object-contain"
        />
      </a>
      <ul className="flex-1 hidden md:flex justify-end items-center list-none">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`text-base text-primary font-normal border-b-2 capitalize mr-8 ${
              activeLink === nav.id ? "border-primary" : "border-transparent"
            }`}
            onClick={() => setActiveLink(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="hidden xs:flex justify-end items-center w-full md:w-max mr-8 md:mr-0 gap-4">
        <Button label="Get a demo" isScrolled={isScrolled} />
        <Button
          label="Log in"
          styles="bg-white hover:bg-primary text-primary hover:text-yellow border-primary"
        />
      </div>
      <div className="hidden md:block ml-10">
        <FaGlobeAfrica
          fontSize={24}
          color="#013A4C"
          className="cursor-pointer"
        />
      </div>
      {/* responsive */}
      <div className="md:hidden flex justify-end items-center">
        {toggleOpen ? (
          <IoClose
            fontSize={24}
            className="text-primary cursor-pointer"
            onClick={() => setToggleOpen(false)}
          />
        ) : (
          <FaBars
            fontSize={24}
            className="text-primary cursor-pointer"
            onClick={() => setToggleOpen(true)}
          />
        )}
        <div
          className={`${
            toggleOpen ? "flex" : "hidden"
          } flex-col gap-4 absolute top-20 right-4 sm:right-12 bg-primary mx-4 my-2 p-5 min-w-[175px] rounded-lg sidebar`}
        >
          <ul
            className="flex flex-col justify-center xs:justify-end items-center xs:items-end gap-4 list-none"
            onClick={() => setToggleOpen(false)}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-lg sm:text-xl text-yellow font-medium border-b-2 capitalize ${
                  activeLink === nav.id ? "border-yellow" : "border-transparent"
                }`}
                onClick={() => setActiveLink(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="xs:hidden flex justify-end w-full gap-4">
            <Button label="Get a demo" />
            <Button
              label="Log in"
              styles="bg-white hover:bg-primary text-primary hover:text-white border-white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
