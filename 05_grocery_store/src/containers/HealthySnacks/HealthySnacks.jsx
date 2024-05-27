import React from "react";
import "./healthySnacks.css";
import { Image_2, Leaf_2 } from "../../assets";
import { SectionHeading, Stats } from "../../components";
const HealthySnacks = () => (
  <article
    className="grocery__snacks app__wrapper  section__padding"
    id="healthy-snack"
  >
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={Image_2} alt="Image" />
    </div>
    <div className="app__wrapper_info">
      <SectionHeading
        title="Eat a banana for a healthy snack"
        titleImg={Leaf_2}
        content="You should eat at least five serves of vegetables and two serves of fruit each day. Choose different colors and varieties."
      />
      <Stats />
    </div>
  </article>
);
export default HealthySnacks;
