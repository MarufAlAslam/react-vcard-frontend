import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Step1 = () => {
  const location = useLocation();
  const state = location.state;
  const insertedId = state.insertedId;

  const navigator = useNavigate();

  const updateCard = (e) => {
    e.preventDefault();

    const form = e.target;

    const companyName = form.companyName.value;
    const logo = "";
    const prefix = form.prefix.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const designation = form.designation.value;
    const bio = form.bio.value;
    const phone = form.phone.value;
    const altPhone = form.altPhone.value;
    const whatsapp = form.whatsapp.value;

    const companyInfo = {
      companyName,
      logo,
      prefix,
      firstName,
      lastName,
      designation,
      bio,
      phone,
      altPhone,
      whatsapp,
    };

    fetch(`http://localhost:8000/api/v1/cards/${insertedId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({companyInfo}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigator("/create/step2", { 
          // pass the insertedId to the next step
          state: {insertedId: insertedId}
         });
      });
  };
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        </div>

        <form
          className="md:w-8/12 w-full mx-auto"
          onSubmit={updateCard}
        >
          <div className="item mb-3">
            <label htmlFor="">Company Name</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="companyName"
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
                name="prefix"
                id=""
              />
            </div>
            <div className="item mb-3">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-gray-300 mt-2"
                name="firstName"
                id=""
              />
            </div>
            <div className="item mb-3">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-gray-300 mt-2"
                name="lastName"
                id=""
              />
            </div>
          </div>

          <div className="item mb-3">
            <label htmlFor="">Designation</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="designation"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Bio</label>
            <textarea
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="bio"
              id=""
            ></textarea>
          </div>

          <hr className="my-10" />

          <div className="item mb-3">
            <label htmlFor="">Phone No.</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="phone"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Alternative Phone</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="altPhone"
              id=""
            />
          </div>
          <div className="item mb-3">
            <label htmlFor="">Whatsapp</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="whatsapp"
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
