import React from "react";
import { stats } from "../../constants";
import "./stats.css";
const Stats = () => (
  <section className="grocery__stats">
    {stats.map((item, index) => (
      <div key={index} className="grocery__stats-item">
        <p>{index + 1}</p>
        <div className="grocery__stats-item_content">
          <p>{item.value}</p>
          <div className="underline"></div>
          <h4 className="p__content">{item.content}</h4>
        </div>
      </div>
    ))}
  </section>
);
export default Stats;
