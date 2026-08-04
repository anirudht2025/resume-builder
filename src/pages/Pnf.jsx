import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Pnf() {
  return (
    <>
      <div
        style={{ minHeight: "80vh" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h2 className="mt-5">Page not found!</h2>
        <img
          src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif"
          alt="notfound"
          width={"50%"}
        />
        <Link
          to="/"
          className="d-flex align-items-center gap-2 text-decoration-none text-dark fw-bold mb-3"
          style={{ fontSize: "30px" }}
        >
          <FaArrowLeft />
          <span>Back to home</span>
        </Link>
      </div>
    </>
  );
}

export default Pnf;
