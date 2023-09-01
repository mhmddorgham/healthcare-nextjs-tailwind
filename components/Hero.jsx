import React from "react";

const Hero = () => {
  return (
    <div className="w-full mx-auto py-8 px-3 max-w-[1440px] relative">
      <img
        className="hidden md:block absolute left-0 top-3"
        src="assets/images/element.svg"
      />
      <div className="flex flex-col-reverse md:flex-row gap-7 md:justify-around justify-center items-center px-12 text-center md:text-left">
        <div className="p-4 flex-1">
          <h2 className="text-3xl md:text-5xl font-bold py-4">
            Virtual Healthcare for you
          </h2>
          <p className="text-gray-400 py-3 leading-10 tracking-wide max-w-[600px]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="text-white bg-primary px-4 py-3 rounded-lg mt-10">
            Cosult Today
          </button>
        </div>

        <div className="w-[300px] md:w-[500px]">
          <img
            src="assets/images/hero_img.png"
            alt="hero_img"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
