import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { useForm, Controller } from 'react-hook-form';
// import {fetchFormFields} from "../../../../../api/forms.api";
import Grid from "@material-ui/core/Grid";
import {TextField, Typography} from "@material-ui/core";
import FormFieldLabel from "./FormFieldLabel";
import FormFieldActions from "./FormFieldActions/FormFieldActions";
import FormFieldOptions from "./FormFieldOptions";
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";

const useStyles = makeStyles({
    formrowcontainer: {
        margin: '5px',
    }
})


export default function FormFields(props) {
    const dispatch = useDispatch();
    let { formId } = useParams();
    const classes = useStyles();
    const formfields = useSelector(state => state.formsmanager.newform.newformfields);
    console.log(formfields);

    return (
        <Grid container direction={`column`}>
            { Object.keys(formfields).map(field => {
                console.log('field label is ' + formfields[field].label);
                console.log('field type is ' + formfields[field].type);
                return (
                    <div key={field}>
                        <Grid key={field} item xs={12}>
                            <Grid container direction={`row`} className={classes.formrowcontainer}>
                                <FormFieldLabel index={field} label={formfields[field].label}/>
                                <FormFieldOptions index={field} type={formfields[field].type} field_options={formfields[field].field_options}/>
                                <FormFieldActions index={field}  />
                            </Grid>
                        </Grid>
                    </div>
                );
            }) }
        </Grid>
    )
}
/*    useEffect(() => {
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