import axios from "axios";

const URL = "http://localhost:8080";

export const addJobAction = (jobData, navigate) => async (dispatch) => {
  const res = await axios.post(`${URL}/api/jobs`, jobData);

  // const {
  //   auth: { data },
  // } = getState();

  try {
    localStorage.setItem("Profile", JSON.stringify({ ...data, ...jobData }));

    dispatch({
      type: "ADD_JOB",
      payload: {
        ...res.data,
        uid: res.data.uid,
        name: res.data.name,
        batch: res.data.batch,
        branch: res.data.branch,
        gender: res.data.gender,
        contact: res.data.contact,
        college_email: res.data.college_email,
        degree: res.data.degree,
        avg_cgpa: res.data.avg_cgpa,
        ssc_marks: res.data.ssc_marks,
        ssc_board: res.data.ssc_board,
        hsc_marks: res.data.hsc_marks,
        hsc_board: res.data.hsc_board,
        address: res.data.address,
        city: res.data.city,
        post_code: res.data.post_code,
        state: res.data.state,
        country: res.data.country,
        linkedln_link: res.data.linkedln_link,
        resume_url: res.data.resume_url,
        password: res.data.password,
      },
    });
    console.log("Data", data);
    // dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
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
        payload: response.data.jobs,
      });
    } else {
      dispatch({ type: "GET_JOBS_ERROR", error: "Error fetching users" });
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
