import React, { useState } from "react";
import { tabItems } from "../constants";
import styles from "../styles";
import { FaCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "../components";
const Collaborate = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0].title);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleDropdownChange = (e) => {
    setActiveTab(e.target.value);
    setIsDropdownOpen(false);
  };

  return (
    <section className={`bg-primary ${styles.boxWidth} ${styles.padding}`}>
      <div className="w-full bg-[#D3E8F4] flex flex-col xs:flex-row md:flex-col gap-8 rounded-lg pt-8 xs:pt-0">
        {/* dropdown tab for mobile */}
        <div className="xs:hidden w-full max-w-[220px] mx-auto relative z-0">
          <select
            value={activeTab}
            onChange={handleDropdownChange}
            className="w-full text-base font-normal text-primary cursor-pointer capitalize py-3 px-4 appearance-none outline-none border-2 border-primary bg-transparent rounded-md"
          >
            {tabItems.map((tab) => (
              <option key={tab.title} value={tab.title}>
                {tab.title}
              </option>
            ))}
          </select>
          <MdKeyboardArrowDown
            fontSize={24}
            color="#013A4C"
            className={`absolute right-3 top-3 ${
              isDropdownOpen ? "rotate-180" : ""
            } transition-all`}
          />
        </div>
        {/* horizontal tab for tablet */}
        <div className="hidden xs:flex md:hidden flex-col pl-6">
          {tabItems.map((tab) => (
            <button
              key={tab.title}
              type="button"
              className={`flex-1 flex flex-col justify-center items-center text-sm font-normal text-center text-primary border-r-2 cursor-pointer pr-6 transition-all duration-300 ease-in-out ${
                activeTab === tab.title ? "border-primary" : "border-[#94B4C2]"
              }`}
              onClick={() => setActiveTab(tab.title)}
            >
              <img
                src={tab.icon}
                alt={tab.title}
                className="w-[24px] h-[24px] object-contain"
              />
              <span>{tab.title}</span>
            </button>
          ))}
        </div>
        {/* horizontal tab for laptop */}
        <div className="hidden md:flex pt-8">
          {tabItems.map((tab) => (
            <button
              key={tab.title}
              type="button"
              className={`flex-1 flex flex-col justify-center items-center text-sm font-normal text-center text-primary border-b-2 border-[#94B4C2] cursor-pointer pb-6 relative `}
              onClick={() => setActiveTab(tab.title)}
            >
              <img
                src={tab.icon}
                alt={tab.title}
                className="w-[24px] h-[24px] object-contain"
              />
              <span>{tab.title}</span>
              {activeTab === tab.title && (
                <span
                  className="absolute -bottom-[2px] left-0 h-[2px] bg-primary"
                  style={{
                    width: "calc(100% - 2rem)",
                    animation: "tab-border-move 0.3s ease",
                  }}
                ></span>
              )}
            </button>
          ))}
        </div>
        <div className={`w-full px-6 py-8`}>
          {tabItems.map(
            (tab) =>
              activeTab === tab.title && (
                <article
                  key={tab.title}
                  className={`flex flex-col md:flex-row justify-center items-start gap-8`}
                >
                  <div className="flex-1 flex flex-col justify-start items-start gap-6">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary capitalize tracking-[0.7px]">
                      {tab.heading}
                    </h3>
                    <p className="text-lg font-normal text-primary max-w-[400px]">
                      {tab.content}
                    </p>
                    <ul className="list-none flex flex-col gap-2">
                      {tab.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex justify-start items-center gap-2"
                        >
                          <FaCheckCircle
                            fontSize={16}
                            className="text-primary"
                          />
                          <span className="text-sm text-primary">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      label="Learn more"
                      styles="bg-transparent text-primary border-primary hover:bg-primary hover:text-[#D3E8F4]"
                    />
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    <img
                      src={tab.imgUrl}
                      alt={tab.heading}
                      className="w-full max-w-[420px] h-full max-h-[420px] object-contain"
                    />
                  </div>
                </article>
              )
          )}
        </div>
      </div>
    </section>
  );
};
export default Collaborate;
