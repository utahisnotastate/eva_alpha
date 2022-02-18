import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GridContainer from "../../components/basestyledcomponents/Grid/GridContainer";
import GridItem from "../../components/basestyledcomponents/Grid/GridItem";
import Card from "../../components/basestyledcomponents/Card/Card";
import CardHeader from "../../components/basestyledcomponents/Card/CardHeader";
import CardBody from "../../components/basestyledcomponents/Card/CardBody";
import Modal from "../../components/basestyledcomponents/Modal/modal";
import { Button, Typography } from "@material-ui/core";
// import applyNavs from "react-jsonschema-form-pagination";
import Form from "react-jsonschema-form";
import CreateCustomField from "../../components/Forms/FormsCenter/createCustomField";
import "./createmedicalchartform.css";
import { reviewofsystems } from "../../store/reducers/formscenter/MedicalAppointmentForm/medicalappointmentform.reducers";

const log = (type) => console.log.bind(console, type);

export default function CreateMedicalChartForm() {
  const dispatch = useDispatch();
  const schema = useSelector((state) => state.medicalappointmentformschema);
  let uiSchema = {
    vitals: {
      classNames: "card w3-padding",
      blood_pressure: {
        nav: "vitals",
        classNames: "",
      },
    },
    complaints: {
      nav: "complaints",
      classNames: "card w3-padding",
      items: {
        caused_by: {
          "ui:widget": "textarea",
        },
      },
    },
    reviewofsystems: {
      classNames: "card w3-padding",
      no_allergies: {
        nav: "reviewofsystems",
        classNames: "",
      },
      hiv: {
        nav: "reviewofsystems",
        classNames: "",
      },
    },
    physical_exam: {
      classNames: "card w3-padding",
      cardiovascular_exam: {
        nav: "Physical Exam",
      },
    },
    assessments: {
      classNames: "card w3-padding",
      assessments: {
        nav: "Assessments",
      },
    },
    treatment_plan: {
      classNames: "card w3-padding",
      treatment_plan: {
        nav: "Treatment Plan",
      },
    },
    attachments: {
      classNames: "card w3-padding",
      attachments: {
        nav: "Attachments",
      },
    },
    navConf: {
      classNames: "card w3-padding",
      navs: [
        {
          nav: "vitals",
          name: "Vitals",
        },
        {
          nav: "complaints",
          name: "Complaints",
        },
        {
          nav: "reviewofsystems",
          name: "Review of Systems",
        },
      ],
    },
  };
  return (
    <div style={{ padding: 15 }}>
      <GridContainer>
        <GridItem xs={10}>
          <Card>
            <CardHeader>Form Preview</CardHeader>
            <CardBody>
              <div></div>
              <Form
                schema={schema}
                uiSchema={uiSchema}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                onError={log("errors")}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={2}>
          <Card>
            <CardHeader>Add Template Inputs for Vitals Section</CardHeader>
            <CardBody>
              <GridContainer flexDirection={`column`} justify={`center`}>
                <ul className="w3-ul full-width">
                  <li
                    onClick={() => {
                      console.log("clicked!");
                      dispatch({
                        type: "add_field_to_medical_appointment_section",
                        section: "vitals",
                        field: "height",
                        newfield: { type: "string", title: "Height" },
                      });
                      uiSchema = {
                        ...uiSchema,
                        vitals: {
                          ...uiSchema.vitals,
                          height: {
                            ...uiSchema.vitals.height,
                            ...{ nav: "vitals" },
                          },
                        },
                      };
                      console.log(uiSchema.vitals);
                    }}
                  >
                    Add Height
                  </li>
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
              <GridContainer flexDirection={`column`}>
                <Modal
                  buttontext={`Create Custom Field`}
                  form={CreateCustomField}
                />
                <div>
                  <Modal buttontext={`Create Custom Group`} />
                </div>
                <div>
                  <Modal buttontext={`Add Image Upload Button`} />
                </div>
                <div>
                  <Modal buttontext={`Add Document Upload Button`} />
                </div>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

/*

 */
