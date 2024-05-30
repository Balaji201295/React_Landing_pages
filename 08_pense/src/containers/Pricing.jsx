import React from "react";
import { plans } from "../constants";
import { FaCheck } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import styles from "../styles";
const Pricing = () => (
  <section
    id="pricing"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col`}
  >
    <h2 className={styles.heading}>Choose your flexible plan.</h2>
    <div className="flex flex-wrap justify-center items-center gap-6 mt-16 w-full">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-start gap-6 px-8 py-10 pricing__card rounded-xl bg-white min-w-full xs:min-w-[300px] max-w-[350px]"
        >
          <img src={plan.icon} alt={plan.title} />
          <h3 className="text-xl sm:text-2xl font-semibold text-dark">
            {plan.title}
          </h3>
          <ul className="flex flex-col justify-start items-start gap-2">
            {plan.benefits.map(({ point }, index) => (
              <li
                key={index}
                className="flex  justify-start items-center gap-2"
              >
                <FaCheck fontSize={14} color="#BDBDBD" />
                <span className="text-sm font-normal text-dark">{point}</span>
              </li>
            ))}
          </ul>
          <div>
            <p className="text-xl text-dark font-semibold">
              ${plan.price}
              <span className="text-sm text-light font-light">/year</span>
            </p>
            <p className="text-xs text-light font-normal">
              up to {plan.user} user + 1.99 per user
            </p>
          </div>
          <button
            type="button"
            className={`${styles.flexCenter} gap-2 text-base text-white font-normal py-2 px-4 bg-primary rounded-lg border border-primary transition-all duration-300 hover:text-primary hover:bg-white`}
          >
            <span>Get this</span> <MdArrowRightAlt />
          </button>
        </div>
      ))}
    </div>
  </section>
);
export default Pricing;
