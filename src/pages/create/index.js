import React from "react";
import card from "../../assets/image/card.avif";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigator = useNavigate()

  const createCard = (e) => {
    e.preventDefault();

    const form = e.target;

    const country = form.country.value;
    const phone = form.phone.value;
    const cardName = form.cardName.value;
    const cardNumber = form.cardNumber.value;

    const formData = {
      country,
      phone,
      cardName,
      cardNumber,
    };

    fetch("http://localhost:8000/api/v1/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigator("/create/step1", { state: data });
      });
  };

  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Own Card</h2>
        </div>

        <form
          className="md:w-8/12 w-full mx-auto"
          onSubmit={createCard}
        >
          <div className="form-item mb-3">
            <label htmlFor="">Country</label>
            <input
              required
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="country"
              id=""
            />
          </div>
          <div className="form-item mb-3">
            <label htmlFor="">Phone</label>
            <input
              required
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="phone"
              id=""
            />
          </div>
          <div className="form-item mb-3">
            <label htmlFor="">Card Name</label>
            <input
              required
              type="text"
              className="w-full p-3 rounded border border-gray-300 mt-2"
              name="cardName"
              id=""
            />
          </div>
          <div className="form-item mb-3">
            <label htmlFor="">Choose Card</label>
            <div className="flex justify-start items-center gap-5">
              <div className="flex justify-start items-center">
                <input type="radio" value={1} name="cardNumber" id="card1" />
                <label htmlFor="card1">
                  <img src={card} className="w-[150px] m-2 rounded" alt="" />
                </label>
              </div>
              <div className="flex justify-start items-center">
                <input type="radio" value={3} name="cardNumber" id="card2" />
                <label htmlFor="card2">
                  <img src={card} className="w-[150px] m-2 rounded" alt="" />
                </label>
              </div>
              <div className="flex justify-start items-center">
                <input type="radio" value={3} name="cardNumber" id="card3" />
                <label htmlFor="card3">
                  <img src={card} className="w-[150px] m-2 rounded" alt="" />
                </label>
              </div>
            </div>
          </div>
          <div className="form-item mt-6 text-right">
            <button className="bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 transition duration-300">
              Initiate Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
