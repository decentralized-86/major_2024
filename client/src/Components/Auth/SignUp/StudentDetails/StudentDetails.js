import React, { useContext } from "react";
import { Form, Panel, Schema } from "rsuite";
import "./StudentDetails.css";
import { FormValueContext } from "../FormValueContext";
import FormGroup from "rsuite/esm/FormGroup";

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <FormGroup ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </FormGroup>
  );
});

const StudentDetails = () => {
  const { formRef, formValue, setFormValue, formError, setFormError, model } =
    useContext(FormValueContext);

  const handleChange = (newFormValue) => {
    setFormValue(newFormValue);
  };

  return (
    <div className="StudentDetailsForm">
      <Form
        ref={formRef}
        onCheck={setFormError}
        formValue={formValue}
        model={model}
        onChange={handleChange}
      >
        <Panel className="StudentDetailsForm-items" id="Name">
          <TextField name="name" label="Name" value={formValue.name} />
        </Panel>
        <Panel className="StudentDetailsForm-items" id="personalInfo">
          <TextField name="gender" label="Gender" value={formValue.gender} />
          <TextField name="contact" label="Contact" value={formValue.contact} />
        </Panel>
        <Panel className="StudentDetailsForm-items" id="collegeInfo">
          <Panel className="flex flex-row">
            <TextField name="uid" label="UID" value={formValue.uid} />
            <TextField name="batch" label="Batch" value={formValue.batch} />
            <TextField name="branch" label="Branch" value={formValue.branch} />
          </Panel>
          <Panel>
            <TextField
              name="college_email"
              label="College Email"
              value={formValue.college_email}
            />
          </Panel>
          <Panel className="flex flex-row">
            <TextField name="degree" label="Degree" value={formValue.degree} />
            <TextField
              name="avg_cgpa"
              label="Average CGPA"
              value={formValue.avg_cgpa}
            />
          </Panel>
        </Panel>
        <Panel className="StudentDetailsForm-items" id="boardMarks">
          <Panel className="flex flex-row">
            <TextField
              name="ssc_marks"
              label="SSC Marks"
              value={formValue.ssc_marks}
            />
            <TextField
              name="ssc_board"
              label="SSC Board"
              value={formValue.ssc_board}
            />
            <TextField
              name="hsc_marks"
              label="HSC Marks"
              value={formValue.hsc_marks}
            />
            <TextField
              name="hsc_board"
              label="HSC Board"
              value={formValue.hsc_board}
            />
          </Panel>
        </Panel>
        <Panel className="StudentDetailsForm-items" id="password">
          <TextField
            name="password"
            label="Password"
            value={formValue.password}
          />
          <TextField
            name="c_password"
            label="Confirm Password"
            value={formValue.c_password}
          />
        </Panel>
      </Form>
    </div>
  );
};

export default StudentDetails;
