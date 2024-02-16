import React, { useRef, useState } from "react";
import "./SignUp.css";
import ReactDOM from "react-dom";
import {
  Form,
  Button,
  ButtonToolbar,
  Schema,
  Panel,
  FlexboxGrid,
} from "rsuite";
import StudentDetails from "./StudentDetails/StudentDetails";
import Location from "./Location/Location";
import Links from "./Links/Link";
import SignupNav from "./SignupNav/SignupNav";
import { Outlet, useLocation } from "react-router-dom";
import AuthHeader from "./AuthHeader/AuthHeader";

const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  uid: StringType().isRequired("This field is required."),
  batch: StringType().isRequired("This field is required."),
  branch: StringType().isRequired("This field is required."),
  gender: StringType().isRequired("This field is required."),
  contact: StringType().isRequired("This field is required."),
  college_email: StringType().isRequired("This field is required."),
  degree: StringType().isRequired("This field is required."),
  avg_cgpa: StringType().isRequired("This field is required."),
  ssc_marks: StringType().isRequired("This field is required."),
  ssc_board: StringType().isRequired("This field is required."),
  hsc_marks: StringType().isRequired("This field is required."),
  hsc_board: StringType().isRequired("This field is required."),
  address: StringType().isRequired("This field is required."),
  city: StringType().isRequired("This field is required."),
  post_code: StringType().isRequired("This field is required."),
  state: StringType().isRequired("This field is required."),
  country: StringType().isRequired("This field is required."),
  linkedln_link: StringType(),
  resume_url: StringType(),
  password: StringType().isRequired("This field is required."),
  c_password: StringType()
    .addRule((value, data) => {
      if (value !== data.password) {
        return false;
      }

      return true;
    }, "The two passwords do not match")
    .isRequired("This field is required."),
});

const SignUp = ({ isDarkMode, toggleDarkMode }) => {
  const formRef = useRef();
  const [formValue, setFormValue] = useState({});
  const [formError, setFormError] = useState({});

  const location = useLocation();

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      alert("Fill all the Required fields correctly");
      return;
    }
    console.log(formValue, "Form Value");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div>
        <AuthHeader isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SignupNav />
        <FlexboxGrid className="groupContainer h-[91vh] p-4">
          <FlexboxGrid.Item colspan={12}>
            <Form
              ref={formRef}
              onChange={setFormValue}
              onCheck={setFormError}
              formValue={formValue}
              model={model}
            >
              <Outlet />
              <ButtonToolbar>
                {location.pathname === "/signup/links" && (
                  <Button appearance="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                )}
              </ButtonToolbar>
            </Form>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </div>
  );
};

export default SignUp;
/*

*/
