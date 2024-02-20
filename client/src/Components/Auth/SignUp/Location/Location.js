import React, { useContext, useRef, useState } from "react";
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
import { FormValueContext } from "../FormValueContext";

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const Location = () => {
  const { formRef, formValue, setFormValue, formError, setFormError, model } =
    useContext(FormValueContext);

  const handleChange = (newFormValue) => {
    setFormValue(newFormValue);
  };

  return (
    <Form
      ref={formRef}
      onCheck={setFormError}
      formValue={formValue}
      model={model}
      onChange={handleChange}
    >
      <TextField name="address" label="Address" value={formValue.address} />
      <TextField name="city" label="City" value={formValue.city} />
      <TextField
        name="post_code"
        label="Post Code"
        value={formValue.post_code}
      />
      <TextField name="state" label="State" value={formValue.state} />
      <TextField name="country" label="Country" value={formValue.country} />
    </Form>
  );
};

export default Location;
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
