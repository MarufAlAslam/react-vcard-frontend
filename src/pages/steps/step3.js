import React from "react";

const Step3 = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Social Links</h2>
        </div>

        <form action="/create/step4" className="md:w-8/12 w-full mx-auto">
          <div className="item mb-3">
            <label htmlFor="">Facebook</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Instagram</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>

          <div className="item mb-3">
            <label htmlFor="">Twitter</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Linkedin</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Youtube Channel</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Pinterest</label>
            <input
              type="text"
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

export default Step3;
