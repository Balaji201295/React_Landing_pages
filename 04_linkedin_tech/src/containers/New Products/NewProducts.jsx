import React, { useState } from "react";
import { ProductFilter, SectionHeading, ProductItems } from "../../components";
import { products } from "../../constants";
import "./newProducts.css";

function capitalizeFirstLetters(sentence) {
  if (!sentence) {
    return "";
  }
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const allCategories = [
  ...new Set(
    products.map((product) => capitalizeFirstLetters(product.category))
  ),
];
// console.log("Categories:", allCategories);
const NewProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Recent Arrival");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterProducts = products.filter(
    (product) => capitalizeFirstLetters(product.category) === selectedCategory
  );

  return (
    <article
      className="tech__newProducts flex__center section__padding"
      id="new-product"
    >
      <div className="tech__newProducts-heading">
        <SectionHeading title="Popular Products" subtitle="New Products" />
        <ProductFilter
          allCategories={allCategories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
        <section className="tech__newProducts-items">
          {filterProducts.map((product, index) => {
            return <ProductItems key={index} product={product} />;
          })}
        </section>
      </div>
    </article>
  );
};
export default NewProducts;
