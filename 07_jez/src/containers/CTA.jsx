import React from "react";
import styles from "../styles";

const CTA = () => (
  <section
    id="contact"
    className={`${styles.flexCenter} ${styles.marginY} flex-col p-4 ss:p-8 sm:p-12 cta__bg rounded-[50px] text-center relative z-10`}
  >
    <p className="text-lg font-medium text-secondary mb-3">Our Subscribe</p>
    <h2 className={styles.heading}>
      Subscribe To Get The Latest <br className="sm:block hidden" /> Promo from
      Jez Salad
    </h2>
    <p className={`${styles.paragraph} max-w-[500px] text-dark/50`}>
      We recommend you subscribe to our promo program. Drop your email below to
      get daily updates about us.
    </p>
    <form className="w-full max-w-[700px] flex flex-col ss:flex-row justify-between items-center gap-4 sm:bg-white sm:p-[10px] my-6 sm:my-12 cta__form rounded-[100px]">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        className="w-full h-[48px] px-4 outline-none text-base text-dark/70 rounded-[100px]"
      />
      <button
        type="submit"
        className="bg-primary text-white py-3 px-4 rounded-[100px]"
      >
        Subscribe
      </button>
    </form>
  </section>
);

export default CTA;
