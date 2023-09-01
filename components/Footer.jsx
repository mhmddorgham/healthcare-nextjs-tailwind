import React from "react";

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-10 px-20 bg-primary relative">
      <img
        className="hidden md:block absolute left-0 bottom-1"
        width={70}
        src="assets/images/element.svg"
      />

      <img
        className="hidden md:block absolute right-0 bottom-1"
        width={70}
        src="assets/images/element.svg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 md:gap-3 text-white">
        <div>
          {/* Logo */}
          <div className="flex justify-start items-center my-4">
            <div className="px-4 py-2 rounded-[50%] bg-white">
              <span className="font-bold text-primary text-[20px]">T</span>
            </div>

            <div>
              <p className="font-bold p-2 text-white">Trafalgar</p>
            </div>
          </div>

          <p className="tracking-wide py-4">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>

          <p>©Trafalgar PTY LTD 2023. All rights reserved</p>
        </div>

        <div className="p-4">
          <h6 className="text-white font-bold cursor-pointer">Company</h6>
          <p className="py-3 cursor-pointer">About</p>
          <p className="py-3 cursor-pointer">Services</p>
          <p className="py-3 cursor-pointer">Articles</p>
          <p className="py-3 cursor-pointer">Contact</p>
        </div>

        <div className="p-4">
          <h6 className="text-white font-bold cursor-pointer">Region</h6>
          <p className="py-3 cursor-pointer">USA</p>
          <p className="py-3 cursor-pointer">Singapore</p>
          <p className="py-3 cursor-pointer">Hongkong</p>
          <p className="py-3 cursor-pointer">Canda</p>
        </div>

        <div className="p-4">
          <h6 className="text-white font-bold cursor-pointer">Help</h6>
          <p className="py-3 cursor-pointer">Help Center</p>
          <p className="py-3 cursor-pointer">Contact Support</p>
          <p className="py-3 cursor-pointer">Instructions</p>
          <p className="py-3 cursor-pointer">How it works</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
