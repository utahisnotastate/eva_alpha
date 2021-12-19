import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormContext,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
import { TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../../basestyledcomponents/Button";
import Card from "../../../basestyledcomponents/Card/Card";
import CardHeader from "../../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../../basestyledcomponents/Card/CardBody";
import FormFields from "./FormFields/FormFields";
import { useParams, useRouteMatch, NavLink } from "react-router-dom";
import { updateForm, fetchForm } from "../../../../api/forms.api";
import FieldOptionsEditor from "./FormFields/FieldOptionsEditor/FieldOptionsEditor";
import EditorHeader from "./EditorHeader/EditorHeader";
import AddNewCustomField from "./EditorInput/AddNewCustomField";
import FormPreview from "../../FormPreview/formpreview";

const API_URL = "http://127.0.0.1:8000/api";

const useStyles = makeStyles({
  builderroot: {
    border: 1,
    borderColor: "black",
    padding: "10px",
    // backgroundColor: 'lightgrey'
  },
  addfieldcontainer: {
    backgroundColor: "white",
    padding: "10px",
  },
  addfielditem: {
    padding: "10px",
    flexGrow: 2,
  },
  formTitle: {
    padding: "15px",
  },
  formTypeSelectContainer: {
    marginTop: "5px",
  },
});

function NoOptionsField(props) {}

export default function FormEditor(props) {
  const dispatch = useDispatch();
  const formtitle = useSelector(
    (state) => state.formsmanager.newform.newformtitle
  );
  const formtype = useSelector(
    (state) => state.formsmanager.newform.newformtype
  );
  const customfields = useSelector(
    (state) => state.formsmanager.newform.newformfields
  );
  const defaultValues = {
    form_title: formtitle,
    form_type: formtype,
    customformfields: [],
    new_checkbox_field: "",
    new_field: {
      type: "",
      label: "",
    },
  };

  const methods = useForm({
    defaultValues,
  });

  let { path, url } = useRouteMatch();
  let { formId } = useParams();
  const classes = useStyles();

  const handleFormSave = (formData) => {
    const formValues = methods.getValues();
    console.log(formData);

    updateForm(props.formId, formData).then((response) => {
      console.log("form response is: " + JSON.stringify(response));
      dispatch({ type: "update_form_title", newtitle: response.title });
      dispatch({ type: "update_form_type", newtype: response.form_type });
      if (response.form) {
        console.log(response.form.customformfields);
        dispatch({
          type: "load_form_fields",
          newformfields: response.form.customformfields,
        });
      } else {
        dispatch({ type: "load_form_fields", newformfields: [] });
      }
      // dispatch({type: 'load_form_fields', newformfields: response.form })
    });
  };

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
      name: "customformfields", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );

  // const watchformfields = methods.watch('customformfields', fields);

  const resetNewFieldInput = () => {
    methods.setValue("new_field.type", "");
    methods.setValue("new_field.label", "");
  };

  const handleAddField = (fieldinput) => {
    //get the values of the label

    //setup object to store the values of the fields into
    let fieldToBeAdded = {
      label: fieldinput.label,
      type: fieldinput.type,
      checked: false,
      value: null,
      additionalnotes: null,
    };

    //check to see if the field allows any custom choices
    let choices = fieldinput.choices;

    if (choices) {
      let fieldchoices = [];
      // the form editor depends on the choice being an object with a label property. Create an object with the label propery for each choice
      choices.forEach((choice) => {
        //let choicekey = Object.keys(choice)
        let choicelabel = { label: choice.label };
        console.log(choicelabel);
        fieldchoices.push(choicelabel);
      });
      fieldToBeAdded.choices = fieldchoices;
      console.log(
        "New Form Field Values are: " + JSON.stringify(fieldToBeAdded)
      );
      // dispatch({type: 'add_field', newfield: fieldToBeAdded});
      append(fieldToBeAdded);
      resetNewFieldInput();
    } else {
      //console.log('New Form Field Values are: ' + JSON.stringify(fieldToBeAdded));
      console.log(fieldToBeAdded);
      append(fieldToBeAdded);
      //dispatch({type: 'add_field', newfield: fieldToBeAdded});
      resetNewFieldInput();
    }
  };
  const handleDeleteFIeld = (index) => {
    remove(index);
  };

  const resetForm = () => {
    methods.reset();
  };
  useEffect(() => {
    console.log("Calling fetch form now!");
    fetchForm(formId).then((response) => {
      console.log("Form editor API call is: " + JSON.stringify(response));
      dispatch({ type: "update_form_title", newtitle: response.title });
      methods.setValue("form_title", response.title);
      dispatch({ type: "update_form_type", newtype: response.form_type });
      methods.setValue("form_type", response.form_type);
      if (response.form.customformfields) {
        console.log("response form is: " + JSON.stringify(response.form));
        dispatch({
          type: "load_form_fields",
          newformfields: response.form.customformfields,
        });
        append(response.form.customformfields);
        //methods.setValue("customformfields", response.form.customformfields)
      } else {
        dispatch({ type: "load_form_fields", newformfields: [] });
        //methods.setValue("customformfields", [])
      }
    });
  }, [formId]);

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSave)}>
          <Grid container direction={`column`}>
            <Grid item>
              <Card>
                <CardHeader>
                  <Grid container justify={`flex-end`}>
                    <Grid item>
                      <Typography variant="h2">
                        MAKE SURE FORM IS SAVED BEFORE PREVIEWING
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        color={`primary`}
                        onClick={methods.handleSubmit(handleFormSave)}
                      >
                        Save Form
                      </Button>
                    </Grid>

                    <Grid item>
                      <NavLink to={`/formscenter/${formId}/preview/`}>
                        <Button color={`primary`}>Preview Form</Button>
                      </NavLink>
                    </Grid>
                  </Grid>
                </CardHeader>
                <CardBody>
                  <Grid container direction="column">
                    <Grid item>
                      <TextField
                        className={classes.formTitle}
                        label={`Form Title`}
                        fullWidth
                        inputRef={methods.register}
                        name={`form_title`}
                        variant={`standard`}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>Form type</Typography>
                      <select
                        className={classes.formTypeSelectContainer}
                        name="form_type"
                        ref={methods.register}
                      >
                        <option value="">Select Form Type</option>
                        <option value="physical_exam">Physical Exam</option>
                        <option value="review_of_systems">
                          Review Of Systems
                        </option>
                        <option value="medical_history">Medical History</option>
                      </select>
                    </Grid>
                  </Grid>
                </CardBody>
              </Card>
            </Grid>
            <Grid item>
              <FormFields
                customfields={fields}
                handleDeleteFIeld={handleDeleteFIeld}
              />
            </Grid>
            <Grid item>
              <AddNewCustomField
                methods={methods}
                handleAddField={handleAddField}
                append={append}
              />
            </Grid>
            <Grid item>
              <Grid container direction={`row`} justify={`space-between`}>
                <Grid item>
                  <input type="submit" />
                </Grid>
                <Grid item>
                  <Button color={`danger`}>Delete Form</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
}

