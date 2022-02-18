import React, { useState } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { Field, FieldArray, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
import Card from "../../../../basestyledcomponents/Card/Card";
import CardHeader from "../../../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../../../basestyledcomponents/Card/CardBody";
import Grid from "@material-ui/core/Grid";
import { Complaint } from "./Complaint/complaint";

const editorStyle = {
  minWidth: "100px",
  minHeight: "100px",
  "touch-action": "none",
};
const API_URL = "http://127.0.0.1:8000/api";
const useStyles = makeStyles((theme) => ({
  headercontainer: {
    margin: "10px",
  },
  sectioncontainer: {
    margin: "10px",
  },
}));

/*
        <TextField
          name={`new_complaint_description`}
          label={`Complaint Description`}
          defaultValue={description}
          onChange={(event) => setDescription(event.target.value)}
          variant={`outlined`}
          multiline
          rows={5}
        />
 */

export default function AddNewComplaint(props) {
  const [complaintname, setComplaintName] = useState("");
  const [description, setDescription] = useState("");
  const { setFieldValue } = useFormikContext();

  function resetForm() {
    setComplaintName("");
    setDescription("");
  }
  const handleComplaintNameChange = (event) => {
    setComplaintName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Card raised>
      <CardHeader color={`primary`}>
        <Typography>New Complaint</Typography>
      </CardHeader>
      <CardBody
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Field
          component={TextField}
          label={`Complaint Name`}
          name={`new_complaint_name`}
          value={complaintname}
          variant={`outlined`}
          onChange={(e) => setComplaintName(e.target.value)}
        />
        <Field
          component={TextField}
          multiline
          rows={5}
          label={`Complaint Name`}
          name={`new_complaint_description`}
          value={description}
          variant={`outlined`}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          color={`primary`}
          variant={`text`}
          onClick={() => {
            props.arrayHelpers.push({
              complaint_name: complaintname,
              complaint_description: description,
              relatedToAssessment: false,
            });
            resetForm();
          }}
        >
          Add Complaint
        </Button>
      </CardBody>
    </Card>
  );
}

/*
 <Field
          component={TextField}
          label={`Complaint Name`}
          name={`new_complaint_name`}
          value={complaintname}
          variant={`outlined`}
          onChange={(e) => setComplaintName(e.target.value)}
        />
        <Field
          component={TextField}
          multiline
          rows={5}
          label={`Complaint Name`}
          name={`new_complaint_description`}
          value={description}
          variant={`outlined`}
          onChange={(e) => setDescription(e.target.value)}
        />


<FieldArray name={props.name}>
              {(arrayHelpers) => (
                <>
                  <div>
                    {props.complaints && props.complaints.length > 0 ? (
                      <div>
                        {props.complaints.map((complaint, index) => (
                          <Complaint
                            arrayHelpers={arrayHelpers}
                            key={index}
                            name={props.name}
                            index={index}
                            classes={classes}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <AddNewComplaint arrayHelpers={arrayHelpers} />
                  </div>
                </>
              )}
            </FieldArray>
 */
