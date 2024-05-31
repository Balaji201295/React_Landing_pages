import React from "react";
import { Logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../styles";

const Footer = () => (
  <footer
    id="contact"
    className={`${styles.flexCenter} ${styles.marginY} flex-col w-full`}
  >
    <div className="w-full flex flex-col sm:flex-row flex-wrap justify-between items-start gap-12 py-6">
      <div className="flex-1 flex flex-col justify-start items-start gap-6 xs:min-w-[280px] ss:max-w-[350px]">
        <a
          href="/"
          className="flex justify-start items-center gap-3 uppercase text-xl font-semibold text-dark"
        >
          <img src={Logo} alt="PENES" />
          <span>penes</span>
        </a>
        <p className="text-sm font-normal text-light">
          Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
          accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget
          ut.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-start sm:justify-around items-start flex-wrap md:mt-0 mt-10 xs:min-w-[280px] ss:max-w-[350px]">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h3 className="font-poppins font-semibold text-xl uppercase text-dark">
              {footerLink.title}
            </h3>
            <ul className="list-none mt-6">
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-medium text-base text-dark hover:text-primary cursor-pointer mb-4"
                >
                  <a href={`#${link.id}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-start items-start gap-6 xs:min-w-[280px] ss:max-w-[350px]">
        <h3 className="font-poppins font-semibold text-xl uppercase text-dark">
          Newsletter
        </h3>
        <p className="text-sm font-normal text-light">
          Over 25000 people have subscribed
        </p>
        <form className="flex justify-start items-center w-full max-w-[350px] p-1 rounded-lg border border-light">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="w-full outline-none px-2 text-sm text-dark/80"
          />
          <button
            type="submit"
            className="bg-primary text-white text-sm font-semibold py-2 px-4 uppercase rounded-lg"
          >
            subscribe
          </button>
        </form>
        <p className="text-xs text-light font-normal">
          <span className="text-primary">*</span>We don’t sell your email and
          spam
        </p>
      </div>
    </div>
    <div className="w-full flex justify-between items-center gap-6 py-6 border-t border-[#BDBDBD]/20">
      <div className="flex justify-start items-center gap-6">
        <a
          href="#"
          className="text-base font-normal text-dark hover:text-primary transition-all duration-300"
        >
          Privacy & Terms
        </a>
        <a
          href="#"
          className="text-base font-normal text-dark hover:text-primary transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
      <p className="text-base font-normal text-dark">
        Copyright <span className="text-primary font-bold">&copy;</span> 2024
        xpence
      </p>
      <div className="flex justify-end items-center gap-4">
        {socialMedia.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                fontSize={20}
                className="text-dark hover:text-primary transition-all duration-300"
              />
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);

export default Footer;
