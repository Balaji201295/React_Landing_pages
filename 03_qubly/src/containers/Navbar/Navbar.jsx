import React from "react";
import { navItems } from "../../constants";
import { Logo } from "../../assets";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="qubly__navbar">
      {/* logo */}
      <a href="/" className="qubly__navbar-logo">
        <img src={Logo} alt="Qubly" width={48} height={48} />
      </a>
      {/* links */}
      <ul className="qubly__navbar-links">
        {navItems.map((item, index) => (
          <li key={item + index}>
            <a href={`#${item.href}`}>{item.label}</a>
          </li>
        ))}
      </ul>
      {/* button */}
      <div className="qubly__navbar-btn">
        <button type="button">Start free trial</button>
      </div>
      {/* responsive navbar */}
      <div className="qubly__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#722ED1"
            fontSize={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#722ED1"
            fontSize={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="qubly__navbar-menu_container scale-up-center">
            <div
              className="qubly__navbar-menu_container-links"
              onClick={() => setToggleMenu(false)}
            >
              {navItems.map((item, index) => (
                <li key={item + index}>
                  <a href={`#${item.href}`}>{item.label}</a>
                </li>
              ))}
            </div>
            <div className="qubly__navbar-menu_btn">
              <button type="button">Start free trial</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
