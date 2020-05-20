import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import {fetchFormFields} from "../../../../../api/forms.api";
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
    console.log(props.formfields);
    console.log('Length: ' + props.formfields.length);

    useEffect(() => {
        fetchFormFields(formId).then(response => {
            dispatch({type: 'load_updated_array', newarray: response})
        })
    }, [])

    return (
        <Grid container direction={`column`}>
            {  props.formfields.map((formfield, index) => {
                return (
                    <div key={index}>
                        <Grid key={index} item xs={12}>
                        <Grid container direction={`row`} className={classes.formrowcontainer}>
                            <FormFieldLabel index={index} label={formfield.label}/>
                            <FormFieldOptions index={index} type={formfield.type} field_options={formfield.field_options}/>
                            <FormFieldActions index={index} formfields={props.formfields} length={props.formfields.length} />
                        </Grid>
                    </Grid>
                    </div>
                );
            }) }
        </Grid>
    )
}