import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import "./footer.css";
import { footerLinks } from "../../constants";
import { Footer_logo } from "../../assets";
const SocialMedia = () => (
  <>
    <li>
      <a href="#" target="_blank">
        <FiFacebook />
      </a>
    </li>
    <li>
      <a href="#" target="_blank">
        <FiInstagram />
      </a>
    </li>
    <li>
      <a href="#" target="_blank">
        <FiTwitter />
      </a>
    </li>
    <li>
      <a href="#" target="_blank">
        <FiLinkedin />
      </a>
    </li>
    <li>
      <a href="#" target="_blank">
        <FiYoutube />
      </a>
    </li>
  </>
);
const Footer = () => {
  return (
    <footer className="tech__footer section__padding">
      <div className="tech__footer-content">
        <img src={Footer_logo} alt="tech" width={66} height={66} />
        <p className="p__content">
          STORE - worldwide fashion store since 1978. We sell over 1000+ branded
          products on our web-site.
        </p>
      </div>
      <div className="tech__footer-links">
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="tech__footer-links_item">
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
      <div className="tech__footer-contact">
        <h3>ABOUT THE STORE</h3>
        <p className="p__content">
          STORE - worldwide fashion store since 1978. We sell over 1000+ branded
          products on our web-site.
        </p>
        <a href="#">www.company.com</a>
        <ul className="tech__footer-contact_icons">
          <SocialMedia />
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
