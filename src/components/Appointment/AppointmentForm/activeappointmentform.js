import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useField,
  useFormikContext,
} from "formik";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  Grid,
  Radio,
  Typography,
  FormControl,
  FormControlLabel,
  MenuItem,
  FormLabel,
  FormGroup,
  InputLabel,
  Input,
} from "@material-ui/core";
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  RadioGroup,
  Select,
  Switch,
} from "formik-material-ui";
import { fetchForm } from "../../../../api/forms.api";

const useStyles = makeStyles({
  fieldcontainer: {
    marginTop: "15px",
    marginBottom: "15px",
  },
});

const SwitchField = (props) => {
  const { values, setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  useEffect(() => {
    // set the value of textC, based on textA and textB
    if (values) {
      setFieldValue(props.name, true);
    }
  }, [props.name]);

  return (
    <>
      <Field component={Switch} type="checkbox" name={props.name} />
    </>
  );
};

export default function ActiveAppointmentForm(props) {
  console.log(props);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formtitle, setFormTitle] = useState("");
  const [formtype, setFormType] = useState("");
  const [initValues, setInitValues] = useState("");
  const fields = useSelector(
    (state) => state.formsmanager.formpreview.previewfields
  );
  const labelsize = 3;
  const inputsize = 9;
  const handleTextFieldChange = (event, fieldname, formProps) => {
    //return event.target.value;
    if (event.target.value === "") {
      formProps.setFieldValue(`${fieldname}.checked`, false);
      formProps.setFieldValue(`${fieldname}.value`, event.target.value);
    } else {
      formProps.setFieldValue(`${fieldname}.checked`, true);
      formProps.setFieldValue(`${fieldname}.value`, event.target.value);
    }
  };

  const handleRadioFieldChange = (event, fieldname, formProps) => {
    //return event.target.value;
    if (event.target.value === "unchecked") {
      formProps.setFieldValue(`${fieldname}.checked`, false);
      formProps.setFieldValue(`${fieldname}.value`, event.target.value);
    } else {
      //console.log(event.target.value);
      let newvalue = event.target.value;
      formProps.setFieldValue(`${fieldname}.value`, newvalue);
      formProps.setFieldValue(`${fieldname}.checked`, true);
    }
  };
  useEffect(() => {
    console.log(props.formId);

    fetchForm(props.formId).then((response) => {
      console.log("Form editor API call is: " + JSON.stringify(response));
      //setFormTitle(response.title);
      //setFormType(response.form_type);
      if (response.form) {
        console.log("response form is: " + JSON.stringify(response.form));
        response.form.customformfields.forEach((field) => {
          if (field.type === "radio") {
            field.checked = false;
            field.value = "unchecked";
          } else if (field.type === "checkbox_group") {
            field.checked = false;
            field.value = ["unchecked"];
          } else {
            field.checked = false;
            field.value = "";
          }
        });
        console.log(response.form.customformfields);
        dispatch({
          type: "load_preview_fields",
          fields: response.form.customformfields,
        });
        setFormTitle(response.title);
        setFormType(response.form_type);
        setInitValues(response);
        //let currentfields = formfields;
        //console.log(formfields);
        //let newfields = [...formfields, ...response.form.customformfields];
        // setFormFields([...formfields, ...response.form.customformfields]);
        //console.log(newfields);
        //setFormFields(newfields);
        //append(response.form.customformfields);
      } else {
        //remove();
        console.log("No response!");
      }
    });
  }, [props.formId]);
  return (
    <div>
      <Formik
        initialValues={{
          title: formtitle,
          formfields: fields,
          form_type: formtype,
        }}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log(values);
        }}
        render={(formProps) => {
          return (
            <Form>
              <Typography>{initValues.title}</Typography>
              <FieldArray
                name="formfields"
                render={() => (
                  <Grid container direction={`column`}>
                    {formProps.values.formfields.length > 0 ? (
                      formProps.values.formfields.map((field, index) => (
                        <Grid
                          item
                          key={index}
                          className={classes.fieldcontainer}
                        >
                          <Grid container direction={`column`}>
                            <Grid item>
                              <Grid container direction="row">
                                <Grid item xs={labelsize}>
                                  <Grid container direction="column">
                                    <Grid item>
                                      <Typography>{field.label}</Typography>
                                    </Grid>
                                    <Grid item>
                                      <Grid container direction="row">
                                        <Grid item>
                                          <Typography>Unchecked</Typography>
                                        </Grid>
                                        <Grid item>
                                          <SwitchField
                                            name={`formfields.${index}.checked`}
                                          />
                                        </Grid>
                                        <Grid item>
                                          <Typography>Checked</Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={inputsize}>
                                  {field.type === "checkbox_group" ? (
                                    <div>
                                      {field.choices.map(
                                        (choice, choiceindex) => (
                                          <div key={choice.label}>
                                            <label>
                                              <Field
                                                type={`checkbox`}
                                                name={`formfields.${index}.value`}
                                                value={choice.label}
                                              />
                                              {choice.label}
                                            </label>
                                          </div>
                                        )
                                      )}
                                      <label>
                                        <Field
                                          type={`checkbox`}
                                          name={`formfields.${index}.value`}
                                          value={`unchecked`}
                                        />
                                        {`Unchecked`}
                                      </label>
                                    </div>
                                  ) : field.type === "textarea" ? (
                                    <Field
                                      component={TextField}
                                      name={`formfields.${index}.value`}
                                      variant={`outlined`}
                                      onChange={(e) =>
                                        handleTextFieldChange(
                                          e,
                                          `formfields.${index}`,
                                          formProps
                                        )
                                      }
                                      placeholder={`Enter findings for ${field.label} here`}
                                      multiline={true}
                                      fullWidth={true}
                                      rows={5}
                                    />
                                  ) : field.type === "radio" ? (
                                    <Field
                                      component={RadioGroup}
                                      name={`formfields.${index}.value`}
                                      onChange={(e) =>
                                        handleRadioFieldChange(
                                          e,
                                          `formfields.${index}`,
                                          formProps
                                        )
                                      }
                                    >
                                      {field.choices.map(
                                        (choice, choiceindex) => (
                                          <div key={choice.label}>
                                            <FormControlLabel
                                              value={choice.label}
                                              control={<Radio />}
                                              label={choice.label}
                                            />
                                          </div>
                                        )
                                      )}
                                      <FormControlLabel
                                        value={`unchecked`}
                                        control={<Radio />}
                                        label={`Unchecked`}
                                      />
                                    </Field>
                                  ) : (
                                    <Field
                                      component={TextField}
                                      onChange={(e) =>
                                        handleTextFieldChange(
                                          e,
                                          `formfields.${index}`,
                                          formProps
                                        )
                                      }
                                      name={`formfields.${index}.value`}
                                      placeholder={`Enter findings for ${field.label} here`}
                                      variant={`outlined`}
                                      fullWidth={true}
                                    />
                                  )}
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid container direction="row">
                                <Grid item xs={labelsize}></Grid>
                                <Grid item xs={inputsize}>
                                  {field.type === "textarea" ? null : (
                                    <Field
                                      component={TextField}
                                      name={`formfields.${index}.additionalInformation`}
                                      variant={`outlined`}
                                      placeholder={`Enter any additional information not reflected in the above findings for ${field.label} here`}
                                      multiline={true}
                                      fullWidth={true}
                                      rows={5}
                                    />
                                  )}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      ))
                    ) : (
                      <Typography>There aren't multiple fields!</Typography>
                    )}
                  </Grid>
                )}
              />
              {props.showSubmitButton === true ? (
                <button type="submit">Submit</button>
              ) : null}
            </Form>
          );
        }}
      />
    </div>
  );
}
