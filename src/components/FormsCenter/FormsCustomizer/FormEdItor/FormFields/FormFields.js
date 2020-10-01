import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { useForm, Controller, useFieldArray, useFormContext } from 'react-hook-form';
// import {fetchFormFields} from "../../../../../api/forms.api";
import {TextField,Checkbox, Typography,FormControl, FormControlLabel,FormLabel,FormGroup, InputLabel,RadioGroup,Radio, Input} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Button from "../../../../basestyledcomponents/Button";
import Card from '../../../../basestyledcomponents/Card/Card';
import CardBody from '../../../../basestyledcomponents/Card/CardBody';
import CardHeader from '../../../../basestyledcomponents/Card/CardHeader';
import FormFieldLabel from "./FormFieldLabel";
import FormFieldActions from "./FormFieldActions/FormFieldActions";
import FormFieldOptions from "./FormFieldOptions";
import InputPreview from '../FieldPreview/InputPreview/InputPreview';
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";

const useStyles = makeStyles({
    formrowcontainer: {
        margin: '5px',
    },
    fieldcontainer: {
        padding: '15px',
    },
    fullsize: {
        width: '100%',
    },
    fieldlabelcontainer: {
        padding: '10px',
        margin: '10px',
    }
})

function NoFieldsToDisplay() {
    return (
        <Typography>This form currently has no fields. Try creating a custom field in the box below to get started.</Typography>
    )
}

export default function FormFields(props) {
    const dispatch = useDispatch();
    let { formId } = useParams();
    const { control, register, watch } = useFormContext();
    const classes = useStyles();
    const customfields = props.customfields;



    return (

        <Grid container direction="column">
            <Grid item>
                <Card>
                    <CardHeader>
                        <Typography variant="h6">Form fields</Typography>
                    </CardHeader>
                </Card>
            </Grid>
            {customfields.length > 0 ? customfields.map((field, index) => (

                <div key={field.id}>
                    <Grid item>
                    <Card className={classes.fieldcontainer}>
                        <Grid container direction="column">
                            <Grid item>
                                <Button color="danger" onClick={() => props.handleDeleteFIeld(index)}>X</Button>
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    control={<TextField
                                        fullWidth
                                        inputRef={register()}
                                        name={`customformfields[${index}].label`}
                                        defaultValue={field.label}
                                    />}
                                    className={classes.fullsize}
                                    label={`Field Label`}
                                    labelPlacement={`start`}

                                />
                            </Grid>
                            <Grid item>
                                <InputPreview input={{
                                    label: watch(`customformfields[${index}].label`),
                                    fieldindex: index,
                                    type: field.type,
                                    choices: customfields[index]['choices']
                                }}/>
                            </Grid>
                        </Grid>

                    </Card>

                </Grid></div>

            )):(<Typography>No form fields yet</Typography>)}



        </Grid>

    )
}
/*
{ formfields ? (<NoFieldsToDisplay />) : formfields.map(field => {
                        console.log('field label is ' + field.label);
                        console.log('field type is ' + field.type);
                        return (
                            <div key={field}>
                                <Grid key={field} item xs={12}>
                                    <Grid container direction={`row`} className={classes.formrowcontainer}>
                                        <FormFieldLabel index={field} label={field.label}/>
                                        <FormFieldOptions index={field} type={field.type} field_options={field.choices}/>
                                        <FormFieldActions index={field}  />
                                    </Grid>
                                    <Grid container direction={`column`} className={classes.formrowcontainer}>
                                        <div>
                                            <h3>Field Preview</h3>
                                        </div>
                                        <FieldPreview label={field.label} />
                                    </Grid>
                                </Grid>
                            </div>
                        );
                    }) }

useEffect(() => {
        fetchFormFields(formId).then(response => {
            dispatch({type: 'load_updated_array', newarray: response})
        })
    }, [])
    Object.entries(form).map((field, index) => {
            console.log('field ' + JSON.stringify(field));
            return (
                <div key={index}>
                    <Grid key={index} item xs={12}>
                        <Grid container direction={`row`} className={classes.formrowcontainer}>
                            <FormFieldLabel index={index} label={field.label}/>
                            <FormFieldOptions index={index} type={field.type} field_options={field.field_options}/>
                            <FormFieldActions index={index}  />
                        </Grid>
                    </Grid>
                </div>
            );
        })


for (let [prop, field] of Object.entries(form)) {
            console.log(prop, field.label);
            return (
                <div key={prop}>
                    <Grid key={prop} item xs={12}>
                        <Grid container direction={`row`} className={classes.formrowcontainer}>
                            <FormFieldLabel index={prop} label={field.label}/>
                            <FormFieldOptions index={prop} type={field.type} field_options={field.field_options}/>
                            <FormFieldActions index={prop}  />
                        </Grid>
                    </Grid>
                </div>
            );
        }
    */