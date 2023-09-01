"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full mx-auto px-10 md:px-12 py-4 max-w-[1440px]">
      <div className="hidden md:flex justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <div className="px-4 py-2 rounded-[50%] bg-primary">
            <span className="font-bold text-white text-[20px]">T</span>
          </div>
          <div>
            <p className="font-bold p-2">Trafalgar</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex justify-center items-center gap-4">
            <li className="mr-5 hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/">Home</a>
            </li>
            <li className="mr-5 hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#services">Services</a>
            </li>
            <li className="mr-5 hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#about">About</a>
            </li>
            <li className="mr-5 hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#testimonials">Testimonials</a>
            </li>
            <li className="mr-5 hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#articles">Articles</a>
            </li>
            <li className="mr-5 hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center">
        <div className="flex p-4">
          <div className="px-4 py-2 rounded-[50%] bg-primary">
            <span className="font-bold text-white">T</span>
          </div>
          <div>
            <p className="font-bold p-2">Trafalgar</p>
          </div>
        </div>

        <div
          onClick={handleNav}
          className="md:hidden flex justify-end items-center cursor-pointer"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      <div
        className={
          nav
            ? "block bg-secondary w-[70%] h-[60%] fixed top-0 left-0 duration-300 z-10"
            : "block bg-secondary w-[70%] h-[60%] fixed top-0 left-[-99999px] duration-300 z-10"
        }
      >
        <div className="flex flex-col justify-center">
          <div className="flex p-4">
            <div className="px-4 py-2 rounded-[50%] bg-primary">
              <span className="font-bold text-white">T</span>
            </div>
            <div>
              <p className="font-bold p-2">Trafalgar</p>
            </div>
          </div>
        </div>

        <div>
          <ul className="flex flex-col p-6 gap-4">
            <li className="mb-5 w-fit hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/">Home</a>
            </li>
            <li className="mb-5 w-fit hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#services">Services</a>
            </li>
            <li className="mb-5 w-fit hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#about">About</a>
            </li>
            <li className="mb-5 w-fit hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#testimonials">Testimonials</a>
            </li>
            <li className="mb-5 w-fit hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#articles">Articles</a>
            </li>
            <li className="mb-5 w-fit hover:text-primary hover:border-b border-b-primary hover:font-bold duration-200">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
