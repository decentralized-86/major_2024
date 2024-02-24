import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import logo from "../../../../Logo/cpmsLogo.png";
import MChip from "@mui/material-next/Chip";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useJobs } from "../jobContext";

function ApplicationList() {
  const { jobs, setJobs } = useJobs();
  const location = useLocation();
  const job = location.state ? location.state.job : {};
  const navigate = useNavigate();

  const handleApply = (jobID) => {
    navigate("/adminHome/updateApplication", { state: { jobID } });
  };

  return (
    <div
      className="applicationCards px-[2.5vw] mt-1"
      style={{
        maxHeight: "73vh",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {jobs.map((job) => (
        <Card
          key={job.id}
          sx={{
            width: "70vw",
            marginTop: "2vh",
          }}
        >
          <Stack direction="row" spacing={{ md: 22, sm: 4 }}>
            <CardHeader
              avatar={
                <CardMedia
                  component="img"
                  src={logo}
                  style={{ height: "7vh" }}
                />
              }
              title={<h4>{job.title}</h4>}
              subheader={job.company}
              style={{ width: "50vw" }}
            />
          </Stack>
          <CardContent>
            <Stack direction="row" spacing={1}>
              <Chip label={job.type} />
              <Chip label={job.location} />
            </Stack>
          </CardContent>
          <CardContent>
            <Stack direction="row" spacing={{ md: 81, sm: 32 }}>
              <MChip
                label={`Register By ${job.registerBy}`}
                style={{ fontFamily: "serif", width: "20vw" }}
              />
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleApply(job.id)}
                style={{ width: "10vw" }}
              >
                View
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default ApplicationList;
// href="viewApplication"
{
  /* <FormGroup
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
         <FormControlLabel
          control={
            <Checkbox
              value="eligible"
              checked={checked}
              onChange={handleChange}
              size="small"
            />
          }
          label="Eligible"
        />
      </FormGroup> 
       <Chip
                size="small"
                variant="outlined"
                label={job.eligibility ? "Eligible" : "Non-Eligible"}
                style={{ marginTop: "5vh" }}
                color={job.eligibility ? "success" : "error"}
              /> */
}
