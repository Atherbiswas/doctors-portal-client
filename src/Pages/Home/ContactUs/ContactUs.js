import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section className="my-16">
      <div
        className="hero bg-base-100 bg-[url('/src/assets/images/appointment.png')] rounded-lg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="m-5 text-xl font-bold text-primary">Contact Us</h1>
            <p className="mb-5 text-4xl text-white">Stay connected with us</p>
            <input type="text" placeholder="Email Address" className="input input-bordered w-full" />
            <input type="text" placeholder="Subject" className="input input-bordered w-full mt-2" />
            <textarea className="textarea textarea-bordered h-24 w-full mt-2" placeholder="Your Message"></textarea>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
