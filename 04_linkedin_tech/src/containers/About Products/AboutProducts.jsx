import React from "react";
import { SectionHeading } from "../../components";
import { Check, Image_2 } from "../../assets";
import "./aboutProducts.css";
const points = [
  {
    point: "There are many variations of passages of Lorem Ipsum",
  },
  {
    point:
      "There are many variations of passages of Lorem  Embarrassing middle of text.",
  },
  {
    point: "There are many variations of passages of Lorem Ipsum",
  },
  {
    point: "There are many variations of passages.",
  },
  {
    point: "There are many variations of passages.",
  },
];
const AboutProducts = () => (
  <div className="tech__about app__wrapper section__padding" id="about-product">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={Image_2} alt="Image" />
    </div>
    <div className="app__wrapper_info">
      <SectionHeading title="About For Products" subtitle="about Products" />
      <p className="p__content" style={{ margin: "3rem 0 1rem 0" }}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomized words which don't look even slightly have suffered
        believable.
      </p>
      <p className="p__content">
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
      </p>
      <ul className="tech__about-content">
        {points.map((item, index) => (
          <li key={index} className="flex__start">
            <img src={Check} alt="Check" width={18} height={18} />
            {item.point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default AboutProducts;
