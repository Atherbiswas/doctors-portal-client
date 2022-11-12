import React from "react";
import care from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Care = () => {
  return (
    <div className="hero bg-base-100 mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={care}
          className="rounded-lg shadow-xl lg:w-96"
        alt=""/>
        <div className="lg:mx-14">
          <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
          <p className="py-6 lg:w-3/5">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point  of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content  here', making it look like readable English. Many desktop  publishing packages and web page
          </p>
          <PrimaryButton>Take Treatment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Care;
