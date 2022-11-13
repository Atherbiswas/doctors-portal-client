import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-10 bg-[url('/src/assets/images/footer.png')]">
      <div className="footer">
      <div>
        <span className="text-xl font-semibold">Services</span>
        <Link to="/" className="link link-hover">Branding</Link>
        <Link to="/" className="link link-hover">Design</Link>
        <Link to="/" className="link link-hover">Marketing</Link>
        <Link to="/" className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="text-xl font-semibold">Company</span>
        <Link to="/" className="link link-hover">About us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/" className="link link-hover">Jobs</Link>
        <Link to="/" className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="text-xl font-semibold">Legal</span>
        <Link to="/" className="link link-hover">Terms of use</Link>
        <Link to="/" className="link link-hover">Privacy policy</Link>
        <Link to="/" className="link link-hover">Cookie policy</Link>
      </div>
      </div>
      <div className="text-center mt-28">
        <p>Copyright © 2022 - All right reserved by <span className="font-bold">DOCTORS PORTAL.</span></p>
        </div>
    </footer>
  );
};

export default Footer;
