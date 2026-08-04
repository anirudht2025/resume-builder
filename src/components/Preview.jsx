import React from "react";
import { Button, Divider } from "@mui/material";

function Preview({ resume }) {
  return (
    <div className="w-100 py-4 px-2 border shadow my-2">
      <h4>{resume?.fullname}</h4>
      <p>
        Phone: {resume?.phone}
        <span></span>
      </p>
      <p>
        Email: {resume?.email}
        <span></span>
      </p>
      <p>
        LinkedIn: <a href={resume?.linkedin}>{resume?.linkedin}</a>
      </p>
      <p>
        GitHub Profile: <a href={resume?.github}>{resume?.github}</a>
      </p>
      <p>Location: {resume?.location}</p>

      <Divider />

      <h4 className="mt-3 mb-2">Professional Summary</h4>
      <p style={{ textAlign: "justify" }}>{resume?.summery}</p>

      <Divider />

      <h4 className="mt-3 mb-2">Technical Skills</h4>
      <div>
        {resume?.skills &&
          resume.skills.map((item) => <Button key={item}>{item}</Button>)}
      </div>

      <Divider />

      <h4 className="mt-3 mb-2">Education</h4>
      <p>Bachelor's Degree: {resume?.degree}</p>
      <p>University / College Name: {resume?.college}</p>
      <p>Year of Graduation: {resume?.year}</p>
    </div>
  );
}

export default Preview;
