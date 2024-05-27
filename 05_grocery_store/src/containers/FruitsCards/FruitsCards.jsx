import React from "react";
import { fruitsCards } from "../../constants";
import { Button, Ratings } from "../../components";
import "./fruitsCards.css";

const FruitsCards = () => (
  <div
    className="grocery__fruitCards flex__center section__padding"
    id="fruits"
  >
    {fruitsCards.map((item, index) => {
      const { imgUrl, fruitName, ratings, price, content } = item;
      return (
        <div
          key={item.fruitName + index}
          className="grocery__fruitCards-item flex__center"
        >
          <img src={imgUrl} alt={fruitName} />
          <h3>{fruitName}</h3>
          <Ratings ratings={ratings} />
          <p className="fruit__price">${price}kg</p>
          <p className="p__content">{content}</p>
          <Button label="Add To Cart" />
        </div>
      );
    })}
  </div>
);
export default FruitsCards;
