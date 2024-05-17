import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Menu = () => (
  <>
    <li className="p__opensans">
      <a href="#home">Home</a>
    </li>
    <li className="p__opensans">
      <a href="#about">About</a>
    </li>
    <li className="p__opensans">
      <a href="#menu">Menu</a>
    </li>
    <li className="p__opensans">
      <a href="#awards">Awards</a>
    </li>
    <li className="p__opensans">
      <a href="#contact">Contact</a>
    </li>
  </>
);

const Login = () => (
  <>
    <a href="#login" className="p__opensans">
      Login / Register
    </a>
    <div />
    <a href="/" className="p__opensans">
      Book Table
    </a>
  </>
);

// BEM = Block, Element, Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <a href="/" className="app__navbar-logo">
        <img src={images.gericht} alt="Logo" />
      </a>
      <ul className="app__navbar-links">
        <Menu />
      </ul>
      <div className="app__navbar-login">
        <Login />
      </div>
      {/* responsive navbar */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={24}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={24}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul
              className="app__navbar-smallscreen_links"
              onClick={() => setToggleMenu(false)}
            >
              <Menu />
            </ul>
            <div className="app__navbar-smallscreen_login">
              <Login />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
