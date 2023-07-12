import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container relative z-20">
        <div className="text-center">
          <h1 className="text-6xl text-white font-extrabold mb-3">
            Inspire your clients Digitally.
          </h1>
          <h3 className="text-3xl text-white mb-3">
            DIGI-CRD is a Digital Business Card that is smart, elegant &
            affordable.
          </h3>

          <ul className="inline-flex flex-col justify-center items-center text-lg text-white gap-2 mt-5 mb-10">
            <li>Easy. Create within minutes.</li>
            <li>Impressive Rich Content.</li>
            <li>Share from anywhere & anytime.</li>
            <li>Save trees and contribute to the environment.</li>
          </ul>

          <div className="flex justify-center items-center gap-6">
            <Link
              to="/create"
              className=" text-white border-2 hover:bg-white hover:text-[#5F36E0] font-medium border-white rounded-full px-10 py-2"
            >
              Create Your Own!
            </Link>
            <Link
              to=""
              className=" text-white border-2 hover:bg-white hover:text-[#5F36E0] font-medium border-white rounded-full px-10 py-2"
            >
              Know How it Works!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
