import React from "react";
import { Logo } from "../assets";
import { Button } from "../components";
import { footerLinks, footerMenu, contentLinks } from "../constants";
import styles from "../styles";
import { FaGlobeAfrica } from "react-icons/fa";
const Footer = () => (
  <footer
    id="contact"
    className={`bg-primary ${styles.boxWidth} flex-col ${styles.padding}`}
  >
    {/* links */}
    <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 sm:gap-8 mb-12">
      {/* footerLogo */}
      <div className="flex flex-col justify-start items-start min-w-[200px]">
        <img
          src={Logo}
          alt="OneFLow"
          className="w-[140px] h-[31px] object-contain"
        />
        <address className="text-sm font-normal text-white mt-16">
          Headquarters: <br /> Hudiksvallsgatan 8 <br />
          113 30 Stockholm, Sweden <br />
          +46 8 517 297 70
        </address>
      </div>
      {/* footerLinks */}
      <div className="flex-1 w-full flex flex-wrap justify-start md:justify-around items-start gap-6">
        {footerLinks.map((footerLink, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start min-w-[150px]"
          >
            <h3 className="text-base font-normal text-white mb-6">
              {footerLink.title}
            </h3>
            <ul className="flex flex-col justify-start items-start gap-3">
              {footerLink.links.map(({ id, name }, index) => (
                <li key={index} className="text-sm font-normal text-[#99B0B7]">
                  <a href={`#${id}`}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* footerMenu */}
      <ul className="flex flex-col justify-start items-start gap-3 min-w-[150px]">
        {footerMenu.map(({ id, title }) => (
          <li key={id} className="text-sm sm:text-base font-normal text-white">
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
    {/* content */}
    <div className="flex flex-col sm:flex-row justify-start items-center gap-12 border-y border-[#99B0B7]/20 py-12">
      <div className="flex flex-col justify-start items-center sm:items-start gap-6 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-roboto font-bold text-white">
          Get in the flow
        </h3>
        <p className="text-sm font-normal text-white max-w-[350px]">
          Send, track and sign your contracts free for the rest of your life. No
          trickery.
        </p>
      </div>
      <Button
        label="Get Oneflow free"
        styles="text-primary bg-yellow border-yellow"
      />
    </div>
    {/* social media */}
    <div className="flex justify-center md:justify-start items-center gap-8 py-6">
      <ul className="flex justify-start items-center gap-8">
        {contentLinks.map(({ id, title }, index) => (
          <li
            key={index}
            className="text-sm text-[#99B0B7] font-normal capitalize"
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:block ml-10">
        <FaGlobeAfrica fontSize={24} color="#000" className="cursor-pointer" />
      </div>
    </div>
  </footer>
);
export default Footer;
