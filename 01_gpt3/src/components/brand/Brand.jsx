import React from "react";
import { Google, Atlassian, Dropbox, Shopify, Slack } from "../../assets";
import "./brand.css";
const Brand = () => (
  <article className="gpt3__brand section__padding">
    <div>
      <img src={Google} alt="Google" />
    </div>
    <div>
      <img src={Slack} alt="Slack" />
    </div>
    <div>
      <img src={Atlassian} alt="Atlassian" />
    </div>
    <div>
      <img src={Dropbox} alt="Dropbox" />
    </div>
    <div>
      <img src={Shopify} alt="Shopify" />
    </div>
  </article>
);
export default Brand;
