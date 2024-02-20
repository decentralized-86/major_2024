import * as api from "../api/index";
import { setCurrentUser } from "./setCurrentUser";

export const signupAction =
  (authData, navigate) => async (dispatch, getState) => {
    const {
      auth: { data },
    } = getState();
    try {
      localStorage.setItem("Profile", JSON.stringify(data));

      dispatch({
        type: "AUTH",
        payload: [
          ...data,
          {
            uid: authData.uid,
            name: authData.name,
            batch: authData.batch,
            branch: authData.branch,
            gender: authData.gender,
            contact: authData.contact,
            college_email: authData.college_email,
            degree: authData.degree,
            avg_cgpa: authData.avg_cgpa,
            ssc_marks: authData.ssc_marks,
            ssc_board: authData.ssc_board,
            hsc_marks: authData.hsc_marks,
            hsc_board: authData.hsc_board,
            address: authData.address,
            city: authData.city,
            post_code: authData.post_code,
            state: authData.state,
            country: authData.country,
            linkedln_link: authData.linkedln_link,
            resume_url: authData.resume_url,
            password: authData.password,
          },
        ],
      });
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

export const loginAction = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