/*
<EditorHeader formId={props.formId}  />
fetchFormFields(formId).then(response => {
            dispatch({type: 'load_updated_array', newarray: response})
        })

<Grid item>
                        <Grid container direction={`column`} className={classes.addfieldcontainer}>
                            <Grid item>
                                <FormFields formfields={formfields} />
                            </Grid>

                        </Grid>
                    </Grid>
className={classes.builderroot}
<Grid item>
                        <Grid container direction={`row`} justify={`space-between`}>
                            <Controller
                                name={`form_title`}
                                as={<TextField variant={`outlined`}  />}
                                control={methods.control}
                                        />
                            <NavLink to={`/formscenter/${formId}/preview`}>
                                <Button color={`primary`}>Preview Form</Button>
                            </NavLink>
                        </Grid>
                    </Grid>
 <Grid item>
                        <select  name="form_type" ref={methods.register}>
                            <option value="">Select Form Type</option>
                            <option value="physical_exam">Physical Exam</option>
                            <option value="review_of_systems">Review Of Systems</option>
                            <option value="medical_history">Medical History</option>
                        </select>
                    </Grid>
                    <Grid item className={classes.addfielditem}>
                                        <TextField fullWidth variant={`outlined`} placeholder={`Enter Field Label`}
                                               defaultValue={``} inputRef={methods.register} name="new_field_label"/>
                                    </Grid>

                                    <Grid item>
                                <Grid container direction={`row`}>
                                    <Grid item className={classes.addfielditem}>
                                        <Typography>Choose Field Type</Typography>
                                        <select name={`new_field_type`} value={newfieldtype} onChange={handleNewFieldTypeChange} ref={methods.register}>
                                            <option value="">Choose Field Type</option>
                                            <option value="TextInput">string</option>
                                            <option value="checkbox">checkbox</option>
                                            <option value="checkbox_group">checkbox group(Select multiple options)</option>
                                            <option value="radio_with_text">Radio With Text options</option>
                                            <option value="radio_with_numbers">Radio With Number options</option>
                                            <option value="number">number</option>
                                            <option value="textarea">textarea</option>
                                            <option value="select">select</option>
                                            <option value="date">Date</option>
                                            <option value="present_not_present">Present/Not Present</option>
                                            <option value="normal_abnormal">Normal/Abnormal</option>
                                        </select>
                                    </Grid>
                                    <Grid item className={classes.addfielditem}>
                                        <Typography>Field Options:</Typography>
                                        <FieldOptionsEditor type={newfieldtype} register={methods.register} />
                                    </Grid>
                                    <Grid item className={classes.addfielditem}>
                                        <Button onClick={() => {handleAddField(methods)}}>Add Field</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
function FieldOptionsEditor(props) {
    switch(props.type) {
        case 'checkbox_group':
            return <TextField name={`new_field_options`} inputRef={props.register} multiline helperText={`Enter field options seperated by semicolon(;) aka option1;option2;option3;... `} />
        case 'radio':
            return <TextField name={`new_field_options`} inputRef={props.register}  multiline helperText={`Enter field options seperated by semicolon(;) aka option1;option2;option3;... `} />
        default:
            return <TextField name={`new_field_options`} inputRef={props.register} variant={`filled`} disabled helperText={`No options available for this type of field`} value={false} />;
    }
}

    const { register, errors, handleSubmit, setValue, control, getValues } = useForm({
    });
                        <TextField fullWidth defaultValue={formtitle}  variant={`outlined`} label={<Typography>Enter Form Title</Typography>} inputRef={register} name={`form_title`} />

 */

