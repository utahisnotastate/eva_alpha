import React from "react";
import axios from "axios";
import { createNewForm, fetchAllForms } from "../../api/forms.api";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../basestyledcomponents/Button";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  form_input: {
    flexGrow: 3,
  },
  form_label: {},
});

export default function CreateNewForm(props) {
  const dispatch = useDispatch();
  const { register, control, handleSubmit } = useForm();
  const classes = useStyles();
  const onSave = (formData) => {
    console.log(formData);
    createNewForm(formData)
      .then((response) => {
        console.log(response);
        props.setModal(false);
        fetchAllForms().then((response) => {
          dispatch({ type: "load_forms", forms: response });
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <form>
      <Grid container direction={`column`}>
        <Grid item>
          <Grid container direction={`row`}>
            <Grid item xs={2}>
              <Typography>Form Name</Typography>
            </Grid>
            <Grid item xs={10}>
              <Controller
                name={`title`}
                as={<TextField fullWidth />}
                defaultValue={``}
                placeholder={`Enter form name here`}
                control={control}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction={`row`}>
            <Grid item>
              <Typography>Form Type</Typography>
            </Grid>
            <Grid item>
              <select name="type" defaultValue={props.formprops} ref={register}>
                <option value="">Select Form Type</option>
                <option value="physical_exam">Physical Exam</option>
                <option value="review_of_systems">Review Of Systems</option>
                <option value="medical_history">Medical History</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button onClick={handleSubmit(onSave)}>Create Form</Button>
        </Grid>
      </Grid>
    </form>
  );
}
