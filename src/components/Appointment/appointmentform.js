import React from "react";
// import { createSchema, Autoform } from 'react-hook-form-auto';
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import './appointmentform.css';

import Form from "react-jsonschema-form";
import MuiForm from 'rjsf-material-ui';

export default function AppointmentForm({onSubmit, schema, label}) {
    return (

        <>
            <CardHeader color={`primary`}>
                <h4>{label}</h4>
            </CardHeader>
            <MuiForm schema={schema.schema}  uiSchema={schema.uiSchema}/>
        </>
    )
}