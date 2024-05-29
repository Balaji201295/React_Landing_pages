import React from "react";
import { stats } from "../constants";
import styles from "../styles";
const Stats = () => (
  <ul className="list-none flex flex-wrap justify-start items-center gap-6 ss:gap-10 mt-16">
    {stats.map((item, index) => (
      <li key={index} className="flex flex-col justify-start items-start gap-2">
        <h4 className="text-xl ss:text-2xl text-dark font-semibold">
          {item.value}
        </h4>
        <p className={`${styles.paragraph}`}>{item.content}</p>
      </li>
    ))}
  </ul>
);
export default Stats;
