import React from "react";
import { BsArrowRight } from "react-icons/bs";
const ArticleCard = ({ img, title, desc }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md text-start mx-auto">
      <img src={img} className="rounded-t-2xl" />

      <div className="p-5">
        <h3 className="font-bold text-xl md:text-2xl py-3">{title}</h3>
        <p className="text-gray-400 tracking-wide py-3">{desc}</p>

        <button className="bg-transparent mt-10 mb-5 px-6 py-3 text-primary font-bold border-primary border rounded-xl flex justify-center items-center gap-5 hover:bg-primary hover:text-white duration-300">
          Read More
          <BsArrowRight className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
