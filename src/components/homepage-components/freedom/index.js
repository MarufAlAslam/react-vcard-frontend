import React from "react";
import { Link } from "react-router-dom";

import vCard from "../../../assets/image/vCard.png";

const Freedom = () => {
  return (
    <div className="freedom py-[50px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="lg:w-1/2 w-full">
            <h2 className="md:text-4xl text-xl font-bold">
              Get Freedom from Printed Business Cards
            </h2>
            <p className="text-lg mt-5">
              Handshakes & paper business cards are out of trend. Impress
              clients and win business with smartly designed Digital Business
              Card. Digicrd digital business card platform makes it very simple
              to design trendy cards for every industry. All it takes is few
              clicks to design your Contactless Virtual Business Card.
            </p>
            <Link
              to={""}
              className="px-8 py-3 bg-primary inline-block text-white rounded-md mt-6"
            >
              Ask For Demo
            </Link>
          </div>

          <div className="lg:w-1/2 w-full">
            <img src={vCard} alt="vCard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freedom;