/*
<Button onClick={() => {
                                            const values = methods.getValues()
                                            let newitem = {
                                                label: values.new_field_label,
                                                type: values.new_field_type,
                                                options: values.new_field_options,
                                            }
                                            // console.log(values);
                                            console.log('new item is ' + newitem);
                                            console.log(typeof newitem.options);
                                            if(!newitem.options) {
                                                console.log(`options are undefined`);
                                                /*console.log(typeof newitem.options);
                                                addSimpleNewFormField(formId, {
                                                    label: values.new_field_label,
                                                    type: values.new_field_type,
                                                }).then(response => {
                                                    fetchFormFields(formId).then(response => {
                                                        console.log(response);
                                                        dispatch({type: 'load_updated_array', newarray: response})
                                                    });
                                                })
} else {
    console.log('That field has options!');
}
/*addNewFormField(formId, {
    label: values.new_field_label,
    type: values.new_field_type,
}).then(response => {
    fetchFormFields(formId).then(response => {
        dispatch({type: 'load_updated_array', newarray: response})
    })
})
// dispatch({type: 'add_field', newfield: newitem});
// console.log(props.formfields);

}}>Add Field</Button>

const handleAddField = (methods) => {
        const values = methods.getValues();
        console.log('New Form Field Values are: ' + JSON.stringify(values));
        // console.log('New FOrm Field options is ' + values.new_field_options);
        const formField = {
            label: values.new_field_label,
            type: values.new_field_type
        }

        if (values.new_field_type === 'TextInput') {
            console.log("It's text input!!");
            addSimpleNewFormField(formId, formField ).then(response => {
                console.log(response);
                fetchFormFields(formId).then(response => {
                    dispatch({type: 'load_updated_array', newarray: response})
                    methods.setValue("new_field_label", '');
                    methods.setValue("new_field_type", '');
                })
            })
        }
        else if( values.new_field_type === "radio_with_text") {
                addNewFormFieldWithOptions(formId, formField, textvalueoptions).then(response => {
                    console.log(response);
                    fetchFormFields(formId).then(response => {
                        dispatch({type: 'load_updated_form', newarray: response})
                        methods.setValue("new_field_label", '');
                        methods.setValue("new_field_type", '');
                        dispatch({type: 'reset_options_to_none'})
                    })
                })
        }
        else {
            console.log("It's something else!!");
        }

    }
 */
