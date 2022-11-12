import React from "react";

const AppointmentOption = ({ option }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-xl mt-3">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions">
          <button className="btn btn-primary text-white">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
