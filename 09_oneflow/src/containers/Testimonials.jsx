import React from "react";
import styles from "../styles";
import { feedback } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section
      id="feedback"
      className={`feedback ${styles.boxWidth} ${styles.padding}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto text-primary tracking-[0.4px] mb-12">
        Don’t just take our word for it…
      </h2>
      <Slider {...settings}>
        {feedback.map((item, index) => {
          const { content, profileImg, profileName, position, location } = item;
          return (
            <article
              key={index}
              className="min-h-[400px] rounded-lg border border-[#D6DFE2] bg-white p-4 lg:p-6 feedback__card"
            >
              <div>
                <p className="text-sm sm:text-base font-normal text-primary mb-4">
                  {content}
                </p>
                <a href="#" className="text-sm font-normal text-[#89285B]">
                  Read full story
                </a>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img
                  src={profileImg}
                  alt={profileName}
                  className="w-[48px] h-[48px] object-contain"
                />
                <div className="text-xs font-normal text-primary">
                  <h4>{profileName}</h4>
                  <p>{position}</p>
                  <p>{location}</p>
                </div>
              </div>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};
export default Testimonials;
