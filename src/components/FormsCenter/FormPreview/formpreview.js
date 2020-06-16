import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {useArray} from "react-hanger";
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller, FormContext } from 'react-hook-form';
import {fetchForm} from "../../../api/forms.api";
import {TextField, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../basestyledcomponents/Button";
// import FormFields from './FormFields/FormFields';
import {useParams, useRouteMatch, NavLink} from "react-router-dom";
import Card from "../../basestyledcomponents/Card/Card";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";
import CardFooter from "../../basestyledcomponents/Card/CardFooter";
import FormGenerator from "../FormGenerator/FormGenerator";

const API_URL = "http://127.0.0.1:8000/api";

export default function FormPreview(props) {
    const dispatch = useDispatch();
    let { path, url } = useRouteMatch();
    let { formId } = useParams();
    const [title, setTitle] = useState('');
    const [fields, setFields] = useState({});
    // const previewtitle = useSelector(state => state.formsmanager.formpreview.previewtitle);
    // const previewfields = useSelector(state => state.formsmanager.formpreview.previewfields);
    console.log('form preview url is: ' + url);

    useEffect(() => {

        fetchForm(formId).then(response => {
            console.log(response);
            setTitle(response.title);
            setFields(response.form);
            // dispatch({type: 'update_preview_title', title: response.title})
            /*fetchFormFields(formId).then(response => {
                dispatch({type: 'load_fields', fields: response});
            })*/

        })
    }, []);
    return (
        <Grid container>
            <Grid item xs={10}>
                <Card>
                    <CardHeader color={`primary`}>
                        <h4>{title}</h4>
                    </CardHeader>
                    <CardBody>
                        <FormGenerator formfields={fields}/>
                    </CardBody>
                    <CardFooter>
                        <NavLink to={`/formscenter/${formId}/edit`}>
                            <Button color={`primary`}>Back to form editor</Button>
                        </NavLink>
                    </CardFooter>
                </Card>
            </Grid>
        </Grid>
    );
}

/*
const fetchFormDetails = async () => {
            const result = await axios(`${API_URL}/forms/${formId}/`);
            return result.data;
        };
 */