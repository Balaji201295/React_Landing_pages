https://www.figma.com/design/v7SIrwaJfX8NoURGzuYNxh/Fruit-Salad-Health-Food-(Community)-(Copy)?node-id=1-941&m=dev

import React, { useRef } from "react";
import { people } from "../constants";
import { PeopleCards } from "../components";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import styles from "../styles";
const AboutUs = () => {
const scrollRef = useRef();

const scroll = (direction) => {
const { current } = scrollRef;
if (direction === "left") {
current.scrollLeft -= 284;
console.log("left button clicked");
} else {
current.scrollLeft += 284;
console.log("right button clicked");
}
};
return (
<section
className={`${styles.paddingY} flex flex-col md:flex-row justify-between items-start gap-10 w-full sm:pl-16 px-6 sm:px-0 bg-light`} >
<div className="flex-[.5] flex flex-col justify-start items-start w-full ss:min-w-[415px]">
<h2 className={`${styles.heading}`}>
What Are People <br className="sm:block hidden" />
Saying <span className="text-secondary">About Us</span>
</h2>
<p className={`${styles.paragraph} max-w-[400px] mt-6`}>
We are very happy if you are satisfied with our service and products,
let's read pure reviews from customers who bought our products.
</p>

        <div className="flex justify-start items-start gap-5 mt-16">
          <div
            className="p-2 rounded-xl bg-secondary cursor-pointer"
            onClick={() => scroll("left")}
          >
            <BsArrowLeftShort className="text-2xl text-white" />
          </div>
          <div
            className="p-2 rounded-xl bg-secondary cursor-pointer"
            onClick={() => scroll("right")}
          >
            <BsArrowRightShort className="text-2xl text-white" />
          </div>
        </div>
      </div>
      <div
        className="w-full flex-1 flex justify-start items-start gap-6 people-card"
        ref={scrollRef}
      >
        {people.map((person, index) => (
          <PeopleCards key={index} index={index} {...person} />
        ))}
      </div>
    </section>

);
};
export default AboutUs;
