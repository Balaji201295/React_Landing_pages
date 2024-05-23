import React from "react";
import PropTypes from "prop-types";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./rating.css";
const Rating = ({ ratings }) => {
  const maxRating = 5;
  const fullStars = Math.floor(ratings);
  const halfStars = ratings % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (halfStars ? 1 : 0);

  Rating.prototype = {
    rating: PropTypes.number.isRequired,
  };
  return (
    <div className="tech__ratings">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} color="#C72535" />
      ))}
      {halfStars && <FaStarHalfAlt color="#C72535" />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={index} color="#C72535" />
      ))}
    </div>
  );
};
export default Rating;
