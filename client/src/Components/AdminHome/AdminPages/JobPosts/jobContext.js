import React, { createContext, useState, useContext } from "react";
import logo from "../../../Logo/cpmsLogo.png";

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState({
    company_name: "",
    company_email: "",
    company_website_url: "",
    company_location: "",
    company_description: "",

    job_tags: {
      organization_type: "",
      industry_sector: "",
      job_type: "",
      location_Type: "",
    },

    job_info: {
      job_profile: "",
      job_description: "",
      job_registration_link: "",
      job_location: "",
    },

    eligibility: {
      passout_batch: "",
      eligible_courses: "",
      avg_cgpa: "",
      min_12_percent: "",
      service_agreement_duration: "",
    },

    package: {
      base_salary: "",
      stock_options: "",
    },

    selection_process: {
      written_test: false,
      technical_interview: false,
      hr_interview: false,
    },

    deadline_date: null,
    attendance: false,
    candidates: [],
    timestamp: null,
  });

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
