import { Image } from "antd";
import React from "react";

import s1 from "../../../assets/image/s1.png";
import s2 from "../../../assets/image/s2.png";
import s3 from "../../../assets/image/s3.png";
import s4 from "../../../assets/image/s4.png";
import s5 from "../../../assets/image/s5.png";
import s6 from "../../../assets/image/s6.png";
import { Link } from "react-router-dom";

const Featured = () => {
  const featuredData = [
    {
      id: 1,
      image: s1,
      title: "Garments/Fashion Shop",
      link: "/",
    },
    {
      id: 2,
      image: s2,
      title: "Financial Services",
      link: "/",
    },
    {
      id: 3,
      image: s3,
      title: "Tax Consultants",
      link: "/",
    },
    {
      id: 4,
      image: s4,
      title: "Entertainment & Events",
      link: "/",
    },
    {
      id: 5,
      image: s5,
      title: "Salon / Beauty Care",
      link: "/",
    },
    {
      id: 6,
      image: s6,
      title: "Home Decor",
      link: "/",
    },
  ];
  return (
    <div className="featured py-[100px] bg-primary text-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl text-white font-bold mb-3">
            Featured Examples
          </h2>
          <p className="text-lg mb-8">
            We have designed digital business cards for every industry. Here are
            some of the examples of our work.
          </p>

          <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5">
            {featuredData.map((item) => (
              <div className="bg-transparent border-none">
                <Image
                  src={item.image}
                  alt="s1"
                  className="rounded-md overflow-hidden"
                />
                <p className="text-sm text-white font-semibold mb-4 mt-3">
                  {item.title}
                </p>
                <Link
                  to={item.link}
                  className="text-primary font-bold rounded-md bg-white px-3 py-1 text-sm"
                >
                  Preview Card
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
