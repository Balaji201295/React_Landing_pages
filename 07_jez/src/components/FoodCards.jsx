import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "../styles";
const FoodCards = ({ icon, title, content }) => (
  <article className="flex-1 flex flex-col justify-start items-start p-6 min-w-full ss:min-w-[300px] max-w-[360px] rounded-[50px] border border-solid border-light bg-white food-card transition-all duration-500 cursor-pointer">
    <img
      src={icon}
      alt={title}
      className="w-[100px] h-[100px] object-contain"
    />
    <h3 className="text-lg ss:text-xl font-semibold text-[#B2B2B] tracking-[-0.48px] pt-10">
      {title}
    </h3>
    <p className={`${styles.paragraph} min-h-[120px] mt-3`}>{content}</p>
    <a
      href="#"
      className="flex gap-2 items-center justify-start text-sm text-dark py-2 px-5 border border-solid border-primary rounded-[100px] transition-all hover:bg-primary hover:text-white
    "
    >
      <span>Learn More</span> <IoIosArrowRoundForward fontSize={24} />
    </a>
  </article>
);
export default FoodCards;
