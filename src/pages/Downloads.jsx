import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function Downloads() {
  return (
    <>
      <div style={{ minHeight: "60vh" }}>
        <div className="d-flex justify-content-between align-content-center m-3">
          <h3>Download History</h3>
          <Link to={"/form"} className="text-decoration-none text-dark me-3">
            <FaArrowLeft />{" "}
          </Link>
        </div>

        <div className="my-3">
          <div className="row container-fluid">
            <div className="col-md-4">
              <div className="shadow p-3 rounded">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <h4 className="mb-0">Review at : time</h4>

                  <button className="btn text-danger p-0 ms-2">
                    <FaTrash />
                  </button>
                </div>

                <div className="rounded">
                  <img
                    src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ZpbGVzL3dlYnNpdGVfY29udGVudC90cDE4OC1iMi1yZXN1bWUtMjdfMi5qcGc.jpg"
                    alt="Resume"
                    width={"100%"}
                    height={"400px"}
                    // className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Downloads;
