import React from "react";
import {
    FaCommentAlt,
  FaConnectdevelop,
  FaEnvelope,
  FaFileContract,
  FaImages,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaRegEdit,
  FaRupeeSign,
  FaShareAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Click to Call",
      icon: <FaPhoneAlt className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 2,
      title: "Click to Whatsapp",
      icon: <FaWhatsapp className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 3,
      title: "Click to Email",
      icon: <FaEnvelope className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 4,
      title: "Click to Navigate",
      icon: <FaMapMarkedAlt className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 5,
      title: "Add to Contacts",
      icon: <FaFileContract className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 6,
      title: "Social Links",
      icon: <FaConnectdevelop className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 7,
      title: "Unlimited Share",
      icon: <FaShareAlt className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 8,
      title: "Easy to Update",
      icon: <FaRegEdit className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 9,
      title: "Image Gallery",
      icon: <FaImages className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 10,
      title: "Youtube Gallery",
      icon: <FaYoutube className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 11,
      title: "Payment Section",
      icon: <FaRupeeSign className="md:text-5xl text-2xl text-primary" />,
    },
    {
      id: 12,
      title: "Inquiry Form",
      icon: <FaCommentAlt className="md:text-5xl text-2xl text-primary" />,
    },
  ];
  return (
    <div className="features py-[100px] bg-primary">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl text-white font-bold mb-3">
            Highlighted Features
          </h2>
          <p className="text-lg mb-8 text-white">
            All of these listed below features are included in every plan.
          </p>

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                className="feature bg-white px-5 py-10 rounded-md h-full"
                key={feature.id}
              >
                <div className="flex justify-center items-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
