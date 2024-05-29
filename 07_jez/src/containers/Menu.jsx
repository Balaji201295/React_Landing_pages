import React from "react";
import { menu } from "../constants";
import styles from "../styles";
const Menu = () => (
  <section
    id="menu"
    className={`${styles.paddingY} ${styles.flexCenter} text-center flex-col`}
  >
    <div className="flex flex-col justify-center items-center text-center">
      <p className="text-lg font-medium tracking-[-0.4px] text-secondary mb-3">
        MENU YANG MEMBUATMU JATUH CINTA
      </p>
      <h2 className={styles.heading}>
        ENJOY THE BEST MENU AND GET <br className="sm:block hidden" />{" "}
        <span className="text-secondary">DISCOUNTS </span>
        AVAILABLE
      </h2>
    </div>
    <div className="w-full flex flex-wrap justify-center items-center gap-10 mt-16">
      {menu.map(({ imgUrl, menuName, price }, index) => (
        <article
          key={index}
          className=" ss:min-w-[280px] max-w-[300px] rounded-[50px] relative z-[5] cursor-pointer overflow-hidden menu__card"
        >
          <img
            src={imgUrl}
            alt={menuName}
            className="w-full h-full object-contain"
          />
          <div className="flex flex-col justify-start items-start absolute left-0 bottom-0 menu__card-content">
            <h4 className="text-xl font-medium text-white">{menuName}</h4>
            <p className="text-2xl font-bold text-white">$&nbsp;{price}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
export default Menu;
