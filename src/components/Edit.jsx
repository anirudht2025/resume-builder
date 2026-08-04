import React from "react";
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

function Edit() {
  const [open, setOpen] = React.useState(false);
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
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Location"
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
                  value={jobTitle}
                  onChange={handleJobTitleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Software Engineer</MenuItem>
                  <MenuItem value={20}>Full Stack Developer</MenuItem>
                  <MenuItem value={30}>DevOps Engineer</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Divider />

            {/* Contact Details */}

            <h4 className="mt-3">Contact Details</h4>

            <div className="p-3 row">
              <TextField
                label="Email"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Contact Number"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="LinkedIn Link"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="GitHub Link"
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
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="University/College Name"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Year of Graduation"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
              />
            </div>

            <Divider />

            {/* Technical Skills */}

            <h4 className="mt-3">Technical Skills</h4>

            <div className="d-flex flex-wrap gap-3 p-3">
              <Button>HTML</Button>
              <Button>CSS</Button>
              <Button>Tailwind</Button>
            </div>

            <Divider />

            {/* Summary */}

            <h4 className="mt-3">Summary</h4>

            <div className="row p-3">
              <TextField
                label="Summary"
                variant="standard"
                multiline
                rows={4}
                fullWidth
              />
            </div>

            <div className="text-center mt-2">
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Edit;
