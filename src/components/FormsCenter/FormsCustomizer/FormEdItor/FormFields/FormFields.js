import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { useForm, Controller } from 'react-hook-form';
// import {fetchFormFields} from "../../../../../api/forms.api";
import Grid from "@material-ui/core/Grid";
import {TextField, Typography} from "@material-ui/core";
import Card from '../../../../basestyledcomponents/Card/Card'
import CardBody from '../../../../basestyledcomponents/Card/CardBody';
import CardHeader from '../../../../basestyledcomponents/Card/CardHeader';
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

function FieldPreview(props) {
    return (
        <div>
            <p>{props.label}</p>
        </div>
    );
}
function NoFieldsToDisplay() {
    return (
        <Typography>This form currently has no fields. Try creating a custom field in the box below to get started.</Typography>
    )
}

export default function FormFields(props) {
    const dispatch = useDispatch();
    let { formId } = useParams();
    const classes = useStyles();
    const formfields = useSelector(state => state.formsmanager.newform.newformfields);
    console.log(formfields);

    return (
        <Card>
            <CardHeader>
                <Typography variant="h6">Form fields</Typography>
            </CardHeader>
            <CardBody>
                <Grid container direction={`column`}>
                    { Object.keys(formfields) ? (<NoFieldsToDisplay />) : Object.keys(formfields).map(field => {
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
                                    <Grid container direction={`column`} className={classes.formrowcontainer}>
                                        <div>
                                            <h3>Field Preview</h3>
                                        </div>
                                        <FieldPreview label={formfields[field].label} />
                                    </Grid>
                                </Grid>
                            </div>
                        );
                    }) }
                </Grid>
            </CardBody>
        </Card>

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