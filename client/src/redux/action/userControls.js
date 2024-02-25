// import * as api from "../api/index";
// import { setCurrentUser } from "./auth";
import axios from "axios";

const URL = "http://localhost:8080";

export const getUsersAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/api/coordinator/getstudents`);

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

export const deleteStudentAction =
  (studentId, setDeleteStatus) => async (dispatch) => {
    try {
      const response = await axios.delete(
        `${URL}/api/coordinator/deleteStudent/${studentId}`
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
