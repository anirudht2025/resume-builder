import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import Preview from "../components/Preview";
import Edit from "../components/Edit";
import { useParams } from "react-router-dom";
import { getResumeApi } from "../services/allApiServices";
import html2canvas from "html2canvas";
import { addDownloadHistoryApi } from "../services/allApiServices";
import { jsPDF } from "jspdf";

function ViewResume() {
  const [resumeData, setResumeData] = useState({});

  const { rid } = useParams();
  console.log(rid);

  useEffect(() => {
    getResumeData();
  }, []);

  const getResumeData = async () => {
    const response = await getResumeApi(rid);
    console.log(response);

    if (response.status === 200) {
      setResumeData(response.data);
    }
  };

  const handleDownload = async () => {
    // Resume picture, date and time, id
    const today = new Date();
    const datetime = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;
    const resumeId = rid;
    const preview = document.getElementById("preview");
    console.log(datetime, resumeId, preview);

    // html -> image
    const canvas = await html2canvas(preview);
    // console.log(canvas);
    // const imgUrl = canvas.toDataURL();
    canvas.toBlob((blob) => {
      const shortUrl = URL.createObjectURL(blob);
      generatePdf(shortUrl);
    });

    // API call
    const generatePdf = async (resumeImage) => {
      const downloadhistory = { resumeId, datetime, picture: resumeImage };
      const response = await addDownloadHistoryApi(downloadhistory);
      console.log(response);

      if (response.status === 201) {
        const pdf = new jsPDF();
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(resumeImage, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save(`${resumeData.fullname}.pdf`);
      }
    };
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center my-2">Resume Preview</h2>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10">
            <div className="d-flex justify-content-center">
              {/* Download */}
              <button className="btn text-primary" onClick={handleDownload}>
                <FaFileDownload style={{ fontSize: "35px" }} />
              </button>
              {/* Edit */}
              {/* <button className="btn text-warning">
                <FaEdit style={{ fontSize: "35px" }} />
              </button> */}
              <Edit resume={resumeData} setResumeData={setResumeData} />
              {/* Download History */}
              <Link className="btn text-secondary" to={"/history"}>
                <FaHistory style={{ fontSize: "35px" }} />
              </Link>
              {/* Back-Form */}
              <Link className="btn" to={"/form"}>
                <FaBackward style={{ fontSize: "35px" }} />
              </Link>
            </div>

            <div id="preview">
              <Preview resume={resumeData} />
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default ViewResume;
