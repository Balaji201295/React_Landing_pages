import React from "react";
import { products } from "../constants";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "../styles";
const Products = () => (
  <section
    className={`${styles.paddingY} ${styles.flexCenter} flex-col w-full`}
  >
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
      <h1 className={`${styles.heading} flex-1`}>
        The Product we <br className="sm:block hidden" /> work with.
      </h1>
      <p className={`${styles.paragraph} flex-[0.5] text-center sm:text-left`}>
        Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan
        nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-wrap gap-6 mt-16`}>
      {products.map((product, index) => {
        const { icon, title, content } = product;
        return (
          <div
            key={index}
            className="flex-1 flex flex-col justify-center items-center text-center gap-4 ss:py-20 py-16 ss:px-12 px-8 rounded-xl bg-white min-w-full ss:min-w-[300px] max-w-[300px] product__card cursor-pointer relative overflow-hidden"
          >
            <figure className="p-5 bg-[#FFBD74]/5 rounded-full">
              <img src={icon} alt={title} className="w-[24px] h-[24px]" />
            </figure>
            <h3 className="text-xl sm:text-2xl text-dark font-medium">
              {title}
            </h3>
            <p className="text-sm text-light font-normal">{content}</p>
            <a href="#" className="card__link">
              <FaLongArrowAltRight />
            </a>
          </div>
        );
      })}
    </div>
  </section>
);
export default Products;
