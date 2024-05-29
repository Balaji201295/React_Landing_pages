import React from "react";
import styles from "../styles";
const PeopleCards = ({ imgUrl, personName, age, content }) => (
  <article className="flex flex-col py-8 px-6 min-w-[260px] max-w-[280px] relative z-[5] overflow-hidden">
    <div className="absolute w-full h-[80%] bg-white left-0 bottom-0 -z-[1] rounded-lg" />
    <img
      src={imgUrl}
      alt={personName}
      className="w-[90px] h-[90px] object-contain"
    />
    <h4 className="text-lg ss:text-xl text-[#2B2B2B] font-medium pt-10">
      {personName}
    </h4>
    <p className="text-xs font-medium text-[#999] mt-2 mb-4">{age} years</p>
    <p className="text-sm text-dark font-normal">{content}</p>
  </article>
);
export default PeopleCards;
