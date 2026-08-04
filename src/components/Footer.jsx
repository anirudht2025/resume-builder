import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="container-fluid p-5 text-center text-light"
      style={{ backgroundColor: "purple" }}
    >
      <h2>Contact Us</h2>
      <h4>
        <FaEnvelope /> resumebuilder@gmail.com
      </h4>
      <h4>
        <FaPhoneAlt /> 9876543210
      </h4>
      <h4>
        <CiFacebook /> <CiInstagram /> <FaWhatsapp />
      </h4>
      <h3>
        Designed and Built Using <FaHeart className="text-danger" /> React.js
      </h3>
    </div>
  );
}

export default Footer;
