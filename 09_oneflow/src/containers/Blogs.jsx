import React from "react";
import styles, { layout } from "../styles";
import { BlogCards, Button } from "../components";
import { blogItems } from "../constants";

const Blogs = () => {
  const bgColors = ["#013A4C", "#0F5987", "#F2DCE4"];

  const getTextColor = (bgColor) =>
    bgColor === "#013A4C" || bgColor === "#0F5987" ? "#FFFFFF" : "#013A4C";

  return (
    <section
      id="blogs"
      className={`${styles.boxWidth} ${styles.padding} w-full`}
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-bold text-primary">
          And for our next trick…
        </h2>
        <Button label="visit our blogs" />
      </div>
      <div className="flex flex-col justify-center items-start md:items-center gap-6">
        <div className="w-full">
          {blogItems.slice(0, 1).map((item, index) => (
            <article
              key={index}
              className={`${layout.section} bg-[#F2DCE4] rounded-lg p-4 sm:p-6 md:p-8`}
            >
              <div className={`${layout.sectionImgReverse}`}>
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className={`${layout.sectionInfo}`}>
                <p className="bg-[#B73D8B] text-[#F2DCE4] rounded-sm text-xs font-normal py-1 px-2 capitalize">
                  {item.type}
                </p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal font-roboto tracking-[0.4px] text-primary my-12">
                  {item.title}
                </h3>
                <p className="text-xs text-primary font-normal capitalize">
                  {item.category} &nbsp;|&nbsp;{item.readingTime} mins read
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-6">
          {blogItems.slice(1).map((item, index) => {
            const bgColor = bgColors[index % bgColors.length];
            return (
              <BlogCards
                key={index}
                {...item}
                bgColor={bgColor}
                textColor={getTextColor(bgColor)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
