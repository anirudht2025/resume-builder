import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import jobRoles from "../assets/it_job_roles.json";
import jobSkills from "../assets/jobskills.json";
import summary from "../assets/professional_summary.json";
import { addResumeApi } from "../services/allApiServices";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Informations",
  "Contact Details",
  "Educational Details",
  "Review & Submit",
];

function InputForm({ setRes }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // const [jobTitle, setJobTitle] = React.useState("");

  const [resumeData, setResumeData] = useState({
    fullname: "",
    location: "",
    jobtitle: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    degree: "",
    college: "",
    year: "",
    skills: [],
    summary: "",
  });

  const nav = useNavigate();

  console.log(resumeData);

  // const handleJobTitleChange = (event) => {
  //   setJobTitle(event.target.value);
  // };

  const isStepOptional = React.useCallback((step) => {
    return step === 1;
  }, []);

  //   const isStepOptional = React.useCallback((step) => {
  //     return false;
  //   }, []);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  // Manage focus when the active step changes.
  React.useEffect(() => {
    const previousActiveStep = previousActiveStepRef.current;
    previousActiveStepRef.current = activeStep;

    if (activeStep === steps.length) {
      // If the user has completed all steps and hits "Finish", focus the "Reset" button.
      resetButtonRef.current.focus();
      return;
    }
    if (activeStep === 0 && previousActiveStep === steps.length) {
      // If the user has completed all steps and hits "Reset", focus the "Next" button.
      nextButtonRef.current.focus();
      return;
    }
    // if (isStepOptional(previousActiveStep) && !isStepOptional(activeStep)) {
    //   // If the user hits "Skip" and the next step is not optional, focus the "Next" button.
    //   nextButtonRef.current.focus();
    // }
  }, [activeStep, isStepOptional]);

  React.useEffect(() => {
    setRes(resumeData);
  }, [resumeData]);

  const generate = () => {
    setResumeData({
      ...resumeData,
      skills: jobSkills[resumeData.jobtitle],
      summary: summary[resumeData.jobtitle],
    });
    handleNext();
  };

  const handleSubmit = async () => {
    const {
      fullname,
      location,
      jobtitle,
      email,
      phone,
      linkedin,
      github,
      degree,
      college,
      year,
      skills,
      summary,
    } = resumeData;

    if (
      fullname &&
      location &&
      jobtitle &&
      email &&
      phone &&
      linkedin &&
      github &&
      degree &&
      college &&
      year &&
      skills &&
      summary
    ) {
      // api call
      try {
        const response = await addResumeApi(resumeData);
        console.log(response);
        if (response.status === 201) {
          alert("Resume Created!");
          nav(`/view/${response?.data?.id}`);
        } else {
          alert("Resume Creation Failed!");
        }
      } catch (err) {
        console.error(err);
        alert("Resume Creation Failed!");
      }
    } else {
      alert("Please fill this form completely!");
    }
  };

  const renderStepContent = (stepCount) => {
    switch (stepCount) {
      case 0:
        return (
          <>
            <h3 className="fw-bold">Personal Details</h3>

            <div className="p-3 row">
              <TextField
                label="Full Name"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={resumeData.fullname}
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    fullname: e.target.value,
                  })
                }
              />
              <TextField
                label="Location"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={resumeData.location}
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    location: e.target.value,
                  })
                }
              />
              <FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
                <InputLabel id="job-title-select-label">
                  Choose Job Title
                </InputLabel>

                <Select
                  labelId="job-title-select-label"
                  id="job-title-select"
                  value={resumeData.jobtitle}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      jobtitle: e.target.value,
                    })
                  }
                >
                  {jobRoles.jobRoles.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <h3 className="fw-bold">Contact Details</h3>

            <div className="p-3 row">
              <TextField
                label="Email"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={resumeData.email}
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    email: e.target.value,
                  })
                }
              />
              <TextField
                label="Contact Number"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={resumeData.phone}
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    phone: e.target.value,
                  })
                }
              />
              <TextField
                label="LinkedIn Link"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={resumeData.linkedin}
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    linkedin: e.target.value,
                  })
                }
              />
              <TextField
                label="GitHub Link"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={resumeData.github}
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    github: e.target.value,
                  })
                }
              />
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h3 className="fw-bold">Educational Details</h3>

            <div className="p-3 row">
              <TextField
                label="Bachelor's Degree"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={resumeData.degree}
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    degree: e.target.value,
                  })
                }
              />
              <TextField
                label="University/College Name"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={resumeData.college}
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    college: e.target.value,
                  })
                }
              />
              <TextField
                label="Year of Graduation"
                variant="standard"
                fullWidth
                sx={{ mb: 3 }}
                value={resumeData.year}
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    year: e.target.value,
                  })
                }
              />
            </div>
          </>
        );

      case 3:
        return (
          <>
            {/* <Typography sx={{ mt: 2, fontSize: "1.4rem" }}> */}
            <Typography sx={{ mt: 2, mb: 3, fontSize: "1rem" }}>
              Our AI will generate <b>Skills & Summary</b> according to your job
              role.
            </Typography>

            {/* <Typography sx={{ mt: 1, fontSize: "1.4rem" }}> */}
            <Typography sx={{ mb: 3, fontSize: "1rem" }}>
              Click the <b>Generate AI Skills & Summary</b> button to proceed.
            </Typography>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "85vh" }} className="mt-3 p-3">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleSubmit} ref={resetButtonRef}>
                FINISH
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box>{renderStepContent(activeStep)}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}

              {activeStep === steps.length - 1 ? (
                <Button onClick={generate} ref={nextButtonRef}>
                  GENERATE AI SKILLS AND SUMMARY
                </Button>
              ) : (
                <Button onClick={handleNext} ref={nextButtonRef}>
                  NEXT
                </Button>
              )}

              {/* <Button onClick={handleNext} ref={nextButtonRef}>
                {activeStep === steps.length - 1
                  ? "GENERATE AI SKILLS AND SUMMARY"
                  : "Next"}
              </Button> */}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}

export default InputForm;
