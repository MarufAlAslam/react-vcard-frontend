import React from "react";
import logo from "../../../assets/image/logo.png";

const Contact = () => {
  return (
    <div className="contact bg-black py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl text-white font-bold mb-3">Contact Us</h2>
          <p className="text-lg white mb-8">
            We are here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div className="">
              <img src={logo} className="logo mb-8" alt="" />
              <div className="text-white text-left">
                <h3 className="text-2xl font-bold">Address</h3>
                <p className="mb-5">123, Main Street, Your City Name</p>
                <h3 className="text-2xl font-bold">Phone</h3>
                <p className="mb-5">+1 234 567 890</p>
                <h3 className="text-2xl font-bold">Email</h3>
                <p className="mb-5">
                  <a href="mailto:mail@example.com">mail@example.com</a>
                </p>
              </div>
            </div>

            <div className="">
              <form action="">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="form-control mb-4 p-2 rounded-0 bg-transparent placeholder:text-white border border-white w-full"
                  name=""
                  id=""
                />
                <div className="flex md:flex-row flex-col gap-4 mb-4">
                  <input
                    type="text"
                    className="form-control p-2 rounded-0 bg-transparent border placeholder:text-white border-white w-full"
                    name=""
                    placeholder="Enter Your Phone Number"
                    id=""
                  />
                  <input
                    type="text"
                    className="form-control p-2 rounded-0 bg-transparent border placeholder:text-white border-white w-full"
                    name=""
                    placeholder="Enter Your Email"
                    id=""
                  />
                </div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Enter Your Message"
                    className="form-control p-2 rounded-0 bg-transparent border placeholder:text-white border-white w-full"
                    ></textarea>

                <button className="btn btn-primary mt-4 bg-white px-6 py-2 block ml-auto">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
