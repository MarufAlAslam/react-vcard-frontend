import React from "react";

const Step4 = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
        </div>

        <form action="/create/step4.js" className="md:w-8/12 w-full mx-auto">
          <div className="item mb-3">
            <label htmlFor="">Establishment Year</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Nature of Business</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>

          <div className="item mb-3">
            <label htmlFor="">Specialities</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="item mb-3">
            <label htmlFor="">Select Brochure/Document</label>
            <input
              type="file"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>

          <div className="form-item mt-6 text-right">
            <button className="bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 transition duration-300">
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step4;
