import React from "react";
import { fruits, orders } from "../../constants";
import { SectionHeading } from "../../components";
import "./fruits.css";
const Fruits = () => (
  <article className="grocery__fruits section__padding" id="order-fruit">
    <div className="grocery__fruits-content">
      <SectionHeading
        title="Our purpose is to deliver fresh fruit to you"
        content="Fruits and vegetables contain many vitamins and minerals that are good for your health. These include vitamins"
      />
      <div className="grocery__fruits-points">
        {orders.map((item, index) => (
          <div key={index} className="grocery__fruits-item">
            <p>{index + 1}</p>
            <div className="grocery__fruits-item_content">
              <p>{item.title}</p>
              <div className="underline"></div>
              <h4 className="p__content">{item.content}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="grocery__fruits-container">
      {fruits.map((item, index) => (
        <div
          key={item.imgUrl + index}
          className="grocery__fruits-container_img"
        >
          <img src={item.imgUrl} alt="Fruit" />
        </div>
      ))}
    </div>
  </article>
);
export default Fruits;
