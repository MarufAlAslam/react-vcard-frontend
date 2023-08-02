import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CardSample = () => {
  const location = useLocation();
  const state = location.state;
  const insertedId = state.insertedId;

  //   fetch the card
  const [card, setCard] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/cards/${insertedId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCard(data);
      });
  }, [insertedId]);

  return (
    <div className="py-20">
      <div className="container">
        <Card title="Sample Card" extra={<a href="/">More</a>}>
          {card?.companyInfo && (
            <>
              <div className="text-center mb-10">
                <h2 className="text-2xl">Company Info</h2>
                <div className="w-[100px] h-[1px] mx-auto my-3 bg-black"></div>
              </div>

              <h3 className="text-lg mb-4">
                <b>Company Name:</b> {card?.companyInfo?.companyName}
              </h3>

              <h3 className="font-bold">Contact Person Info</h3>
              <div className="w-[100px] h-[1px] mt-1 mb-3 bg-black"></div>

              <p>
                <b className="font-bold">Name:</b> {card?.companyInfo?.prefix}{" "}
                {card?.companyInfo?.firstName} {card?.companyInfo?.lastName}
              </p>
              <p>
                <b className="font-bold">Designation:</b>{" "}
                {card?.companyInfo?.designation}
              </p>
              <p>
                <b className="font-bold">Bio:</b> {card?.companyInfo?.bio}
              </p>
              <p>
                <b className="font-bold">Phone:</b> {card?.companyInfo?.phone} |{" "}
                {card?.companyInfo?.altPhone}
              </p>
              <p>
                <b className="font-bold">Whatsapp:</b>{" "}
                {card?.companyInfo?.whatsapp}
              </p>
            </>
          )}

          <hr className="my-5" />

          {card?.importantLinks && (
            <>
              <div className="text-center mb-10">
                <h2 className="text-2xl">Important Links</h2>
                <div className="w-[100px] h-[1px] mx-auto my-3 bg-black"></div>
              </div>

              <p>
                <b className="font-bold">Email:</b>{" "}
                {card?.importantLinks?.email}
              </p>
              <p>
                <b className="font-bold">Website:</b>{" "}
                {card?.importantLinks?.website}
              </p>
              <p>
                <b className="font-bold">Location:</b>{" "}
                {card?.importantLinks?.mapLocation}
              </p>
            </>
          )}

          <hr className="my-5" />

          {card?.socialLinks && (
            <>
              <div className="text-center mb-10">
                <h2 className="text-2xl">Social Links</h2>
                <div className="w-[100px] h-[1px] mx-auto my-3 bg-black"></div>
              </div>

              <p>
                <b className="font-bold">Facebook:</b>{" "}
                {card?.socialLinks?.facebook}
              </p>
              <p>
                <b className="font-bold">Instagram:</b>{" "}
                {card?.socialLinks?.instagram}
              </p>
              <p>
                <b className="font-bold">Twitter:</b>{" "}
                {card?.socialLinks?.twitter}
              </p>
              <p>
                <b className="font-bold">LinkedIn:</b>{" "}
                {card?.socialLinks?.linkedin}
              </p>
              <p>
                <b className="font-bold">Youtube Channel:</b>{" "}
                {card?.socialLinks?.youtube}
              </p>
              <p>
                <b className="font-bold">Pinterest:</b>{" "}
                {card?.socialLinks?.pinterest}
              </p>
            </>
          )}
          <hr className="my-5" />

          {card?.aboutData && (
            <>
              <div className="text-center mb-10">
                <h2 className="text-2xl">About Us</h2>
                <div className="w-[100px] h-[1px] mx-auto my-3 bg-black"></div>
              </div>

              <p>
                <b className="font-bold">Establishment Year:</b>{" "}
                {card?.aboutData?.establishmentYear}
              </p>
              <p>
                <b className="font-bold">Nature of Business:</b>{" "}
                {card?.aboutData?.natureOfBusiness}
              </p>
              <p>
                <b className="font-bold">Specifications:</b>{" "}
                {card?.aboutData?.specialities}
              </p>
              <p>
                <b className="font-bold">Description:</b>{" "}
                {card?.aboutData?.description}
              </p>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default CardSample;
