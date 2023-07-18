import React from "react";

const Step1 = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        </div>

        <form action="/create/step2" className="md:w-8/12 w-full mx-auto">
          <div className="item mb-3">
            <label htmlFor="">Company Name</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Upload Logo</label>
            <input
              type="file"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>

          <hr className="my-10" />

          <div className="flex gap-5">
            <div className="item mb-3">
              <label htmlFor="">Prefix</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-gray-300 mt-2"
                name=""
                id=""
              />
            </div>
            <div className="item mb-3">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-gray-300 mt-2"
                name=""
                id=""
              />
            </div>
            <div className="item mb-3">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-gray-300 mt-2"
                name=""
                id=""
              />
            </div>
          </div>

          <div className="item mb-3">
            <label htmlFor="">Designation</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Bio</label>
            <textarea
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            ></textarea>
          </div>

          <hr className="my-10" />

          <div className="item mb-3">
            <label htmlFor="">Phone No.</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Alternative Phone</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name=""
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Whatsapp</label>
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

export default Step1;
