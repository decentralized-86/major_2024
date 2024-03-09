import axios from "axios";

const URL = "http://localhost:8080";

export const getCoordinatorAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/api/students/getstudents`);

    if (response.status === 200) {
      dispatch({
        type: "GET_STUDENT",
        payload: response.data.studentList,
      });
    } else {
      dispatch({
        type: "GET_STUDENTS_ERROR",
        error: "Error fetching students",
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "GET_STUDENTS_ERROR", error: error.message });
  }
};

export const deleteCoordinatorAction =
  (studentId, setDeleteStatus) => async (dispatch) => {
    try {
      const response = await axios.delete(
        `${URL}/api/students/deleteStudent/${studentId}`
      );

      if (response.status === 200) {
        dispatch({
          type: "DELETE_STUDENT",
          payload: response.data.studentId,
        });
        setDeleteStatus(true);
      } else {
        dispatch({ type: "DELETE_STUDENT_ERROR", error: response.data.msg });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "DELETE_STUDENT_ERROR", error: error.message });
    }
  };
