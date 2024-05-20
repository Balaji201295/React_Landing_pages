import React from "react";
import { steps } from "../../constants";
import "./stepsInfo.css";
const StepsInfo = () => (
  <ul className="qubly__steps flex__center">
    {steps.map((step, index) => (
      <li key={step + index} className="qubly__steps-item flex__center">
        <img src={step.icon} alt={step.title} />
        <h3>{step.title}</h3>
        <p className="p__content">{step.content}</p>
      </li>
    ))}
  </ul>
);
export default StepsInfo;
