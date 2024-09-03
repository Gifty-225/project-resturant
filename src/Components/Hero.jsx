import React from "react";
import images from "../assets/Image";
import HeroBg from "../assets/Pics/heroBg.png";
import { FaAddressCard, FaUser } from "react-icons/fa";
import PrimaryButton from "./Shared/PrimaryButton";
// import Dropdown from './Dropdown';

const Bgstyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
  zIndex: -1,
};

const Hero = () => {
  return (
    <>
      <div style={Bgstyle} className="relative z-[-1] ">
        <div className="container py-16 sm:py-0 flex flex-col items-center min-h-[600px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* {text content section} */}
            <div className="flex flex-col justify-center space-y-7 text-dark sm:order-1">
              <h1 className="text-2xl md:text-5xl px-4 md:p-0">
                Fresh & Healthy Meal Plan{" "}
                <span className="text-secondary font-cursive text-4xl md:text-7xl">
                  Delivery
                </span>{" "}
                In Nigeria
              </h1>
              <p className="text-center lg:pr-64 px-4 md:px-0">
                Delicious Meals Delivered to Your Doorstep at the Rate of
                #50,000 Per week
              </p>
              
              {/* {Button section} */}
              
              <div className="flex justify-center mt-6
                items-center gap-2 bg-primary
                text-xl h-[40px] w-[200px] text-white px-5 
                py-2 hover:scale-105 duration-300">
                <FaUser/>
                Best Choice
              </div>
            
            </div>

            {/* {image section} */}
            <div className="relative z-30 sm:order-2">
              <img
                src={images.food}
                alt="Food"
                className="w-full sm:scale-125 sm:translate-y-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
