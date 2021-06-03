import React, { useState } from "react";
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";
import { Formik, Field, Form, useField, FieldArray } from "formik";
import Card from "../../../../basestyledcomponents/Card/Card";
import CardHeader from "../../../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../../../basestyledcomponents/Card/CardBody";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import PatientComplaint from './PatientComplaint/PatientComplaint';
import * as PropTypes from "prop-types";
import { Complaint } from "./Complaint/complaint";
import DynamicAppointmentField from "../../DynamicAppointmentForm/DynamicAppointmentField/dynamicappointmentfield";

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

Complaint.propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.any,
  methods: PropTypes.any,
  index: PropTypes.any,
  field: PropTypes.any,
};

function AddNewComplaint(props) {
  const [complaintname, setComplaintName] = useState();
  const [description, setDescription] = useState();
  return (
    <Card raised>
      <CardHeader color={`primary`}>
        <Typography>New Complaint</Typography>
      </CardHeader>
      <CardBody
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <TextField
          label={`Complaint Name`}
          name={`new_complaint_name`}
          defaultValue={complaintname}
          onChange={(event) => setComplaintName(event.target.value)}
          variant={`outlined`}
        />
        <TextField
          name={`new_complaint_description`}
          label={`Complaint Description`}
          defaultValue={description}
          onChange={(event) => setDescription(event.target.value)}
          variant={`outlined`}
          multiline
          rows={5}
        />
        <Button
          color={`primary`}
          variant={`text`}
          onClick={() => {
            props.arrayHelpers.push({
              complaint_name: complaintname,
              complaint_description: description,
            });
            setComplaintName("");
            setDescription("");
          }}
        >
          Add Complaint
        </Button>
      </CardBody>
    </Card>
  );
}
export default function PatientComplaints(props) {
  let { id } = useParams();
  let dispatch = useDispatch();
  const classes = useStyles();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Grid container direction={`column`} justify="space-evenly" spacing={2}>
        <Grid item>
          <Grid container direction="column">
            <FieldArray name={props.name}>
              {(arrayHelpers) => (
                <>
                  {props.complaints && props.complaints.length > 0 ? (
                    <Grid container direction="column">
                      {props.complaints.map((complaint, index) => (
                        <Complaint
                          arrayHelpers={arrayHelpers}
                          key={index}
                          name={props.name}
                          index={index}
                          classes={classes}
                        />
                      ))}
                    </Grid>
                  ) : null}

                  <Grid item>
                    <AddNewComplaint arrayHelpers={arrayHelpers} />
                  </Grid>
                </>
              )}
            </FieldArray>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

/*
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
