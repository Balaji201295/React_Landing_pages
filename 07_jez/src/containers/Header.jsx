import React from "react";
import { Banner_BG_1, Banner_BG_2, Image_1 } from "../assets";
import { Button, Stats } from "../components";
import styles, { layout } from "../styles";
const Header = () => (
  <header
    id="home"
    className={`${styles.paddingY} ${layout.section} relative z-[5]`}
  >
    <div className="absolute -right-8 sm:-right-20 -top-24 -z-10">
      <img
        src={Banner_BG_1}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute w-max h-[100%] -right-8 sm:-right-20 -top-24 -z-10">
      <img
        src={Banner_BG_2}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
    <div className={layout.sectionInfo}>
      <p className="text-sm text-secondary font-semibold py-2 px-6 bg-light rounded-[100px] mb-6">
        #1 Best Healthy Salad
      </p>
      <h1 className="text-[40px] ss:text-[48px] sm:text-[60px] leading-[48px] ss:leading-[60px] sm:leading-[72px] font-bold tracking-[1.44px] text-dark">
        <span className="text-secondary">Skip</span> The Diet, Just Eat Healthy
        With Jez Salad
      </h1>
      <p className={`${styles.paragraph} max-w-[496px] my-6`}>
        Imagine you don't need a diet because we provide healthy and delicious
        food for you!
      </p>
      <Button label="Order Food" />
      <Stats />
    </div>
    <div className={layout.sectionImg}>
      <img
        src={Image_1}
        alt="JEZ SALAD"
        className="w-full h-full object-contain"
      />
    </div>
  </header>
);
export default Header;
