import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const Header = () => {
  return (
    <div className="primary header py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className="flex justify-end items-center gap-10">
            <Link to="/examples" className="text-white font-medium">Examples</Link>
            <Link to="/features" className="text-white font-medium">Features</Link>
            <Link to="/pricings" className="text-white font-medium">Pricings</Link>
            <Link to="/create" className=" text-white border-2 hover:bg-white hover:text-[#5F36E0] font-medium border-white rounded-full px-10 py-2">
              Create Your Own
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
