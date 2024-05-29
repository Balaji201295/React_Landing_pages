import React from "react";
import { healthyFood } from "../constants";
import { FoodCards } from "../components";
import styles from "../styles";
const HealthyFood = () => (
  <section className={`${styles.paddingY}`}>
    <div className="flex flex-col md:flex-row md:justify-between justify-center items-center text-center md:text-left gap-6 md:gap-0">
      <h2 className={`${styles.heading}`}>
        WHY CHOOSE US <br className="sm:block hidden" />
        FOR
        <span className="text-secondary"> YOUR HEALTHY FOOD</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[450px]`}>
        We continue to consistently choose and maintain the quality of the fruit
        served, so that it remains fresh and nutritious when you eat it.
      </p>
    </div>
    <div className={`${styles.flexCenter} w-full flex-wrap gap-8 mt-16`}>
      {healthyFood.map((food, index) => (
        <FoodCards key={index} {...food} />
      ))}
    </div>
  </section>
);
export default HealthyFood;
