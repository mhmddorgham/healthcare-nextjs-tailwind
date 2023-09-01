import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-full py-20 md:px-20 px-10 max-w-[1440px] bg-[#f5faff]"
    >
      <div className="text-white text-center bg-primary max-w-[900px] mx-auto rounded-2xl shadow-lg relative">
        <img
          className="hidden md:block absolute left-0 top-3"
          width={70}
          src="assets/images/element.svg"
        />

        <img
          className="hidden md:block absolute right-0 top-3"
          width={70}
          src="assets/images/element.svg"
        />

        <h2 className="font-bold text-2xl md:text-3xl py-10">
          What our Customers are saying
        </h2>
        <div className="w-[10%] h-[2px] my-2 bg-gray-200 mx-auto rounded-md" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* img */}
            <div>
              <img
                width={90}
                className="rounded-[50%] border-2 border-white"
                src="assets/images/testimonials_img.png"
                alt="testimonial_img"
              />
            </div>

            {/* Name, and title */}
            <div>
              <p className="font-bold py-2">Edward Newgate</p>
              <p className="text-gray-200 py-3">Founder Circle</p>
            </div>
          </div>

          {/* Caption */}
          <div className="py-4 flex-1 md:max-w-[500px] text-start">
            <p>
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>

      {/* Arrows */}

      <div className="flex justify-between items-center max-w-[300px] mx-auto py-5">
        <BsArrowLeft
          size={30}
          className="text-gray-300 font-bold cursor-pointer hover:text-primary duration-300"
        />

        <BsArrowRight
          size={30}
          className="text-gray-300 font-bold cursor-pointer hover:text-primary duration-300"
        />
      </div>
    </div>
  );
};

export default Testimonials;
