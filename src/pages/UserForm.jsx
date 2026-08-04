import React, { useState } from "react";
import InputForm from "../components/InputForm";
import Preview from "../components/Preview";

function UserForm() {
  const [resume, setResume] = useState({});

  return (
    <div className="container-fluid" style={{ minHeight: "80vh" }}>
      <div className="row">
        <div className="col-md-6">
          <InputForm setRes={setResume} /> {/*State Lifting*/}
        </div>
        <div className="col-md-6">
          {resume.fullname && <Preview resume={resume} />}
        </div> {/*Prop Sharing*/}
      </div>
    </div>
  );
}

export default UserForm;
