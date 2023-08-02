import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Step3 = () => {
  const location = useLocation();
  const state = location.state;
  const insertedId = state.insertedId;

  const navigator = useNavigate();
  const updateCard = (e) => {
    e.preventDefault();

    const form = e.target;

    const facebook = form.facebook.value;
    const instagram = form.instagram.value;
    const twitter = form.twitter.value;
    const linkedin = form.linkedin.value;
    const youtube = form.youtube.value;
    const pinterest = form.pinterest.value;

    const socialLinks = {
      facebook,
      instagram,
      twitter,
      linkedin,
      youtube,
      pinterest,
    };

    fetch(`http://localhost:8000/api/v1/cards/${insertedId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ socialLinks }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigator("/create/step4", {
          // pass the insertedId to the next step
          state: { insertedId: insertedId },
        });
      });
  };
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Social Links</h2>
        </div>

        <form  className="md:w-8/12 w-full mx-auto" onSubmit={updateCard}>
          <div className="item mb-3">
            <label htmlFor="">Facebook</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="facebook"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Instagram</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="instagram"
              id=""
            />
          </div>

          <div className="item mb-3">
            <label htmlFor="">Twitter</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="twitter"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Linkedin</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="linkedin"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Youtube Channel</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="youtube"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Pinterest</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="pinterest"
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
