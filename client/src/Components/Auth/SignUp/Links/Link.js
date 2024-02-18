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
  linkedln_link: StringType(),
  resume_url: StringType(),
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

const Links = () => {
  const formRef = useRef();
  const [formValue, setFormValue] = useState({});
  const [formError, setFormError] = useState({});

  return (
    <>
      <TextField name="linkedln_link" label="LinkedIn Link" />
      <TextField name="resume_url" label="Resume URL" />
    </>
  );
};

export default Links;
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