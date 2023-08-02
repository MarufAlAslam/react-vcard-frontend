import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Step2 = () => {
  const location = useLocation();
  const state = location.state;
  const insertedId = state.insertedId;

  const navigator = useNavigate();
  const updateCard = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const website = form.website.value;
    const mapLocation = form.mapLocation.value;

    const importantLinks = {
      email,
      website,
      mapLocation,
    };

    fetch(`http://localhost:8000/api/v1/cards/${insertedId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ importantLinks }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigator("/create/step3", {
          // pass the insertedId to the next step
          state: { insertedId: insertedId },
        });
      });
  };
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Important Links</h2>
        </div>

        <form className="md:w-8/12 w-full mx-auto" onSubmit={updateCard}>
          <div className="item mb-3">
            <label htmlFor="">Email ID</label>
            <input
              type="email"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="email"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Website Link</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="website"
              id=""
            />
          </div>

          <div className="item mb-3">
            <label htmlFor="">Map Location Link</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="mapLocation"
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

export default Step2;
