import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px] bg-[#f5faff] text-center"
    >
      <h1 className="text-3xl md:text-4xl font-bold py-4">Our Services</h1>

      <div className="w-[10%] h-[2px] mx-auto my-2 bg-black" />

      <p className="text-gray-400 py-4 md:max-w-[800px] mx-auto leading-9 tracking-wide">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4">
        <ServiceCard
          icon="assets/images/serv_1.svg"
          title="Search doctor"
          desc="Choose your doctor from thousands of specialist, general, and trusted hospitals"
        />
        <ServiceCard
          icon="assets/images/serv_2.svg"
          title="Online pharmacy"
          desc="Buy  your medicines with our mobile application with a simple delivery system"
        />
        <ServiceCard
          icon="assets/images/serv_3.svg"
          title="Consultation"
          desc="Free consultation with our trusted doctors and get the best recomendations"
        />
        <ServiceCard
          icon="assets/images/serv_4.svg"
          title="Details info"
          desc="Free consultation with our trusted doctors and get the best recomendations"
        />
        <ServiceCard
          icon="assets/images/serv_5.svg"
          title="Emergency care"
          desc="You can get 24/7 urgent care for yourself or your children and your lovely family"
        />
        <ServiceCard
          icon="assets/images/serv_6.svg"
          title="Tracking"
          desc="Track and save your medical history and health data "
        />
      </div>
    </div>
  );
};

export default Services;
