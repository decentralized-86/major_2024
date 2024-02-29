import axios from "axios";

const URL = "http://localhost:8080";

export const addTrainingAction =
  (TrainingData, navigate) => async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/api/jobs//addjobpost`, TrainingData);
      if (res.status === 200) {
        dispatch({
          type: "ADD_TRAINING",
          payload: {
            company_name: res.data.company_name,
            company_email: res.data.company_email,
            company_website_url: res.data.company_website_url,
            company_location: res.data.company_location,
            company_description: res.data.company_description,
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
            job_info: res.data.job_info,
            eligibility: res.data.eligibility,
            package: res.data.package,
            selection_process: res.data.selection_process,
            deadline_date: res.data.deadline_date,
            attendance: res.data.attendance,
            candidates: res.data.candidates,
            timestamp: res.data.timestamp,
          },
        });
        alert("Training added successfully");
        navigate(-1);
      } else {
        alert("try again");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while adding the Training");
    }
  };

export const getTrainingsAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/api/jobs/getalljobs`);

    if (response.status === 200) {
      dispatch({
        type: "GET_TRAININGS",
        payload: response.data.result,
      });
    } else {
      dispatch({
        type: "TRAININGS_ERROR",
        error: "Error fetching TRAININGS",
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "TRAININGS_ERROR", error: error.message });
  }
};

export const deleteTrainingAction =
  (TrainingId, setDeleteStatus) => async (dispatch) => {
    try {
      const response = await axios.delete(
        `${URL}/api/jobs/deletejobpost/${TrainingId}`
      );

      if (response.status === 200) {
        dispatch({
          type: "DELETE_TRAINING",
          payload: response.data.TrainingId,
        });
        setDeleteStatus(true);
      } else {
        dispatch({ type: "TRAINING_ERROR", error: response.data.msg });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "TRAINING_ERROR", error: error.message });
    }
  };

export const updateTrainingAction = (trainingData) => async (dispatch) => {
  console.log("Response", trainingData);
  try {
    const response = await axios.patch(
      `${URL}/api/jobs/updatejobpost/${trainingData._id}`,
      trainingData
    );

    if (response.status === 200) {
      dispatch({
        type: "UPDATE_TRAINING",
        payload: response.data.result,
      });
    } else {
      dispatch({ type: "TRAINING_ERROR", error: response.data.message });
      alert("try again");
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "TRAINING_ERROR", error: error.message });
  }
};
