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
    organization_type: "",
    industry_sector: "",
    job_type: "",
    job_profile: "",
    location_Type: "",

    joining_date: null,
    job_description: "",
    eligibility: {
      passout_batch: "",
      min_cgpa: "",
      min_10_percent: "",
      min_12_percent: "",
      medical_requirement: "",
      service_agreement: "",
      service_agreement_duration: "",
      other_eligibility: "",
    },
    package: {
      base_salary: "",
      bonus: "",
      stock_options: "",
    },
    company_accommodation: "",
    other_facility: "",
    selection_process: {
      written_test: "",
      technical_interview: "",
      hr_interview: "",
    },
    waitlist: "",
    final_offer: "",
    deadline_date: null,
    attendance: false,
    company_otp: "",
    candidates: [],
    timestamp: null,
    __v: 0,
    location_Type: "",
  });

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
