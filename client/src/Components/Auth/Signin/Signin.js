import "./Signin.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/action/auth";
import { useState } from "react";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);

  const handleLogin = (loginCredentials) => {
    // dispatch(loginAction(loginCredentials, setLogin, navigate));
    navigate("/home/dashboard");
  };

  const validationsLogin = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  return (
    <div className="LoginBody">
      <div className="left-login"></div>

      <div className="right-login">
        <div className="card-login">
          <h1>Welcome!!</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}
          >
            <Form className="login-form">
              <div className="form-group">
                <label form="email">Email</label>

                <Field
                  name="email"
                  type="email"
                  className="form-field"
                  placeholder="Email"
                />

                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              <div className="form-group">
                <label form="email">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-field"
                  placeholder="Password"
                />

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <button className="button" type="submit">
                <div>LOGIN</div>
              </button>
              <div
                className="user-link-cad"
                style={{ color: "white", padding: "1em" }}
              >
                Don't have an account?
                <Link to="/signup/studentdetails">Sign up</Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default Signin;
