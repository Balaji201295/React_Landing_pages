import React, { useState } from "react";
import { Logo } from "../../assets";
import { navItems } from "../../constants";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const NavbarDropdown = ({ item, index, dropdownOpen, toggleDropdown }) => (
  <li
    className="tech__navbar-links_item"
    onMouseEnter={() => item.submenu && toggleDropdown(index)}
    onMouseLeave={() => item.submenu && toggleDropdown(null)}
  >
    <a href={`#${item.link || ""}`}>
      {item.title}
      {item.submenu && (
        <TiArrowSortedDown
          className={`arrow-icon ${
            dropdownOpen === index ? "rotate" : "no-rotate"
          }`}
        />
      )}
    </a>
    {item.submenu && (
      <ul className={`dropdown-menu ${dropdownOpen === index ? "show" : ""}`}>
        {item.submenu.map((subItem, subIndex) => (
          <li key={subIndex}>
            <a href={`#${subItem.link}`}>{subItem.title}</a>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const NavbarLinks = ({ dropdownOpen, toggleDropdown }) => (
  <ul className="tech__navbar-links">
    {navItems.map((item, index) => (
      <NavbarDropdown
        key={index}
        item={item}
        index={index}
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
      />
    ))}
  </ul>
);

const NavbarIcons = () => (
  <>
    <li>
      <FiSearch color="#030D15" />
    </li>
    <li>
      <FiShoppingCart color="#030D15" />
      <span>0</span>
    </li>
    <li>
      <FaRegUser color="#030D15" className="user-icon" />
    </li>
  </>
);

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [toggleOpen, setToggleOpen] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownOpen(index === dropdownOpen ? null : index);
  };

  return (
    <nav className="tech__navbar">
      {/* logo */}
      <a href="/" className="tech__navbar-logo">
        <img src={Logo} alt="LinkedInTech" />
      </a>
      {/* links */}
      <NavbarLinks
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
      />
      {/* icons */}
      <ul className="tech__navbar-icons">
        <NavbarIcons />
      </ul>
      {/* responsive navbar */}
      <div className="tech__navbar-smallscreen">
        <RiMenu3Line
          color="#C72535"
          fontSize={24}
          onClick={() => setToggleOpen(true)}
        />
        {toggleOpen && (
          <div className="tech__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiCloseLine
              fontSize={24}
              className="overlay__close"
              onClick={() => setToggleOpen(false)}
            />
            <ul
              className="tech__navbar-smallscreen_links"
              onClick={() => setToggleOpen(false)}
            >
              {navItems.map((item, index) => (
                <NavbarDropdown
                  key={index}
                  item={item}
                  index={index}
                  dropdownOpen={dropdownOpen}
                  toggleDropdown={toggleDropdown}
                />
              ))}
            </ul>
            <ul className="tech__navbar-smallscreen_icons">
              <NavbarIcons />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
