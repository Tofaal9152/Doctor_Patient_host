import React, { Fragment, useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { User_Appointments } from "../../../constants";
import AppointmentModal from "./AppointmentModal/AppointmentModal.jsx";

const Confirmed_Appointments = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleCardClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  return (
    <Fragment>
      <div className="bg-transparent w-full h-screen overflow-y-scroll custom-scrollbar p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom1200:grid-cols-4 gap-5">
          {User_Appointments.map((appointment, index) => {
            return (
              <div
                key={index}
                onClick={() => handleCardClick(appointment)}
                className="hover:bg-[#f2ffff] flex glass flex-col items-center text-center rounded-xl shadow-xl p-5 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer duration-500"
              >
                <img
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
                  src={Avater}
                  alt="Doctor Avatar"
                />
                <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
                  Dr. {appointment.doctorName}
                </h1>
                <p className="text-sm">Specialty: {appointment.specialty}</p>
                <p className="text-sm">Date: {appointment.date}</p>
                <p className="text-sm">Time: {appointment.time}</p>
              </div>
            );
          })}
        </div>
      </div>
      {selectedAppointment && (
        <AppointmentModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          appointment={selectedAppointment}
        />
      )}
    </Fragment>
  );
};

export default Confirmed_Appointments;
