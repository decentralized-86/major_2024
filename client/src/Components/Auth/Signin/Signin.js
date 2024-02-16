import "./Signin.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
// import Img from "../Assets/result.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin({ loginValue = true }) {
  const login = { loginValue };
  const handleLogin = (values) => {
    Axios.post("http://localhost:3000/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      const page = response.data;

      if (page === true) {
        localStorage.setItem("@user", JSON.stringify(response.config.data));
        window.location.reload();
      } else {
        toast.info(`${response.data.msg}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        //alert(response.data.msg);
        //console.log(response.data.msg);
      }
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email Invalid")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div className="LoginBody">
      <div className="left-login">
        {/* <img src={Img} alt="Pessoas olhando gráficos" className="chart" /> */}
      </div>

      <div className="right-login">
        <div className="card-login">
          {/* <div className="user-links">
            <div className="user-link-home">
              {!logado && <Link to="/">Home</Link>}
            </div>

             */}
          <h1>Welcome!!</h1>
          <Formik
            initialValues={{}}
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
                <label form="email">password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-field"
                  placeholder="password"
                />

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <button className="button" type="submit">
                {login && <Link to="/home/dashboard">LOGIN</Link>}
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
