import React from "react";
import { FaBus } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <>
      <div className="py-14 md:py-20 bg-gray-50">
        <div className="container">
          {/* {heading section} */}
          <h1 className="pb-16 tracking-wider text-2xl font-semibold text-dark text-center">
            Why Choose Us
          </h1>
          {/* {card section} */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-4">
            {/* {1st card} */}
            <div className="text-center flex flex-col justify-center items-center gap-4 px-4 py-6 bg-white shadow-lg rounded-lg">
              <FaBus className="text-5xl text-primary mb-4" />
              <p className="text-5xl rotate-90 text-primary translate-x-5 mb-4">
                ....
              </p>
               We are always concerned about our customer's health. because food is health.
              <p className="text-dark/70 font-semibold">
                
              </p>
            </div>
            {/* {second card} */}
            <div className="text-center flex flex-col justify-center items-center gap-4 px-4 py-6 bg-white shadow-lg rounded-lg">
              <FaBus className="text-5xl text-secondary mb-4 rotate-180" />
              <p className="text-5xl rotate-90 text-secondary translate-x-2 mb-4">
                ....
              </p>
              <p className="text-dark/70 font-semibold">
                We are the best when it comes to food delivery 
              </p>
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-4 px-4 py-6 bg-white shadow-lg rounded-lg">
              <FaBus className="text-5xl text-primary mb-4" />
              <p className="text-5xl rotate-90 text-primary translate-x-5 mb-4">
                ....
              </p>
              <p className="text-dark/70 font-semibold">
                Choosee us for your healthy meal and you will never regret 
              </p>
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-4 px-4 py-6 bg-white shadow-lg rounded-lg">
              <FaBus className="text-5xl text-secondary mb-4 rotate-180" />
              <p className="text-5xl rotate-90 text-secondary translate-x-5 mb-4">
                ....
              </p>
              <p className="text-dark/70 font-semibold">
                We are always opened 24/7
              </p>
            </div>
            {/* Add more cards here if needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
