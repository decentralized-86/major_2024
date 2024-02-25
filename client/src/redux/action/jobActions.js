import axios from "axios";

const URL = "http://localhost:8080";

export const addJobAction = (jobData, navigate) => async (dispatch) => {
  const res = await axios.post(`${URL}/api/jobs//addjobpost`, jobData);
  console.log("Response", res);
  try {
    if (res.status === 200) {
      dispatch({
        type: "ADD_JOB",
        payload: {
          company_name: res.data.company_name,
          company_email: res.data.company_email,
          company_website_url: res.data.company_website_url,
          company_location: res.data.company_location,
          company_description: res.data.company_description,

          job_tags: {
            job_tags: {
              organization_type:
                res.data && res.data.job_tags
                  ? res.data.job_tags.organization_type
                  : undefined,
              industry_sector:
                res.data && res.data.job_tags
                  ? res.data.job_tags.industry_sector
                  : undefined,
              job_type:
                res.data && res.data.job_tags
                  ? res.data.job_tags.job_type
                  : undefined,
              location_Type:
                res.data && res.data.job_tags
                  ? res.data.job_tags.location_Type
                  : undefined,
            },
          },

          job_info: {
            job_profile: res.data.job_info.job_profile,
            job_description: res.data.job_info.job_description,
            job_registration_link: res.data.job_info.job_registration_link,
            job_location: res.data.job_info.job_location,
          },

          eligibility: {
            passout_batch: res.data.eligibility.passout_batch,
            avg_cgpa: res.data.eligibility.avg_cgpa,
            min_12_percent: res.data.eligibility.min_12_percent,
            service_agreement_duration:
              res.data.eligibility.service_agreement_duration,
          },

          package: {
            base_salary: res.data.package.base_salary,
            stock_options: res.data.package.stock_options,
          },

          selection_process: {
            written_test: res.data.selection_process.written_test,
            technical_interview: res.data.selection_process.technical_interview,
            hr_interview: res.data.selection_process.hr_interview,
          },

          deadline_date: res.data.deadline_date,
          attendance: res.data.attendance,
          candidates: res.data.candidates,
          timestamp: res.data.timestamp,
        },
      });
      alert("Job added successfully");
      return res.status;
    } else {
      alert("try again");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getJobsAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/api/jobs/getalljobs`);

    if (response.status === 200) {
      dispatch({
        type: "GET_JOBS",
        payload: response.data.result,
      });
    } else {
      dispatch({ type: "GET_JOBS_ERROR", error: "Error fetching jobss" });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "GET_JOBS_ERROR", error: error.message });
  }
};

export const deleteJobAction = (jobId, setDeleteStatus) => async (dispatch) => {
  console.log("Response", jobId);
  try {
    const response = await axios.delete(
      `${URL}/api/jobs/deletejobpost/${jobId}`
    );

    if (response.status === 200) {
      dispatch({
        type: "DELETE_JOB",
        payload: response.data.jobId,
      });
      setDeleteStatus(true);
    } else {
      dispatch({ type: "DELETE_JOB_ERROR", error: response.data.msg });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "DELETE_JOB_ERROR", error: error.message });
  }
};

export const updateJobAction =
  (jobData, setIsSave, isSave) => async (dispatch) => {
    console.log("Response", jobData);
    try {
      const response = await axios.patch(
        `${URL}/api/jobs/updatejobpost/${jobData._id}`,
        jobData
      );

      if (response.status === 200) {
        dispatch({
          type: "UPDATE_JOB",
          payload: response.data.result,
        });
      } else {
        dispatch({ type: "UPDATE_JOB_ERROR", error: response.data.message });
        alert("try again");
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "UPDATE_JOB_ERROR", error: error.message });
    }
  };
