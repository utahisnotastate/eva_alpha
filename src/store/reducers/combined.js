import {combineReducers} from "redux";
import {patientdiagnoses, patientmedications, drugallergies, hasinsurance, foodallergies, latexallergy, petallergies, pollenallergy, surgicalhistory, addmedicationformicd10result, addMedicationFormMedication, primaryinsurance, secondaryinsurance} from "./patient/patient.reducers";
import {medicalappointmentformtitle as title, medicalappointmentformtype as type, medicalappointmentformrequiredfields as required, medicalappointmentformvitals as vitals} from "./formscenter/MedicalAppointmentForm/medicalappointmentform.reducers";
import {
    appointmentassessments,
    assessmentinputfields,
    appointmentcomplaints,
    newcomplaintinputfields,
    appointmentforms,
    appointmentformfields,
    activeAppointmentFormDetails,
    activeAppointmentFormFields,
    masteractiveappointmentformfields,
    clinicalexamforms,
    reviewofsystemforms
} from './appointment/appointment.reducers'

import {reviewofsystemsforms, physicalexamforms, medicalhistoryforms, forms, newtextvalueoptions} from "./formscenter/formscenter.reducers";

import {newformproperties, newformfields, newformtitle, newformtype, previewtitle, previewfields} from "./formscenter/formscenter.reducers";

function patientAppointmentHistory(state=[], action) {
    switch(action.type) {
        case 'initial_load_patient_history':
            return action.appointmenthistory;
        default:
            return state;

    }
}

function requestupdates(state = [], action) {
    switch(action.type) {
        case 'set_request_updates':
            return action.requestupdates;
        default:
            return state;
    }
}

function patientToSchedule(state = null, action) {
    switch(action.type) {
        case 'set_patient_to_schedule':
            return action.patient;
        default:
            return state;
    }
}

function patientRequests(state = [], action) {
    switch(action.type) {
        case 'load_patient_requests':
            return action.patientrequests;
        default:
            return state;
    }
}

function clinicalqueue(state = [], action) {
    switch(action.type) {
        case 'check_in_patient':
            return action.newclinicalqueue;
        case 'move_to_exam_room':
            return action.newclinicalqueue;
        case 'move_to_waiting_room':
            return action.newclinicalqueue;
        case 'appointment_in_progress':
            return action.newclinicalqueue;
        case 'initial_load':
            return action.newclinicalqueue;
        default:
            return state;
    }
}

const formpreview = combineReducers({
    previewtitle,
    previewfields
})

const newform = combineReducers({
    newformtitle,
    newformtype,
    newformfields,
    newtextvalueoptions
});

const formsmanager = combineReducers({
    forms,
    newform,
    formpreview
});

const patientallergies = combineReducers({
    drugallergies,
    foodallergies,
    latexallergy,
    petallergies,
    pollenallergy,

});



const complaints = combineReducers({
    inputfields: newcomplaintinputfields,
    complaints: appointmentcomplaints,
});

const assessments = combineReducers({
    assessments: appointmentassessments,
    inputfields: assessmentinputfields
});

/*const appointmentforms = combineReducers({
    clinicalexamforms,
    reviewofsystemforms
})*/
const activeappointmentform = combineReducers({
   activeAppointmentFormFields,
   activeAppointmentFormDetails,
    masteractiveappointmentformfields
})
const appointment = combineReducers({
    complaints,
    assessments,
    appointmentforms,
    appointmentformfields,
    activeappointmentform
});
const patient = combineReducers({
    patientdiagnoses,
    patientmedications,
    patientallergies,
    surgicalhistory,
    hasinsurance,
    primaryinsurance,
    secondaryinsurance,
    addmedicationformicd10result,
    addMedicationFormMedication,
});



export const allReducers = combineReducers({
    clinicalqueue,
    patientToSchedule,
    formsmanager,
    patientAppointmentHistory,
    patientRequests,
    requestupdates,
    appointment,
    patient,
});


/*
function vitalsformschema(state={
    type: "array",
    title: "Vital Fields",
    items: [],
}, action) {
    switch (action.type) {
        case 'add_new_vitals_property':
            return {...state, properties: {...state.properties, ...action.newproperty}};

        case 'add_new_field':
            return {...state, items: [...state.items, action.newfield]};

        default:
            return state;


    }
}
function vitalsformuischema(state={
    "temperatureChecked": {
        classNames: "custom-field-input"
    },
    "Temperature": {
        classNames: "custom-field-input"
    },
    "ui:options": {
        label: false,
        addable: false
    }
}, action) {
    switch (action.type) {
        default:
            return state;


    }
}

function assessmentformschema(state = {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}
function assessmentformuischema(state = {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}
function patientcomplaintsformschema(state={
    "type": "object",
    "title": "Patient Complaints Form Fields",
        "properties": {
            "icd10code": {"type": "string", "title": "ICD 10 Code"},
            "icd10description": {"type": "string", "title": "ICD 10 Description"},
            "onset": {"type": "string", "title": "Onset"},
            "progression": {"type": "string", "title": "Progression"},
            "caused_by": {"type": "string", "title": "Caused By"},
        }
}, action) {
    switch (action.type) {
        case 'add_new_complaints_property':
            return {...state, properties: {...state.properties, ...action.newproperty}}
        default:
            return state;


    }
}
function patientcomplaintsformuischema(state={
    "ui:options": {
        label: false
    }
}, action) {
    switch (action.type) {
        default:
            return state;


    }
}
export function reviewofsystemsformschema(state = {
    "type": "object",
    "title": "",
    "properties": {
        "no_allergies": {
            "type": "boolean",
            "title": "No Allergies",
            "default": true,
        },
        "hiv": {
            "type": "boolean",
            "title": "HIV",
            "default": false,
        },

    }
}, action) {
    switch (action.type) {
        default:
            return state;

    }
}
export function reviewofsystemsformuischema(state = {
    "ui:options": {
        label: false
    }
}, action) {
    switch (action.type) {
        default:
            return state;

    }
}
 */