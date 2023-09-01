import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <div
      id="articles"
      className="w-full mx-auto py-20 md:px-20 px-14 max-w-[1440px] bg-white text-center"
    >
      <h1 className="text-2xl md:text-3xl font-bold py-3">
        Check out our latest article
      </h1>
      <div className="w-[10%] h-[2px] mx-auto my-2 bg-black " />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 gap-7 mt-8 ">
        {/* Articles Card */}
        <ArticleCard
          img="assets/images/art_img_1.png"
          title="Disease detection, check up in the laboratory"
          desc="In this case, the role of the health laboratory is very important to do a disease detection..."
        />

        <ArticleCard
          img="assets/images/art_img_2.png"
          title="Herbal medicines that are safe for consumption"
          desc="Herbal medicine is very widely used at this time because of its very good for your..."
        />
        <ArticleCard
          img="assets/images/art_img_3.png"
          title="Natural care for healthy facial skin"
          desc="A healthy lifestyle should start from now and also for your skin health. There are some..."
        />
      </div>
    </div>
  );
};

export default Articles;
