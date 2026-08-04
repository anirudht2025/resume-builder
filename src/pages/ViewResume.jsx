import React from "react";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import Preview from "../components/Preview";
import Edit from "../components/Edit";

function ViewResume() {
  return (
    <>
      <div className="container">
        <h2 className="text-center my-2">Resume Preview</h2>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10">
            <div className="d-flex justify-content-center">
              {/* Download */}
              <button className="btn text-primary">
                <FaFileDownload style={{ fontSize: "35px" }} />
              </button>
              {/* Edit */}
              {/* <button className="btn text-warning">
                <FaEdit style={{ fontSize: "35px" }} />
              </button> */}
              <Edit />
              {/* Download History */}
              <Link className="btn text-secondary">
                <FaHistory style={{ fontSize: "35px" }} />
              </Link>
              {/* Back-Form */}
              <Link className="btn" to={"/form"}>
                <FaBackward style={{ fontSize: "35px" }} />
              </Link>
            </div>

            <Preview />
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default ViewResume;
