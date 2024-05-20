import React from "react";
import { Brand } from "../../components";
import { Profile } from "../../assets";
import "./testimonial.css";
import { brands } from "../../constants";
const Testimonial = () => (
  <article className="qubly__testimonial flex__center section__padding">
    <div className="qubly__testimonial-profile flex__center">
      <p>
        "What I love about Qubly is the easy way we can collaborate even if
        there is a lot of people involved in the process"
      </p>
      <img src={Profile} alt="Guillaume Cabane" width={80} height={80} />
      <h3>
        Guillaume Cabane <br />
        CTO @ BigSpring
      </h3>
    </div>
    <div className="qubly__testimonial-brands">
      {brands.slice(0, 5).map((brand, index) => (
        <Brand key={brand.imgUrl + index} brand={brand} />
      ))}
    </div>
  </article>
);
export default Testimonial;
