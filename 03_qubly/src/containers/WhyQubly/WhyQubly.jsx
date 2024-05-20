import React from "react";
import { StepsInfo, SubHeading } from "../../components";
import "./whyQubly.css";
import { Eye } from "../../assets";
const WhyQubly = () => (
  <article className="qubly__info section__padding flex__center" id="why-qubly">
    <SubHeading icon={Eye} text="Why Qubly" />
    <h2 className="h2__headtext">
      Get actionable insights from Big Data in 3 steps
    </h2>
    <p className="p__content" style={{ maxWidth: "672px" }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua.
    </p>
    <StepsInfo />
  </article>
);
export default WhyQubly;
