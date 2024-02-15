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
    <>
      <TextField name="name" label="Name" />
      <TextField name="uid" label="UID" />
      <TextField name="password" label="Password" />
      <TextField name="c_password" label="Confirm Password" />
      <TextField name="batch" label="Batch" />
      <TextField name="branch" label="Branch" />
      <TextField name="gender" label="Gender" />
      <TextField name="contact" label="Contact" />
      <TextField name="college_email" label="College Email" />
      <TextField name="degree" label="Degree" />
      <TextField name="avg_cgpa" label="Average CGPA" />
      <TextField name="ssc_marks" label="SSC Marks" />
      <TextField name="ssc_board" label="SSC Board" />
      <TextField name="hsc_marks" label="HSC Marks" />
      <TextField name="hsc_board" label="HSC Board" />
    </>
  );
};

export default StudentDetails;
/*
------------------------------------------------------------------
student: {
        name : {type : String, required: true },
        uid : {  type : String, required : true},
        batch : {type : String,   required: true, },
        branch : { type : String,  required: true },
        gender : {  type : String, required:true,  default : 'M' },
        contact : {  type : String, required: true},
        college_email : { type : String, required: true, },
        degree : { type : String, required: true,  },
       avg_cgpa : { type : String, required: true },
        ssc_marks : {type : String, required: true  },
        ssc_board : { type : String,  required: true,},
        hsc_marks : { type : String, required: true },
        hsc_board : { type : String, required: true,  },
 },

 location: {
    address : {  type : String, required: true },
    city : { type : String,  required: true},
    post_code : {type : String, required: true},
    state : { type : String, required: true,  },
    country : { type : String, required: true },
 },
    
    
    linkedln_link: {
        type : String
    },
    resume_url : {
        type : String
    },
    password : {
        type : String,
        required: true, 
        
    },c_password : {
        type : String,
        required: true, 
        
    },
*/
