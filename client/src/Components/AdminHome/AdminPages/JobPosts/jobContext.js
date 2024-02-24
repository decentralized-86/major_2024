import React, { createContext, useState, useContext } from "react";
import logo from "../../../Logo/cpmsLogo.png";

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Developer Intern",
      company: "TCS",
      type: "Full-Time",
      location: "Remote",
      registerBy: "22,feb,2024",
      description: "This is a software developer intern job",
      registrationLink: "https://www.tcs.com",
      eligibility: {
        eligibleCourses: "B.Tech, M.Tech, BCA, MCA",
        eligibleBatch: "2022, 2023, 2024",
        eligibilityCriteria: "CGPA > 7",
      },
      otherDetails: "This is a software developer intern job",
      jobImg: logo,
    },
    {
      id: 2,
      title: "Software Developer Intern",
      company: "TCS",
      type: "Full-Time",
      location: "Remote",
      registerBy: "22,feb,2024",
      description: "This is a software developer intern job",
      registrationLink: "https://www.tcs.com",
      eligibility: {
        eligibleCourses: "B.Tech, M.Tech, BCA, MCA",
        eligibleBatch: "2022, 2023, 2024",
        eligibilityCriteria: "CGPA > 7",
      },
      otherDetails: "This is a software developer intern job",
      jobImg: logo,
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "TCS",
      type: "Full-Time",
      location: "Remote",
      registerBy: "22,feb,2024",
      description: "This is a software developer intern job",
      registrationLink: "https://www.tcs.com",
      eligibility: {
        eligibleCourses: "B.Tech, M.Tech, BCA, MCA",
        eligibleBatch: "2022, 2023, 2024",
        eligibilityCriteria: "CGPA > 7",
      },
      otherDetails: "This is a software developer intern job",
      jobImg: logo,
    },
    {
      id: 4,
      title: "Software Developer Intern",
      company: "TCS",
      type: "Full-Time",
      location: "Remote",
      registerBy: "22,feb,2024",
      description: "This is a software developer intern job",
      registrationLink: "https://www.tcs.com",
      eligibility: {
        eligibleCourses: "B.Tech, M.Tech, BCA, MCA",
        eligibleBatch: "2022, 2023, 2024",
        eligibilityCriteria: "CGPA > 7",
      },
      otherDetails: "This is a software developer intern job",
      jobImg: logo,
    },
  ]);

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
