import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Divider } from "@mui/material";
import jobRoles from "../assets/it_job_roles.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Edit({ resume }) {
  const [open, setOpen] = React.useState(false);

  const [updateForm, setUpdateForm] = useState({
    fullname: resume?.fullname,
    location: resume?.location,
    jobtitle: resume?.jobtitle,
    email: resume?.email,
    phone: resume?.phone,
    linkedin: resume?.linkedin,
    github: resume?.github,
    degree: resume?.degree,
    college: resume?.college,
    year: resume?.year,
    skills: resume?.skills,
    summary: resume?.summary,
  });

  const handleUpdate = () => {
    console.log(updateForm);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [jobTitle, setJobTitle] = React.useState("");

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  return (
    <>
      <button className="btn text-warning" onClick={handleOpen}>
        <FaEdit style={{ fontSize: "35px" }} />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Edit Resume Details
          </Typography>
          <div>
            {/* Basic Information */}

            <h4 className="mt-3">Personal Details</h4>

            <div className="p-3 row">
              <TextField
                label="Full Name"
                defaultValue={resume?.fullname}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    fullname: e.target.value,
                  })
                }
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Location"
                defaultValue={resume?.location}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    location: e.target.value,
                  })
                }
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
                <InputLabel id="job-title-select-label">
                  Choose Job Title
                </InputLabel>

                <Select
                  labelId="job-title-select-label"
                  id="job-title-select"
                  defaultValue={resume?.jobtitle}
                  onChange={(e) =>
                    setUpdateForm({
                      ...updateForm,
                      jobtitle: e.target.value,
                    })
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {jobRoles.jobRoles.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <Divider />

            {/* Contact Details */}

            <h4 className="mt-3">Contact Details</h4>

            <div className="p-3 row">
              <TextField
                label="Email"
                defaultValue={resume?.email}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    email: e.target.value,
                  })
                }
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Contact Number"
                defaultValue={resume?.phone}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    phone: e.target.value,
                  })
                }
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="LinkedIn Link"
                defaultValue={resume?.linkedin}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    linkedin: e.target.value,
                  })
                }
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />

              <TextField
                label="GitHub Link"
                defaultValue={resume?.github}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    github: e.target.value,
                  })
                }
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
            </div>

            <Divider />

            {/* Education */}

            <h4 className="mt-3">Educational Details</h4>

            <div className="p-3 row">
              <TextField
                label="Bachelor's Degree"
                defaultValue={resume?.degree}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    degree: e.target.value,
                  })
                }
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />

              <TextField
                label="University/College Name"
                defaultValue={resume?.college}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    college: e.target.value,
                  })
                }
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />

              <TextField
                label="Year of Graduation"
                defaultValue={resume?.year}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    year: e.target.value,
                  })
                }
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
            </div>

            <Divider />

            {/* Technical Skills */}

            <h4 className="mt-3">Technical Skills</h4>

            <div className="d-flex flex-wrap gap-3 p-3">
              {resume?.skills?.map((item, index) => (
                <span key={index} className="px-2 py-1 border rounded">
                  {item}

                  <span
                    className="text-danger fw-bold ms-2"
                    style={{ cursor: "pointer" }}
                  >
                    X
                  </span>
                </span>
              ))}
            </div>

            <Divider />

            {/* Summary */}

            <h4 className="mt-3">Summary</h4>

            <div className="row p-3">
              <TextField
                label="Summary"
                defaultValue={resume?.summary}
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    summary: e.target.value,
                  })
                }
                variant="standard"
                multiline
                rows={4}
                fullWidth
              />
            </div>

            <div className="text-center mt-2">
              <button className="btn btn-primary" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Edit;
