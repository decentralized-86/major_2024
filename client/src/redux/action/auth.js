import * as api from "../api/index";
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

// export const loginAction = (loginCredentials, navigate) => async (dispatch) => {
//   try {
//     const { data } = await api.logIn(loginCredentials);

//     if (data) {
//       dispatch({ type: "AUTH", data });
//       localStorage.setItem(
//         "Profile",
//         JSON.stringify({ ...data, loginValue: true })
//       );
//       navigate("/home/dashboard");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
