import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormContext } from "react-hook-form";
import { useFormikContext } from "formik";
import { Typography, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FieldOptionsEditor from "../FormFields/FieldOptionsEditor/FieldOptionsEditor";
import Card from "../../../../basestyledcomponents/Card/Card";
import CardBody from "../../../../basestyledcomponents/Card/CardBody";
import CardHeader from "../../../../basestyledcomponents/Card/CardHeader";
import "../../../../../styles/w3.css";
import FormikMUISelectField from "../../../FormikFields/FormikMUISelect";

const useStyles = makeStyles({
  builderroot: {
    border: 1,
    borderColor: "black",
    padding: "10px",
    backgroundColor: "lightgrey",
  },
  addfieldcontainer: {
    backgroundColor: "white",
    padding: "10px",
  },
  addfielditem: {
    padding: "10px",
    flexGrow: 2,
  },
  fieldPreviewContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: "3",
    padding: "10px",
  },
});

export default function AddNewCustomField({ append, handleAddField }) {
  const { values } = useFormikContext();
  const { register, watch } = useFormContext();
  const classes = useStyles();
  const watchfieldtype = watch("new_field.type");

  return (
    <Grid direction={`column`}>
      <Grid item>
        <Divider />
        <Typography variant="h6">Create New Field</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column" justify="space-between">
          <Grid item className={classes.addfielditem}>
            <Typography variant="subtitle2">Field Type</Typography>
            <select name={`new_field.type`} ref={register}>
              <option value="">Choose Field Type</option>
              <option value="TextInput">string/Simple text</option>
              <option value="checkbox_group">
                checkbox group(Select multiple options)
              </option>
              <option value="radio">
                Radio select(Choose only 1 option from a group of options)
              </option>
              <option value="number">Number</option>
              <option value="textarea">Textarea/Long text</option>
              <option value="date">Date</option>
              <option value="present_not_present">Present/Not Present</option>
              <option value="normal_abnormal">Normal/Abnormal</option>
            </select>
          </Grid>
          <Grid item className={classes.addfielditem}>
            {watchfieldtype && (
              <FieldOptionsEditor
                fieldtype={watchfieldtype}
                handleAddField={handleAddField}
                append={append}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

/*
<CardFooter>
                <Button onClick={() => {props.handleAddField(props.methods)}}>Add Field</Button>
            </CardFooter>
<Grid item className={classes.addfielditem}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography variant="subtitle2">Field Preview:</Typography>
                                </Grid>
                                <Grid item>
                                    <Grid container className={`w3-border w3-padding`} direction="row">
                                        <Grid item xs={12}>
                                            <InputPreview className={classes.fieldPreviewContainer} input={{type: watchfieldtype, label: newfieldlabel}} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Grid>

<TextField fullWidth placeholder={`Enter Field Label`}
                                       inputRef={register} name="new_field_label"/>
<InputPreview input={{type: watchfieldtype}} />
<FieldOptionsEditor label={newfieldlabel} fieldtype={watchfieldtype} register={register} />
<Grid item className={classes.addfielditem}>
                        <FieldPreview label={newfieldlabel} fieldtype={`Test field type`} />
                    </Grid>
<Typography variant="subtitle2">Field Preview:</Typography>
 */
