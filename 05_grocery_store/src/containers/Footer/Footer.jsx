import React from "react";
import { Logo, Fruit_11 } from "../../assets";
import { footerLinks, socialLinks } from "../../constants";
import "./footer.css";
const Footer = () => (
  <div className="grocery__footer section__padding">
    <div className="grocery__footer-content">
      <img src={Logo} alt="Logo" />
      <p className="p__content">
        Lorem ipsum dolor sit amet, consectetur adipin elit. A eleifend
        tristique condimentum vestibulum, ornare tortor viverra.
      </p>
    </div>
    <div className="grocery__footer-links">
      {footerLinks.map((footerLink, index) => (
        <div key={index} className="grocery__footer-links_item">
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
    <div className="grocery__footer-social">
      {socialLinks.map((socialLink, index) => (
        <div key={index} className="grocery__footer-social_item">
          <h3>{socialLink.title}</h3>
          <div className="social__links">
            {socialLink.links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a key={link.icon + index} href={link.href} target="_blank">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
    <div className="grocery__footer-img">
      <img src={Fruit_11} alt="Fruit" />
    </div>
  </div>
);
export default Footer;
