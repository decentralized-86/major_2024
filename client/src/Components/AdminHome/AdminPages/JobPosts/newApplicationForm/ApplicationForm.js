import React, { useState } from "react";
import { useJobs } from "../jobContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Stack, TextField } from "@mui/material";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import Fab from "@mui/material/Fab";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Upload from "../../../../uploader/uploader";

const ApplicationForm = () => {
  const { jobs, setJobs } = useJobs();
  const navigate = useNavigate();
  const [newJob, setNewJob] = useState({
    id: "",
    title: "",
    company: "",
    type: "",
    location: "",
    description: "",
    registrationLink: "",
    eligibility: {
      eligibleCourses: "",
      eligibleBatch: "",
      eligibilityCriteria: "",
    },
    otherDetails: "",
  });

  const handleChange = (event, field) => {
    setNewJob({ ...newJob, [field]: event.target.value });
  };

  const handleSave = () => {
    setJobs([...jobs, newJob]);
    setNewJob({
      id: "",
      title: "",
      company: "",
      type: "",
      location: "",
      description: "",
      registrationLink: "",
      eligibility: {
        eligibleCourses: "",
        eligibleBatch: "",
        eligibilityCriteria: "",
      },
      otherDetails: "",
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="viewApplication">
      <Stack direction="row" spacing={{ md: 117, sm: 53 }} marginBottom={1}>
        <Button variant="text" onClick={handleBack} style={{ color: "gray" }}>
          {"< "}Back
        </Button>
        <Stack direction="row" spacing={2}>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            style={{ marginTop: "1vh" }}
            onClick={handleSave}
          >
            <SaveAltOutlinedIcon />
            Save
          </Fab>
        </Stack>
      </Stack>
      <Box
        sx={{
          maxWidth: "80vw",
          maxHeight: "83vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          padding: "0vh 1vw 1vh",
        }}
      >
        <Card
          key={jobs.id}
          sx={{
            width: "70vw",
            marginTop: "2vh",
          }}
        >
          <Stack direction="row" spacing={2} padding={2}>
            <Upload />
            <Stack direction="column" spacing={1}>
              <TextField
                id="standard-read-only-input"
                value={newJob.title}
                onChange={(e) => handleChange(e, "title")}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                value={newJob.company}
                onChange={(e) => handleChange(e, "company")}
                fontSize="small"
                variant="standard"
                size="small"
              />
            </Stack>
          </Stack>
          <CardContent>
            <Stack direction="row" spacing={1}>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                Type
                <Select
                  value={newJob.type}
                  onChange={(e) => handleChange(e, "type")}
                >
                  <MenuItem value="Full-Time">Full-Time</MenuItem>
                  <MenuItem value="Part-Time">Part-Time</MenuItem>
                  <MenuItem value="Internship">Internship</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                Location
                <Select
                  value={newJob.location}
                  onChange={(e) => handleChange(e, "location")}
                >
                  <MenuItem value="Remote">Remote</MenuItem>
                  <MenuItem value="On-site">On-site</MenuItem>
                  <MenuItem value="Hybrid">Hybrid</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </CardContent>
          <CardContent>
            <Stack direction="column" spacing={3}>
              <Stack direction="column" spacing={1}>
                <h6>Description</h6>
                <TextField
                  id="outlined-multiline-flexible-controlled"
                  multiline
                  rows={8}
                  value={newJob.description}
                  onChange={(e) => handleChange(e, "description")}
                />
              </Stack>
              <Stack direction="column" spacing={1}>
                <h6>Registration Link</h6>
                <TextField
                  id="outlined-multiline-flexible-controlled"
                  multiline
                  rows={1}
                  value={newJob.registrationLink}
                  onChange={(e) => handleChange(e, "registrationLink")}
                />
              </Stack>
              <Stack direction="column" spacing={1}>
                <h6>Eligible Courses</h6>
                <TextField
                  id="outlined-multiline-flexible-controlled"
                  multiline
                  rows={3}
                  value={newJob.eligibility.eligibleCourses}
                  onChange={(e) =>
                    handleChange(e, "eligibility.eligibleCourses")
                  }
                />
              </Stack>
              <Stack direction="column" spacing={1}>
                <h6>Eligible Batch</h6>
                <TextField
                  id="outlined-multiline-flexible-controlled"
                  multiline
                  rows={3}
                  value={newJob.eligibility.eligibleBatch}
                  onChange={(e) => handleChange(e, "eligibility.eligibleBatch")}
                />
              </Stack>
              <Stack direction="column" spacing={1}>
                <h6>Eligibility Criteria</h6>
                <TextField
                  id="outlined-multiline-flexible-controlled"
                  multiline
                  rows={3}
                  value={newJob.eligibility.eligibilityCriteria}
                  onChange={(e) =>
                    handleChange(e, "eligibility.eligibilityCriteria")
                  }
                />
              </Stack>
              <Stack direction="column" spacing={1}>
                <h6>Other Details</h6>
                <TextField
                  id="outlined-multiline-flexible-controlled"
                  multiline
                  rows={3}
                  value={newJob.otherDetails}
                  onChange={(e) => handleChange(e, "otherDetails")}
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ApplicationForm;
