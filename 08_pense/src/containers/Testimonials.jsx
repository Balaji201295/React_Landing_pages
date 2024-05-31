import React from "react";
import { feedback } from "../constants";
import styles from "../styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const baseColors = [
    "#FF7235",
    "#FFBE21",
    "#4756DF",
    "#3EC1F3",
    "#FF33A1",
    "#33FFA1",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="feedback" className={`${styles.paddingY} ${styles.marginY}`}>
      <h2 className={`${styles.heading} text-center`}>
        We have millions of <br className="sm:block hidden" /> best wishers
      </h2>
      <Slider {...settings}>
        {feedback.map((item, index) => {
          const { profileImg, profileName, position, content } = item;
          const borderColor = baseColors[index % baseColors.length];
          return (
            <div key={index} className="feedback-card-wrapper">
              <div
                className="p-6 rounded-xl feedback__card border border-t-8"
                style={{ borderTopColor: borderColor }}
              >
                <p className="text-base font-normal text-dark">{content}</p>
                <div className="flex justify-start items-center feedback__card-profile">
                  <img
                    src={profileImg}
                    alt={profileName}
                    className="w-[30px] h-[30px] object-contain"
                  />
                  <h3 className="text-base sm:text-lg font-bold text-dark">
                    {profileName},{" "}
                    <span className="text-sm font-normal text-light">
                      {position}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Testimonials;
