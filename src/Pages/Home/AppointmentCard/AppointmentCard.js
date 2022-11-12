import React from "react";
import doctor from '../../../assets/images/doctor-small.png';
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentCard = () => {
  return (
    <section className="mt-36">
      <div className="hero bg-base-100 bg-[url('/src/assets/images/appointment.png')] rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 hidden md:block lg:w-1/2 lg:h-max rounded-lg shadow-2xl" alt=""
          />
          <div>
            <h4 className="text-xl font-bold text-primary mb-5">Appointment</h4>
            <h1 className="text-4xl font-semibold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Getting Start</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCard;
