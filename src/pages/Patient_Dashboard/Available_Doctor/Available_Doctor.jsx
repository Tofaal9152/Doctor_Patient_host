import React, { Fragment, useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { Doctor_Appointment } from "../../../constants";
import Modal from "./Modal/Modal";

const Available_Doctor = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setselectedDoctor] = useState(null);
  const handleCardClick = (doctor) => {
    setselectedDoctor(doctor);
    setShowModal(true);
  };
  return (
    <Fragment>
      <div className=" bg-transparent  w-full h-screen overflow-y-scroll custom-scrollbar p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom1200:grid-cols-4 gap-5">
          {Doctor_Appointment.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleCardClick(item)}
                className=" hover:bg-[#f2ffff] flex glass flex-col items-center text-center  rounded-xl shadow-xl p-5 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer duration-500"
              >
                <img
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
                  src={Avater}
                  alt="Doctor Avatar"
                />
                <h1 className="text-xl flex-wrap font-semibold  mt-2 mb-2">
                  {item.name}
                </h1>
                <p className="text-sm ">{item.specialty}</p>
                <div className="mt-3 ">
                  <p>
                    Available:{" "}
                    <span className="font-medium text-sm">
                      {item.availability}
                    </span>
                  </p>
                  <p>
                    Hours:{" "}
                    <span className="font-medium text-sm">{item.hours}</span>
                  </p>
                  <p>
                    Contact:{" "}
                    <span className="font-medium text-sm">{item.contact}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        doctor={selectedDoctor}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </Fragment>
  );
};

export default Available_Doctor;
