import React, { useState } from "react";
import { Logo, Close, Menu } from "../assets";
import { Button } from "../components";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].id);
  return (
    <nav className="w-full flex py-6 justify-between items-center relative z-10">
      <a href="/">
        <img
          src={Logo}
          alt="JEZ SALAD"
          className="w-[100px] ss:w-[130px] h-[28px]"
        />
      </a>
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-base font-medium text-dark mx-4 border-b-2  cursor-pointer ${
              activeLink === nav.id ? "border-primary" : "border-transparent"
            }`}
            onClick={() => setActiveLink(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:flex hidden justify-end items-center">
        <Button label="Sign" />
      </div>

      {/* responsive */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? Close : Menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex flex-col justify-center items-center" : "hidden"
          } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[170px] rounded-xl sidebar`}
        >
          <ul
            className="list-none flex flex-col justify-end items-center"
            onClick={() => setToggle((prev) => !prev)}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-base font-medium text-light border-b-2 my-2 cursor-pointer ${
                  activeLink === nav.id ? "border-light" : "border-transparent"
                }`}
                onClick={() => setActiveLink(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden block mt-2">
            <Button label="Sign" styles="min-w-[100px] bg-white text-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
