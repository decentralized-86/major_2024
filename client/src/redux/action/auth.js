// import * as api from "../api/index";
// import { setCurrentUser } from "./auth";
import axios from "axios";

const URL = "http://localhost:8080";

export const signupAction =
  (authData, navigate) => async (dispatch, getState) => {
    const res = await axios.post(`${URL}/api/user/signup`, authData);

    const {
      auth: { data },
    } = getState();

    try {
      localStorage.setItem("Profile", JSON.stringify({ ...data, ...authData }));

      dispatch({
        type: "AUTH",
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

export const loginAction =
  (loginCredentials, setLogin, navigate) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${URL}/api/user/login`,
        loginCredentials
      );

      if (response.status === 200) {
        dispatch({
          type: "AUTH",
          payload: {
            ...response.data,
            select: loginCredentials.select, // Use the select from loginCredentials
            email: loginCredentials.email, // Use the email from loginCredentials
            password: loginCredentials.password, // Use the password from loginCredentials
          },
        });
        localStorage.setItem("Profile", JSON.stringify({ ...response.data }));
        navigate("/home/dashboard");
        return setLogin(true); // Set login status to true
      } else {
        dispatch({ type: "AUTH_ERROR", error: "Invalid login credentials" });
        alert("Invalid login credentials");
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "AUTH_ERROR", error: error.message });
      alert("Invalid login");
    }
  };

  export const getUsersAction = () => async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/api/coordinator/getstudents`);
  
      if (response.status === 200) {
        dispatch({
          type: "GET_USERS",
          payload: response.data,
        });
      } else {
        dispatch({ type: "GET_USERS_ERROR", error: "Error fetching users" });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "GET_USERS_ERROR", error: error.message });
    }
  };
  
  export const deleteStudentAction =
    (studentId, setDeleteStatus) => async (dispatch) => {
      console.log("Response", studentId);
      try {
        const response = await axios.delete(
          `${URL}/api/coordinator/deleteStudent/${studentId}`
        );
  
        if (response.status === 200) {
          dispatch({
            type: "DELETE_STUDENT",
            payload: response.data.studentId,
          });
          return setDeleteStatus(true);
        } else {
          dispatch({ type: "DELETE_STUDENT_ERROR", error: response.data.msg });
        }
      } catch (error) {
        console.error(error);
        dispatch({ type: "DELETE_STUDENT_ERROR", error: error.message });
      }
    };
  