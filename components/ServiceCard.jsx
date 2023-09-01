import React from "react";

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="py-5 px-7 bg-white rounded-lg shadow-md text-start md:max-w-[370px] mx-auto">
      <img src={icon} className="py-5" />
      <h3 className="font-bold text-xl md:text-2xl py-2">{title}</h3>
      <p className="text-gray-400 tracking-wide py-2">{desc}</p>
    </div>
  );
};

export default ServiceCard;
