import React from "react";

const Footer = () => {
  return (
    <div className="footer py-5 bg-black">
      <div className="container">
        <div className="text-center">
          <p className="text-white mb-4">
            Copyrights © 2023 DIGI-CRD. All Rights Reserved.
          </p>

          <ul className="flex justify-center items-center gap-5 text-white">
            <li>
              <a href="/" className="text-white">
                Privacy Policy
              </a>
            </li>
            |
            <li>
              <a href="/" className="text-white">
                Privacy Policy Terms and Conditions
              </a>
            </li>
            |
            <li>
              <a href="/" className="text-white">
                Disclaimer
              </a>
            </li>
            |
            <li>
              <a href="/" className="text-white">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
