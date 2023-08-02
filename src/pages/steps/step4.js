import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Step4 = () => {
  const location = useLocation();
  const state = location.state;
  const insertedId = state.insertedId;

  const navigator = useNavigate();
  const updateCard = (e) => {
    e.preventDefault();

    const form = e.target;

    const establishmentYear = form.establishmentYear.value;
    const natureOfBusiness = form.natureOfBusiness.value;
    const specialities = form.specialities.value;
    const description = form.description.value;
    const brochure = "";


    const aboutData = {
      establishmentYear,
      natureOfBusiness,
      specialities,
      description,
      brochure,
    };

    fetch(`http://localhost:8000/api/v1/cards/${insertedId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aboutData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigator("/sample", {
          // pass the insertedId to the next step
          state: { insertedId: insertedId },
        });
      });
  };
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
        </div>

        <form className="md:w-8/12 w-full mx-auto" onSubmit={updateCard}>
          <div className="item mb-3">
            <label htmlFor="">Establishment Year</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="establishmentYear"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Nature of Business</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="natureOfBusiness"
              id=""
            />
          </div>

          <div className="item mb-3">
            <label htmlFor="">Specialities</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="specialities"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="description"
              id=""
            ></textarea>
          </div>
          <div className="item mb-3">
            <label htmlFor="">Select Brochure/Document</label>
            <input
              type="file"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="brochure"
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
