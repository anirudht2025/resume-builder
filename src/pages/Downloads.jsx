import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { getAllHistoryApi } from "../services/allApiServices";

function Downloads() {
  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    try {
      const response = await getAllHistoryApi();
      setHistory(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

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
            {history.map((item) => (
              <div className="col-md-4" key={item?._id}>
                <div className="shadow p-3 rounded">
                  <div className="d-flex justify-content-center align-items-center mb-2">
                    <h4 className="mb-0">Review at : {item?.datetime}</h4>

                    <button className="btn text-danger p-0 ms-2">
                      <FaTrash />
                    </button>
                  </div>

                  <div className="rounded">
                    <img
                      src={item?.picture}
                      alt="Resume"
                      width={"100%"}
                      height={"400px"}
                      // className="img-fluid rounded shadow"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Downloads;
