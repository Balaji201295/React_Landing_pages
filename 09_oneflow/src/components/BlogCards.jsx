import React from "react";

const BlogCards = ({
  type,
  title,
  imgUrl,
  category,
  readingTime,
  bgColor,
  textColor,
}) => (
  <article
    className="rounded-lg p-4 sm:p-6"
    style={{ backgroundColor: bgColor, color: textColor }}
  >
    <img
      src={imgUrl}
      alt={title}
      className="w-full h-auto sm:w-[368px] sm:h-[207px] object-cover"
    />
    <div className="flex flex-col justify-start items-start mt-6">
      <p className="bg-[#B73D8B] text-[#F2DCE4] rounded-sm text-xs font-normal py-1 px-2 capitalize inline-block">
        {type}
      </p>
      <h3 className="text-xl sm:text-2xl font-normal font-roboto tracking-[0.4px] mt-4 mb-8 min-h-[120px]">
        {title}
      </h3>
      <p className="text-xs font-normal capitalize">
        {category} &nbsp;|&nbsp;{readingTime} mins read
      </p>
    </div>
  </article>
);

export default BlogCards;
