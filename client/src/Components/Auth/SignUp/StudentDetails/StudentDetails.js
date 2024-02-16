import React, { useRef, useState } from "react";
// import "./SignUp.css";
import ReactDOM from "react-dom";
import {
  Form,
  Button,
  ButtonToolbar,
  Schema,
  Panel,
  FlexboxGrid,
} from "rsuite";
import "./StudentDetails.css";

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

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const StudentDetails = () => {
  return (
    <div className="StudentDetailsForm">
      <div className="StudentDetailsForm-items" id="Name">
        <TextField name="firstName" label="firstName" />
        <TextField name="lastName" label="lastName" />
      </div>
      <div className="StudentDetailsForm-items" id="personalInfo">
        <TextField name="gender" label="Gender" />
        <TextField name="contact" label="Contact" />
      </div>
      <div className="StudentDetailsForm-items" id="collegeInfo">
        <div className="flex flex-row">
          <TextField name="uid" label="UID" />
          <TextField name="batch" label="Batch" />
          <TextField name="branch" label="Branch" />
        </div>
        <div>
          <TextField name="college_email" label="College Email" />
        </div>
        <div className="flex flex-row">
          <TextField name="degree" label="Degree" />
          <TextField name="avg_cgpa" label="Average CGPA" />
        </div>
      </div>
      <div className="StudentDetailsForm-items" id="boardMarks">
        <div className="flex flex-row">
          <TextField name="ssc_marks" label="SSC Marks" />
          <TextField name="ssc_board" label="SSC Board" />
          <TextField name="hsc_marks" label="HSC Marks" />
          <TextField name="hsc_board" label="HSC Board" />
        </div>
      </div>
      <div className="StudentDetailsForm-items" id="password">
        <TextField name="password" label="Password" />
        <TextField name="c_password" label="Confirm Password" />
      </div>
    </div>
  );
};

export default StudentDetails;
