import React from "react";
import { Logo } from "../assets";
import { footerLinks, contactDetails, socialMedia } from "../constants";
import styles from "../styles";
const Footer = () => (
  <footer
    className={`w-full ${styles.flexStart} flex-wrap gap-10 ${styles.paddingY}`}
  >
    <div className="flex-1 flex flex-col justify-start items-start gap-6  min-w-[220px]">
      <img src={Logo} alt="JEZ SALAD" className="w-[124px] h-[28px]" />
      <p className={`${styles.paragraph} ss:max-w-[212px]`}>
        Jez Salad is the pioneer of healthy fruit salad with high nutrition.
      </p>
      <p className="text-sm text-[#2B2B2B] font-normal">
        Copyright <span className="font-bold">&copy;</span> Jez Salad
      </p>
    </div>
    <ul className="flex-1 flex flex-col justify-center items-start gap-6  min-w-[220px]">
      <h3 className="text-base text-primary font-semibold">Feature</h3>
      {footerLinks.map(({ name, link }, index) => (
        <li
          key={index}
          className="text-sm text-dark flex justify-start items-start gap-4"
        >
          <a href={`#${link}`}>{name}</a>
        </li>
      ))}
    </ul>
    <ul className="flex-1 flex flex-col justify-center items-start gap-6  min-w-[220px]">
      <h3 className="text-base text-primary font-semibold">Get in Touch</h3>
      {contactDetails.map((contact, index) => {
        const Icon = contact.icon;
        return (
          <li
            key={index}
            className="text-sm text-dark flex justify-start items-start gap-4"
          >
            <Icon className="text-primary text-lg" />
            <p>{contact.text}</p>
          </li>
        );
      })}
    </ul>
    <div className="flex-1 flex flex-col justify-start items-start gap-6 min-w-[220px]">
      <ul className="list-none flex justify-start items-center gap-2">
        {socialMedia.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.id}
              className="text-xl text-secondary hover:text-[#2b2b2b] transition-all"
            >
              <a href={item.link} target="_blank">
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
      <p className={`${styles.paragraph} mt-4`}>Follow our social media.</p>
    </div>
  </footer>
);
export default Footer;
