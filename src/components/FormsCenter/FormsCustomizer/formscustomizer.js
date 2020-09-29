import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import GridContainer from "../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../basestyledcomponents/Grid/GridItem";
import Card from "../../basestyledcomponents/Card/Card";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";
import Modal from "../../basestyledcomponents/Modal/modal";
import {fetchForm} from "../../../api/forms.api";
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




    return (
        <div style={{padding: 15}}>
            <FormEditor formId={formId}/>
        </div>
    )
}

/*
<GridContainer justify>
                <GridItem xs={12}>
                            <FormEditor formId={formId}/>
                </GridItem>

            </GridContainer>
    // console.log(formId);
    // const formtitle = useSelector(state => state.formsmanager.newform.newformtitle);
    const [formtitle, setFormTitle] = useState("");
    const formtype = useSelector(state => state.formsmanager.newform.newformtype);
    const formfields = useSelector(state => state.formsmanager.newform.newformfields);


    useEffect(() => {

        fetchForm(formId).then(response => {
            console.log('form response is: ' + JSON.stringify(response));
            setFormTitle(response.title);
            // dispatch({type: 'update_form_title', newtitle: response.title})
            dispatch({type: 'update_form_type', newtype: response.form_type })
            if (response.form) {
                dispatch({type: 'load_form_fields', newformfields: response.form })
            } else {
                dispatch({type: 'load_form_fields', newformfields: {} })
            }
            // dispatch({type: 'load_form_fields', newformfields: response.form })
        })
    },[formId]);


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

                </GridItem>

<Card>
                        <CardBody>
                            <FormEditor title={formtitle} type={formtype} formfields={formfields}/>
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

const fetchFormInfo = async () => {
            const result = await axios(`${API_URL}/forms/${formId}/`);
            return result.data;
        }
    const schema = useSelector(state => state[formId][`${formId}schema`]);
    const uiSchema = useSelector(state => state[formId][`${formId}uischema`]);

                            <Form schema={schema}
                                  uiSchema={uiSchema}
                                  onChange={log("changed")}
                                  onSubmit={log("submitted")}
                                  onError={log("errors")}
                            />
 */