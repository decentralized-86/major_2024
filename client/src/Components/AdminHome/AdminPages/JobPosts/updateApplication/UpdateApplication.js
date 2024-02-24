import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Stack, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import Fab from "@mui/material/Fab";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Upload from "../../../../uploader/uploader";
import logo from "../../../../Logo/cpmsLogo.png";

const UpdateApplication = () => {
  const [isSelect, setIsSelect] = useState([
    {
      selectType: "",
      selectLocation: "",
    },
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state ? location.state.job : {};
  const [isSave, setIsSave] = useState(false);

  const handleChange = (event) => {
    setIsSelect(event.target.value);
  };
  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    setIsSave(!isSave);
  };

  const eligibilityCriteriaValue = `Average CGPA: ${job.eligibility.avg_cgpa}, 
Minimum 12th Percent: ${job.eligibility.min_12_percent}, 
Service Agreement Duration: ${job.eligibility.service_agreement_duration}`;

  return (
    <div className="viewApplication">
      <Stack direction="row" spacing={{ md: 117, sm: 53 }} marginBottom={1}>
        <Button variant="text" onClick={handleBack} style={{ color: "gray" }}>
          {"< "}Back
        </Button>
        <Stack direction="row" spacing={2}>
          {!isSave ? (
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
              style={{ marginTop: "1vh" }}
              onClick={handleEdit}
            >
              <EditIcon /> Edit
            </Fab>
          ) : (
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
              style={{ marginTop: "1vh" }}
              onClick={handleEdit}
            >
              <SaveAltOutlinedIcon />
              Save
            </Fab>
          )}
        </Stack>
      </Stack>
      {job ? (
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
            key={job._id}
            sx={{
              width: "70vw",
              marginTop: "2vh",
            }}
          >
            <Stack direction="row" spacing={2} padding={2}>
              {isSave ? (
                <Upload />
              ) : (
                <img src={logo} alt="logo" style={{ height: "10vh" }} />
              )}

              <Stack direction="column" spacing={1}>
                <TextField
                  id="standard-read-only-input"
                  value={job.job_info.job_profile}
                  InputProps={{
                    readOnly: !isSave,
                  }}
                  variant="standard"
                />
                <TextField
                  id="standard-read-only-input"
                  value={job.company_name}
                  fontSize="small"
                  InputProps={{
                    readOnly: !isSave,
                  }}
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
                    defaultValue={job.job_tags.job_type}
                    value={isSelect.selectType}
                    inputProps={{
                      readOnly: !isSave,
                    }}
                    onChange={handleChange}
                  >
                    <MenuItem value="Full-Time">Full-Time</MenuItem>
                    <MenuItem value="Part-Time">Part-Time</MenuItem>
                    <MenuItem value="Internship">Internship</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  Location
                  <Select
                    defaultValue={job.job_tags.location_Type}
                    value={isSelect.selectLocation}
                    inputProps={{
                      readOnly: !isSave,
                    }}
                    onChange={handleChange}
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
                    value={job.job_info.job_description}
                    InputProps={{
                      readOnly: !isSave,
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={1}>
                  <h6>Registration Link</h6>
                  <TextField
                    id="outlined-multiline-flexible-controlled"
                    multiline
                    rows={1}
                    value={job.job_info.job_registration_link}
                    InputProps={{
                      readOnly: !isSave,
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={1}>
                  <h6>Eligible Courses</h6>
                  <TextField
                    id="outlined-multiline-flexible-controlled"
                    multiline
                    rows={3}
                    value={job.eligibility.eligible_courses}
                    InputProps={{
                      readOnly: !isSave,
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={1}>
                  <h6>Eligible Batch</h6>
                  <TextField
                    id="outlined-multiline-flexible-controlled"
                    multiline
                    rows={3}
                    value={job.eligibility.passout_batch}
                    InputProps={{
                      readOnly: !isSave,
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={1}>
                  <h6>Eligibility Criteria</h6>
                  <TextField
                    id="outlined-multiline-flexible-controlled"
                    multiline
                    rows={3}
                    value={eligibilityCriteriaValue}
                    InputProps={{
                      readOnly: !isSave,
                    }}
                  />
                </Stack>
                <Stack direction="column" spacing={1}>
                  <h6>Other Details</h6>
                  <TextField
                    id="outlined-multiline-flexible-controlled"
                    multiline
                    rows={3}
                    value={job.company_description}
                    InputProps={{
                      readOnly: !isSave,
                    }}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UpdateApplication;
