import React, {useState, useEffect} from "react";
// import { createSchema, Autoform } from 'react-hook-form-auto';
import {useParams, useRouteMatch, Switch, Route, Link, NavLink} from "react-router-dom";
import FormGenerator from '../FormsCenter/FormGenerator/FormGenerator.js'
import Card from '../basestyledcomponents/Card/Card.js';
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CardBody from "../basestyledcomponents/Card/CardBody";
import {getAppointmentForm} from '../../api/appointment.api.js';
import './appointmentform.css';

import Form from "react-jsonschema-form";
import {getAppointmentForms} from "../../api/appointment.api";
import {fetchAllForms} from "../../api/forms.api";
// import MuiForm from 'rjsf-material-ui';

export default function AppointmentForm(props) {

    let { formid } = useParams();
    const [title, setTitle] = useState('')
    const [form, setForm] = useState({});

    useEffect(() => {
        //check if appointment has any forms associated with it
        getAppointmentForm(props.appointmentId, formid).then(result => {
            console.log('form id response is ' + JSON.stringify(result));
            setTitle(result.title);
            setForm(result.findings);
        })


    }, []);
    return (

        <Card>
            <CardHeader color={`primary`}>
                <h4>{title}</h4>
            </CardHeader>
            <CardBody>
                <FormGenerator formfields={form} />
            </CardBody>
        </Card>
    )
}