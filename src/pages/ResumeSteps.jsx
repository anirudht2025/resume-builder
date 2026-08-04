import React from "react";
import { IoIosDocument } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function ResumeSteps() {
  return (
    <>
      <div className="container-fluid p-3" style={{ minHeight: "90vh" }}>
        <h1 className="fw-bold text-center mb-5 mt-2">
          Create a Job-Winning Resume in Minutes.
        </h1>

        {/* <div className="d-flex justify-content-around align-items-center h-75"> */}
        <div className="row justify-content-around gap-5">
          {/* Card 1 */}

          <div
            className="border border-2 shadow bg-light p-3"
            style={{ textAlign: "center", width: "20rem", height: "18rem" }}
          >
            <h2>
              <IoIosDocument className="text-primary" />
            </h2>
            <h2>Add Your Information</h2>
            <h4>Add pre-written examples to each section.</h4>
            <h4 className="fw-bold">Step 1</h4>
          </div>

          {/* Card 2 */}

          <div
            className="border border-2 shadow bg-light p-3"
            style={{ textAlign: "center", width: "20rem", height: "18rem" }}
          >
            <h2>
              <FaFileDownload className="text-danger" />
            </h2>
            <h2>Download Your Resume</h2>
            <h4>Download it and start applying.</h4>
            <h4 className="fw-bold">Step 2</h4>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link className="btn btn-primary" to="/form">
            Let's Start
          </Link>
        </div>
      </div>
    </>
  );
}

export default ResumeSteps;
