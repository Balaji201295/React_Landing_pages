import React from "react";
import "./productFilter.css";
const ProductFilter = ({
  allCategories,
  selectedCategory,
  onCategoryClick,
}) => (
  <div className="tech__filter flex__center">
    {allCategories.map((category) => (
      <button
        key={category}
        type="button"
        onClick={() => onCategoryClick(category)}
        className={`tech__filter-btn ${
          selectedCategory === category ? "selected-category" : ""
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);
export default ProductFilter;
