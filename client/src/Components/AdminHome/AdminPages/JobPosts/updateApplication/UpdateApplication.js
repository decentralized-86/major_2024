import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fab from "@mui/material/Fab";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Upload from "../../../../uploader/uploader";
import logo from "../../../../Logo/cpmsLogo.png";
import "./updateApplication.css";

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

  function createData(eligibilityCriteria, criteriaValue) {
    return { eligibilityCriteria, criteriaValue };
  }

  const rows = [
    createData("Average CGPA", job.eligibility.avg_cgpa),
    createData("12th Percentage", job.eligibility.min_12_percent),
    createData(
      "Service Agreement Duration",
      job.eligibility.service_agreement_duration
    ),
  ];

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
          <Card key={job._id} sx={{ width: "70vw", marginTop: "2vh" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
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
                        style: { fontSize: "1.5rem", fontWeight: "bold" },
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
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="column" spacing={1}>
                  <Stack direction="column" spacing={1}>
                    <h6>Company Email</h6>
                    <TextField
                      id="outlined-multiline-flexible-controlled"
                      multiline
                      rows={1}
                      value={job.company_email}
                      InputProps={{
                        readOnly: !isSave,
                      }}
                    />
                  </Stack>
                  <Stack direction="column" spacing={1}>
                    <h6>Company Website</h6>
                    <TextField
                      id="outlined-multiline-flexible-controlled"
                      multiline
                      rows={1}
                      value={job.company_website_url}
                      InputProps={{
                        readOnly: !isSave,
                      }}
                    />
                  </Stack>
                  <Stack direction="column" spacing={1}>
                    <h6>Company Location</h6>
                    <TextField
                      id="outlined-multiline-flexible-controlled"
                      multiline
                      rows={1}
                      value={job.company_location}
                      InputProps={{
                        readOnly: !isSave,
                      }}
                    />
                  </Stack>
                  <Stack direction="column" spacing={1}>
                    <h6>Company Description</h6>
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
              </AccordionDetails>
            </Accordion>
            <CardContent>
              <Stack direction="row" spacing={1}>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                  Job Type
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
                  Location Type
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
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                  Organization Type
                  <Select
                    defaultValue={job.job_tags.organization_type}
                    value={isSelect.selectType}
                    inputProps={{
                      readOnly: !isSave,
                    }}
                    onChange={handleChange}
                  >
                    <MenuItem value="Technology">Technology</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="Healthcare">Healthcare</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                    <MenuItem value="Retail">Retail</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    <MenuItem value="Hospitality">Hospitality</MenuItem>
                    <MenuItem value="Energy">Energy</MenuItem>
                    <MenuItem value="Transportation">Transportation</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                  Industry Sector
                  <Select
                    defaultValue={job.job_tags.industry_sector}
                    value={isSelect.selectType}
                    inputProps={{
                      readOnly: !isSave,
                    }}
                    onChange={handleChange}
                  >
                    <MenuItem value="Public Corporation">
                      Public Corporation
                    </MenuItem>
                    <MenuItem value="Private Company">Private Company</MenuItem>
                    <MenuItem value="Non-profit Organization">
                      Non-profit Organization
                    </MenuItem>
                    <MenuItem value="Government Agency">
                      Government Agency
                    </MenuItem>
                    <MenuItem value="Startup">Startup</MenuItem>
                    <MenuItem value="Educational Institution">
                      Educational Institution
                    </MenuItem>
                    <MenuItem value="Research Institute">
                      Research Institute
                    </MenuItem>
                    <MenuItem value="Consulting Firm">Consulting Firm</MenuItem>
                    <MenuItem value="Healthcare Provider">
                      Healthcare Provider
                    </MenuItem>
                    <MenuItem value="Legal Firm">Legal Firm</MenuItem>
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
                  <h6>Job Location</h6>
                  <TextField
                    id="outlined-multiline-flexible-controlled"
                    multiline
                    rows={1}
                    value={job.job_info.job_location}
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
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.eligibilityCriteria}
                            </TableCell>
                            <TableCell align="right">
                              <TextField
                                className="tableInputValues"
                                id="outlined-basic"
                                variant="outlined"
                                InputProps={{
                                  readOnly: !isSave,
                                }}
                                value={row.criteriaValue}
                                sx={{ width: "7vw" }}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Stack>
                <Stack direction="column" spacing={1}>
                  <h6>Other Details</h6>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="right">Base Salary</TableCell>
                          <TableCell align="right">Stock Option</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Package
                          </TableCell>
                          <TableCell align="right">
                            <TextField
                              className="tableInputValues"
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                readOnly: !isSave,
                              }}
                              value={job.package.base_salary}
                              sx={{ width: "7vw" }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <TextField
                              className="tableInputValues"
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                readOnly: !isSave,
                                style: { textAlign: "right" },
                              }}
                              value={job.package.stock_options}
                              sx={{ width: "7vw" }}
                            />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="right">Written Test</TableCell>
                          <TableCell align="right">Technical Round</TableCell>
                          <TableCell align="right">Interview Round</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Selection Process
                          </TableCell>
                          <TableCell align="right">
                            <Checkbox
                              checked={job.selection_process.written_test}
                              onChange={handleChange}
                              inputProps={{ readOnly: !isSave }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Checkbox
                              checked={
                                job.selection_process.technical_interview
                              }
                              onChange={handleChange}
                              inputProps={{ readOnly: !isSave }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Checkbox
                              checked={job.selection_process.hr_interview}
                              onChange={handleChange}
                              inputProps={{ readOnly: !isSave }}
                            />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
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
