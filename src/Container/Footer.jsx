import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div
          className="container bg-gradient-to-b
      from-primary to-PrimaryDark rounded-t-3xl"
        >
          {/* {contact section} */}
          <div>
            <h1 className="py-10 text-3xl font-bold text-yellow  text-center">
              {" "}
              Contact Us
            </h1>

            {/* {grid section} */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2
         md:grid-cols-3 gap-14 border-b-2 border-white
         pb-6"
            >
              {/* {Address section} */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <IoLocationSharp className="text-5xl" />
                </div>
                <p>
                  #3, Imade Street,
                  <br /> Off Osamudiame,Evbuotubu, Ekehuan Road, Benin city.
                </p>
              </div>

              {/* {Email section} */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <MdEmail className="text-5xl" />
                </div>
                <p> info@goodfood.come</p>
                <p>hr@goodfood.com</p>
              </div>

              {/* {Number section} */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <FaPhone className="text-5xl" />
                </div>
                <p>+234 8105613978</p>
                <p>+234 8157594729</p>
                <p>+234 7030628851</p>
              </div>
            </div>
            {/* {Copyright section} */}
            <div className="flex w-full justify-between p-4 items-center">
              <p>&copy; 2024 Gifty. All rights reserved</p>

              <div className="flex pr-4 gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
