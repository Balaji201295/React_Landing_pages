import React, { useState } from "react";
import { navItems } from "../../constants";
import { Button } from "../../components";
import { Logo } from "../../assets";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = ({ activeLink, setActiveLink }) => (
  <>
    {navItems.map((item, index) => (
      <li key={item.title + index}>
        <a
          href={`#${item.link}`}
          className={activeLink === item.link ? "active" : ""}
          onClick={() => setActiveLink(item.link)}
        >
          {item.title}
        </a>
      </li>
    ))}
  </>
);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(navItems[0].link);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="grocery__navbar" id="home">
      <a href="/" className="grocery__navbar-logo">
        <img src={Logo} alt="Grocery" />
      </a>
      <ul className="grocery__navbar-links">
        <Menu activeLink={activeLink} setActiveLink={setActiveLink} />
      </ul>
      <div className="grocery__navbar-btn">
        <Button label="Sign Up" />
      </div>
      {/* responsive */}
      <div className="grocery__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#59BE29"
            fontSize={28}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#59BE29"
            fontSize={28}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="grocery__navbar-menu_container scale-up-center">
            <ul
              className="grocery__navbar-menu_container-links"
              onClick={() => setToggleMenu(false)}
            >
              <Menu activeLink={activeLink} setActiveLink={setActiveLink} />
            </ul>
            <div className="grocery__navbar-menu_container-btn">
              <Button label="Sign Up" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
