import axios from "axios";

const URL = "http://localhost:8080";

export const getCoordinatorAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/api/coordinator/getcoordinators`);

    if (response.status === 200) {
      dispatch({
        type: "GET_COORDINATOR",
        payload: response.data.coordinator,
      });
    } else {
      dispatch({
        type: "GET_COORDINATORS_ERROR",
        error: "Error fetching students",
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "GET_COORDINATORS_ERROR", error: error.message });
  }
};

export const deleteCoordinatorAction =
  (coordinatorId, setDeleteStatus) => async (dispatch) => {
    try {
      const response = await axios.delete(
        `${URL}/api/coordinator/deletecoordinator/${coordinatorId}`
      );

      if (response.status === 200) {
        dispatch({
          type: "DELETE_COORDINATOR",
          payload: response.data.coordinatorId,
        });
        setDeleteStatus(true);
      } else {
        dispatch({
          type: "DELETE_COORDINATOR_ERROR",
          error: response.data.msg,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "DELETE_COORDINATOR_ERROR", error: error.message });
    }
  };
