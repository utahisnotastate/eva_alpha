import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import GridContainer from "../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../basestyledcomponents/Grid/GridItem";
import Card from "../../basestyledcomponents/Card/Card";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";
import Modal from "../../basestyledcomponents/Modal/modal";
import {Button, Typography} from "@material-ui/core";
import Form from "react-jsonschema-form";
import CreateCustomField from "../../Forms/FormsCenter/createCustomField";
import {useParams} from "react-router-dom";
import FormEditor from "./FormEdItor/FormEditor";
import './formscustomizer.css'
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

const log = (type) => console.log.bind(console, type);

export default function FormsCustomizer(props) {
    const dispatch = useDispatch();
    let { formId } = useParams();
    console.log(formId);
    const formtitle = useSelector(state => state.formsmanager.newform.newformtitle);
    const formtype = useSelector(state => state.formsmanager.newform.newformtype);
    const formfields = useSelector(state => state.formsmanager.newform.newformfields);

    useEffect(() => {
        const fetchFormInfo = async () => {
            const result = await axios(`${API_URL}/forms/${formId}/`);
            return result.data;
        }
        fetchFormInfo().then(response => {
            console.log('form response is: ' + response.title);
            dispatch({type: 'update_form_title', newtitle: response.title})
            dispatch({type: 'update_form_type', newtype: response.form_type })
        })
    },[]);

    return (
        <div style={{padding: 15}}>
            <GridContainer>
                <GridItem xs={10}>
                    <Card>
                        <CardBody>
                            <FormEditor title={formtitle} type={formtype} formfields={formfields}/>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={2}>
                    <Card>
                        <CardHeader>Add Template Inputs</CardHeader>
                        <CardBody>
                            <GridContainer direction={`column`} justify={`center`}>
                                <ul className="w3-ul full-width">
                                    <li onClick={() => {
                                    }}>Add Height</li>
                                    <li>Add Temperature</li>
                                    <li>Add Pulse</li>
                                    <li>Add Weight</li>
                                    <li>Add Oxygen</li>
                                </ul>
                            </GridContainer>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>Add Custom Form Inputs</CardHeader>
                        <CardBody>
                            <GridContainer direction={`column`}>
                                <Modal buttontext={`Create Custom Field`} form={CreateCustomField}/>
                                <div>
                                    <Modal buttontext={`Create Custom Group`}/>
                                </div>
                                <div>
                                    <Modal buttontext={`Add Image Upload Button`}/>
                                </div>
                                <div>
                                    <Modal buttontext={`Add Document Upload Button`}/>
                                </div>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}

/*
    const schema = useSelector(state => state[formId][`${formId}schema`]);
    const uiSchema = useSelector(state => state[formId][`${formId}uischema`]);

                            <Form schema={schema}
                                  uiSchema={uiSchema}
                                  onChange={log("changed")}
                                  onSubmit={log("submitted")}
                                  onError={log("errors")}
                            />
 */