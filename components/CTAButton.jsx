import React from "react";

const CTAButton = ({ text }) => {
  return (
    <div className="py-5">
      <button className="bg-white border border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white duration-300 px-7 py-4">
        {text}
      </button>
    </div>
  );
};

export default CTAButton;
