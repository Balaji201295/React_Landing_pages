import React from "react";
import { Arrow, Facebook, Instagram, Logo, Twitter } from "../../assets";
import "./footer.css";
import { footerLinks } from "../../constants";
const SocialMedia = () => (
  <>
    <li>
      <a href="#" target="_blank">
        <img src={Facebook} alt="Facebook" />
      </a>
    </li>
    <li>
      <a href="#" target="_blank">
        <img src={Twitter} alt="Twitter" />
      </a>
    </li>
    <li>
      <a href="#" target="_blank">
        <img src={Instagram} alt="Instagram" />
      </a>
    </li>
  </>
);
const Footer = () => {
  return (
    <footer className="qubly__footer section__padding">
      <div className="qubly__footer-content">
        <img src={Logo} alt="Qubly" width={80} height={80} />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat ut wisi enim ad minim
        </p>
        <ul className="qubly__footer-content_icons">
          <SocialMedia />
        </ul>
      </div>
      <div className="qubly__footer-links">
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="qubly__footer-links_item">
            <h3>{footerLink.title}</h3>
            <ul>
              {footerLink.links.map((link, index) => (
                <li key={link.label + index}>
                  <a href={`#${link.href}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="qubly__footer-input">
        <h3>Newsletter</h3>
        <form>
          <input type="email" placeholder="Email" />
          <button type="submit">
            <img src={Arrow} alt="Send" width={19} height={19} />
          </button>
        </form>
      </div>
    </footer>
  );
};
export default Footer;
