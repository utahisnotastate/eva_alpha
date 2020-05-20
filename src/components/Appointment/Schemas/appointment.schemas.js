import React from "react";
import OnsetField from "../../basestyledcomponents/CustomJSONComponents/onset";
import {Typography} from "@material-ui/core";
import NewComplaint from "../Complaints/NewComplaint/NewComplaint";

const appointmentschema = {
    complaints: [],
    reviewofsystems:[],
    reviewofsystemsfindings: [],
    physicalexam: [],
    physicalexamfindings: [],
    assessments: [],
    plans: [],
    followups: [],
    summary: '',

}

function ArrayFieldTemplate(props) {
    return (
        <div>
            <Typography>Complaints</Typography>
            {props.items.map(element => element.children)}
            {props.canAdd && <button type="button" onClick={props.onAddClick}>Add Complaint</button>}
        </div>
    );
}
export const complaintsUISchema = {
    "items": {
        classNames: "w3-col s12",
        complaint: {
            classNames: "w3-row",
            clinical_complaint: {
                classNames: "w3-col s4",
                "ui:field": "complaint",

            },
            complaint_description: {
                classNames: "w3-col s4",
                "ui:widget": "textarea",
            }
        },
        "onset": {
            classNames: "w3-row",
            number: {
                classNames: "w3-col s4",
                "ui:field": "number",

            },
            unit: {
                classNames: "w3-col s4",
            }
        },
        patients_belief_of_cause: {
            "ui:widget": "textarea"
        },
        other_patient_comments: {
            "ui:widget": "textarea",
        },
    },

}
// "ui:field": "complaint",

const complaintsUIfields = {
    onset: OnsetField,
    complaint: NewComplaint,
}


export const complaintsSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "complaint": {
                "type": "object",
                "properties":{
                    "clinical_complaint": {
                        "type": "string",
                        default: 'test',
                    },
                    "complaint_description": {
                        "type": "string",
                    }
                },
                "title": "Complaint"
            },
            "onset": {
                "type": "object",
                "properties": {
                    "number": {
                        "type": "number",
                        default: 3
                    },
                    "unit": {
                        "type": "string",
                        "enum": [
                            "Day",
                            "Week",
                            "Month",
                            "Year"
                        ]
                    }
                }
            },
            "location": {
                "type": "string",
                "description": "Location",
                "enum": [
                    "head",
                    "rightupperextremity",
                    "leftupperextremity",
                    "chest",
                    "stomach",
                    "rightlowerextremity",
                    "leftlowerextermity",
                    "groin"
                ],
                "enumDesc": "Choose the location of the issue"
            },
            "patients_belief_of_cause": {
                "type": "string",
                "description": "What patient believes caused this"
            },
            "other_patient_comments": {
                "type": "string",
                "description": "Other Patients Comments not listed"
            },
            "worseorbetter": {
                "type": "string",
                "description": "Getting worse, better, or unchanged with time",
                "enum": [
                    "Getting Worse",
                    "Getting Better",
                    "Unknown",
                    "Unchecked"
                ],
                "default": "Unchecked"
            }
        },
        "required": []
    },
    "title": "Complaints"
}


export const AppointmentComplaintsForm = {
    schema: complaintsSchema,
    uiSchema: complaintsUISchema,
    fields: complaintsUIfields,
    ArrayFieldTemplate: ArrayFieldTemplate,
}

/*
complaint: {
            "ui:field": "asynctypeahead",
            asynctypeahead: {
                "overrideOptions": false,
                url: 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?sf=primary_name,consumer_name,icd10cm&terms=',
                search: (url, query) =>  onSuggestionsFetchRequested(url, query),
                labelKey: (option) => `${option}`,
            }

        },
const complaint = {
    description: '',
    onset: {
        number: 1,
        unit: 'day(s), week(s), month(s), year(s)'
    },
    location: '',
    patients_belief_of_cause: '',
    other_patient_comments: '',
    therapeutic_attempts: [],
    worseorbetter: '',
    additional_clinical_notes: '',
}
 */