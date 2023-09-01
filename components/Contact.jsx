import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full mx-auto py-20 md:px-20 max-w-[1440px] bg-secondary text-center"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-1 md:text-start">
          <h1 className="font-bold text-3xl py-3">
            Book your Appointment Today!
          </h1>

          <p className="text-gray-400 py-2">
            Contact Us to Schedule Your Appointment Today
          </p>

          <form>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-[70%] my-2 bg-white rounded-lg shadow-md p-2 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-[70%] my-2 bg-white rounded-lg shadow-md p-2 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-[70%] my-2 bg-white rounded-lg shadow-md p-2 outline-none"
            />

            <textarea
              placeholder="Your Message"
              className="w-[70%] my-2 bg-white rounded-lg shadow-md p-2 outline-none"
              cols={30}
              rows={10}
            ></textarea>

            <div className="w-fit mx-auto md:mx-0">
              <button className="bg-transparent mt-10 mb-5 px-6 py-3 text-primary font-bold border-primary border rounded-xl flex justify-center items-center gap-5 hover:bg-primary hover:text-white duration-300">
                Send
                <BsArrowRight className="text-[20px]" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex-1">
          <img src="assets/images/doctor.png" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
