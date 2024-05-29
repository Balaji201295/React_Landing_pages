import React, { useEffect, useState } from "react";
import { Button } from "../components";
import { navLinks } from "../constants";
import { Logo } from "../assets";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "../styles";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].id);
  const [toggleOpen, setToggleOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` ${styles.boxWidth} ${
        styles.paddingX
      } w-full flex justify-between items-center fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out bg-dark ${
        isScrolled ? "py-3 shadow-lg" : "py-5"
      }`}
    >
      <a href="/">
        <img
          src={Logo}
          alt="NFT"
          className="w-[66px] h-[66px] object-contain"
        />
      </a>
      <ul className="md:flex hidden justify-end items-center list-none gap-10 flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`text-base font-medium tracking-[0.36px] text-light cursor-pointer border-b-2 ${
              activeLink === nav.id ? "border-primary" : "border-transparent"
            }`}
            onClick={() => setActiveLink(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="w-full md:w-max sm:flex hidden justify-end items-center md:ml-10 sm:mx-10">
        <Button label="Connect Wallet" />
      </div>
      <div className="flex md:hidden justify-end items-center">
        <FaBars
          fontSize={36}
          color="#FFCE4E"
          onClick={() => setToggleOpen(true)}
        />
        {toggleOpen && (
          <div className="flex flex-col justify-center items-center fixed top-0 left-0 w-full min-h-screen bg-primary transition-all duration-300 slide-bottom z-30">
            <IoClose
              fontSize={36}
              className="text-light absolute top-5 right-5 sm:right-10 cursor-pointer"
              onClick={() => setToggleOpen(false)}
            />
            <ul
              className="flex flex-col justify-center items-center gap-4 sm:gap-8"
              onClick={() => setToggleOpen(false)}
            >
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-xl uppercase sm:text-2xl font-medium tracking-[0.36px] text-light cursor-pointer border-b-2 ${
                    activeLink === nav.id
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveLink(nav.id)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="block sm:hidden mt-6">
              <Button label="Connect Wallet" styles="bg-light text-primary" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
