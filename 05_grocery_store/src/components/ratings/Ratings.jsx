import React from "react";
import ProtoTypes from "prop-types";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./ratings.css";
const Ratings = ({ ratings }) => {
  const maxRating = 5;
  const fullStars = Math.floor(ratings);
  const halfStars = ratings % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (halfStars ? 1 : 0);

  Ratings.ProtoTypes = {
    ratings: ProtoTypes.number.isRequired,
  };
  return (
    <div className="grocery__ratings">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} color="#F0DB19" />
      ))}
      {halfStars && <FaStarHalfAlt color="#F0DB19" />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={index} color="#F0DB19" />
      ))}
    </div>
  );
};
export default Ratings;
