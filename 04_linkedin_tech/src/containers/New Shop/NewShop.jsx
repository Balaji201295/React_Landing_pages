import React from "react";
import { SectionHeading, ShopImages } from "../../components";
import "./newShop.css";
const NewShop = () => (
  <article className="tech__shop flex__center section__padding" id="shop">
    <SectionHeading
      title="An enormous storehouse of facts"
      subtitle="New shop"
    />
    <p className="p__content">
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested.
    </p>

    <ShopImages />
  </article>
);
export default NewShop;
