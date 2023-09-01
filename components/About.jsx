import React from "react";
import CTAButton from "./CTAButton";

const About = () => {
  return (
    <div
      id="about"
      className="w-full mx-auto py-20 max-w-[1440px] bg-white text-center"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-10">
        <div className="flex-1">
          <img src="assets/images/leading_img.png" alt="provider_img" />
        </div>

        <div className="flex-1 text-start md:ml-10">
          <h4 className="capitalize font-bold text-2xl md:text-3xl leading-10 py-2">
            leading healthcare Providers
          </h4>

          <p className="text-gray-400 leading-7 tracking-wide py-3">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <CTAButton text="Discover More" />
    </div>
  );
};

export default About;
