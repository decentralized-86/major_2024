// import * as api from "../api/index";
// import { setCurrentUser } from "./auth";
import axios from "axios";

const URL = "http://localhost:8080";

export const signupAction =
  (authData, navigate) => async (dispatch, getState) => {
    console.log(authData);
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
        navigate("/adminHome/adminDashboard");
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

export const logoutAction = (setLogin, navigate) => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
  navigate("/");
  return setLogin(false);
};

export const coSignupAction = (authData) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${URL}/api/coordinator/coordinator/signup`,
      authData
    );
    dispatch({
      type: "AUTH",
      payload: {
        ...res.data,
        uid: res.data.uid,
        name: res.data.name,
        branch: res.data.branch,
        contact: res.data.contact,
        email: res.data.email,
        password: res.data.password,
      },
    });
    return res.status;
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      return { error: data, status };
    } else {
      return { error: error.message };
    }
  }
};
