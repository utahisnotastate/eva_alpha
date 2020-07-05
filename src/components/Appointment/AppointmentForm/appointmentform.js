import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import API_URL from "../../../api/api_url";
import {useParams, useRouteMatch, Switch, Route, Link, NavLink} from "react-router-dom";
//import FormGenerator from '../../FormsCenter/FormGenerator/FormGenerator.js'
import Card from '../../basestyledcomponents/Card/Card.js';
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";
import FormTemplate from './appointmentformtemplate.js';
import './appointmentform.css';



export default function AppointmentForm(props) {
    let { formId } = useParams();
    const dispatch = useDispatch();
    const [appointmentform, setForm] = useState({});
    const formfields = useSelector(state => state.appointment.appointmentformfields);
    const getAppointmentForm = async(appointmentId, formId) => {
        const result = await axios(`${API_URL}/appointments/${appointmentId}/forms/${formId}/`)
        return result.data;
    }

    useEffect(() => {
        //check if appointment has any forms associated with it
        getAppointmentForm(props.appointmentId, formId).then(result => {
            console.log('form id response is ' + JSON.stringify(result));
            // setTitle(result.title);
            setForm(result);
            // setFormFields(result.form);
            dispatch({type: 'load_appointment_form_fields', fields: result.form})
        });
    }, [props.appointmentId,formId]);

    return (
        <Card>
            <CardHeader color={`primary`}>
                <h4>{appointmentform.title}</h4>
                <h4>{appointmentform.form_type}</h4>
            </CardHeader>
            <CardBody>
                <FormTemplate  appointmentform={appointmentform} formfields={formfields} />
            </CardBody>
        </Card>
    )
}

/*
<Card>
            <CardHeader color={`primary`}>
                <h4>{title}</h4>
            </CardHeader>
            <CardBody>
                <FormGenerator formfields={form} />
            </CardBody>
        </Card>
 */