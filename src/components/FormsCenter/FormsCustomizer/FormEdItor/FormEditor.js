import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {useArray} from "react-hanger";
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller, FormContext, FormProvider } from 'react-hook-form';
import {TextField, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../../basestyledcomponents/Button";
import Card from '../../../basestyledcomponents/Card/Card';
import CardHeader from '../../../basestyledcomponents/Card/CardHeader';
import CardBody from '../../../basestyledcomponents/Card/CardBody';
import FormFields from './FormFields/FormFields';
import {useParams, useRouteMatch, NavLink} from "react-router-dom";
import {updateForm, fetchForm} from "../../../../api/forms.api";
import FieldOptionsEditor from "./FormFields/FieldOptionsEditor/FieldOptionsEditor";
import EditorHeader from './EditorHeader/EditorHeader';
import EditorInput from './EditorInput/EditorInput';

const API_URL = "http://127.0.0.1:8000/api";

const useStyles = makeStyles({
    builderroot: {
        border: 1,
        borderColor: 'black',
       padding: '10px',
       // backgroundColor: 'lightgrey'
    },
    addfieldcontainer: {
            backgroundColor: 'white',
        padding: '10px'
    },
    addfielditem: {
        padding: '10px',
        flexGrow: 2,
    }
});

function NoOptionsField(props) {

}

export default function FormEditor(props) {
    const dispatch = useDispatch();
    let { path, url } = useRouteMatch();
    // let { formId } = useParams();
    const classes = useStyles();
    const formtitle = useSelector(state => state.formsmanager.newform.newformtitle);
    const [newfieldtype, setNewFieldType] = useState('');
    const formfields = useSelector(state => state.formsmanager.newform.newformfields);
    const textvalueoptions = useSelector(state => state.formsmanager.newform.newtextvalueoptions);
    const handleFormSave = (formData) => {
        console.log({...formData, ...{id: props.formId}});
        /*updateForm(props.formId, formData).then(response => {
            console.log('form response is: ' + JSON.stringify(response) );
            dispatch({type: 'update_form_title', newtitle: response.title})
            dispatch({type: 'update_form_type', newtype: response.form_type })
            if (response.form) {
                dispatch({type: 'load_form_fields', newformfields: response.form })
            } else {
                dispatch({type: 'load_form_fields', newformfields: {} })
            }
            // dispatch({type: 'load_form_fields', newformfields: response.form })
        })*/
    };
    const methods = useForm();
    // methods.setValue("form_title", props.title);
    // methods.setValue("form_type", props.type);
    const handleNewFieldTypeChange = event => {
        setNewFieldType(event.target.value);
    }

    const handleAddField = (methods) => {
        const values = methods.getValues();
        console.log('New Form Field Values are: ' + JSON.stringify(values));
        // console.log('New FOrm Field options is ' + values.new_field_options);
        const randomNumber = Math.floor((Math.random() * 10000) + 1);
        let fieldpropname = `customfield${randomNumber}`;
        let formField = {};
        formField[fieldpropname] = {
            label: values.new_field_label,
            type: values.new_field_type
        }
        console.log(formField);
        dispatch({type: 'add_field', newfield: formField});

    }
    useEffect(() => {
        console.log('Calling fetch form now!');
        fetchForm(props.formId).then(response => {
            console.log('Form editor API call is: ' + JSON.stringify(response));
            dispatch({type: 'update_form_title', newtitle: response.title})
            methods.setValue("form_title", response.title);
            dispatch({type: 'update_form_type', newtype: response.form_type })
            methods.setValue("form_type", response.form_type)
            if(response.form) {
                dispatch({type: 'load_form_fields', newformfields: response.form })
                methods.setValue("form", response.form_type)
            } else {
                dispatch({type: 'load_form_fields', newformfields: {} })
                methods.setValue("form", {})
            }
        })
    }, [props.formId, dispatch])
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleFormSave)}>
                <Grid container direction={`column`}>
                    <Grid item>
                        <Card>
                            <CardBody>
                                <Grid container direction="column">
                                    <Grid item>
                                        <TextField inputRef={methods.register} name={`form_title`} variant={`outlined`} />
                                    </Grid>
                                    <Grid item>
                                        <select  name="form_type" ref={methods.register}>
                                            <option value="">Select Form Type</option>
                                            <option value="physical_exam">Physical Exam</option>
                                            <option value="review_of_systems">Review Of Systems</option>
                                            <option value="medical_history">Medical History</option>
                                        </select>
                                    </Grid>
                                </Grid>

                            </CardBody>
                        </Card>

                    </Grid>
                    <Grid item>
                        <FormFields formfields={formfields} />
                    </Grid>
                    <Grid item>
                        <EditorInput methods={methods} handleAddField={handleAddField} />
                    </Grid>
                    <Grid item>
                        <Grid container direction={`row`} justify={`space-between`}>
                            <Grid item>
                                <input type="submit"/>
                            </Grid>
                            <Grid item>
                                <Button color={`danger`}>Delete</Button>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </form>
        </FormProvider>
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