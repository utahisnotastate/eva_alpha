import move from 'lodash-move'

export function reviewofsystemsforms(state = [], action) {
    switch (action.type) {
        case 'add_form':
            return [...state, action.newform];

        case 'load_forms':
            return action.forms;

        default:
            return state;
    }
}

export function physicalexamforms(state = [], action) {
    switch (action.type) {
        case 'add_form':
            return [...state, action.newform];

        case 'load_forms':
            return action.forms;

        default:
            return state;
    }
}

export function medicalhistoryforms(state = [], action) {
    switch (action.type) {
        case 'add_form':
            return [...state, action.newform];

        case 'load_forms':
            return action.forms;

        default:
            return state;
    }
}

export function forms(state = [], action) {
    switch (action.type) {
        case 'load_forms':
            return action.forms;
        default:
            return state;
    }
}

export function newformtitle(state = '', action) {
    switch (action.type) {
        case 'update_form_title':
            return action.newtitle;
        default:
            return state;

    }
}

export function newformtype(state = '', action) {
    switch (action.type) {
        case 'update_form_type':
            return action.newtype;
        default:
            return state;

    }
}

export function newformproperties(state={title: '', form_type: ''}, action) {
    switch (action.type) {
        case 'set_title':
            return {...state, title: action.title};
        case 'set_form_type':
            return {...state, form_type: action.form_type};
        default:
            return state;
    }
}

export function newformfields (state = [], action) {
    switch (action.type) {
        case 'add_field':
            return [...state, action.newfield];
        case 'load_updated_array':
            return action.newarray;
        default:
            return state;

    }
}

export function previewtitle(state = '', action) {
    switch (action.type) {
        case 'update_preview_title':
            return action.title;
        default:
            return state;

    }
}

export function previewfields(state = [], action) {
    switch (action.type) {
        case 'load_fields':
            return action.fields;
        default:
            return state;

    }

}

export function newtextvalueoptions(state = [], action) {
    switch (action.type) {
        case 'add_new_text_option':
            return [...state, action.newoption];
        case 'reset_options_to_none':
            return [];
        default:
            return state;

    }
}


/*
import _ from 'lodash';
export function createmedicalchartformschema(state= {
    "title": "Medical Appointment Form",
    "type": "object",
    "required": [],
    "properties": {
        "vitals": {
            "type": "object",
            "title": "",
            "properties": {
                "blood_pressure": {"type": "string", "title": "Blood Pressure"}
            }
        },
        "complaints": {
            "type": "object",
            "title": "",
            "properties": {
                "patient_description": {"type": "string", "title": "Patient Description"}
            },

        },
        "review_of_systems": {
            "type": "object",
            "title": "",
            "properties": {
                "allergic_immunologic_ROS": {"type": "string", "title": "Allergic Immunologic"}
            },
        },
        "physical_exam": {
            "type": "object",
            "title": "",
            "properties": {
                "cardiovascular_exam": {"type": "string", "title": "Cardiovascular Exam"}
            },
        },
        "assessments": {
            "type": "object",
            "title": "",
            "properties": {
                "assessments": {"type": "string", "title": "Assessments"}
            },
        },
        "treatment_plan": {
            "type": "object",
            "title": "",
            "properties": {
                "treatment_plan": {"type": "string", "title": "Treatment Plan"}
            },
        },
        "attachments": {
            "type": "object",
            "title": "",
            "properties": {
                "attachments": {"type": "string", "title": "Attachments"}
            },
        },
    }
}, action) {
    switch (action.type) {
        case 'add_field_to_medical_chart_form':
            console.log({...state, properties:{...state.properties, ...action.newfield}})
            return {...state, properties:{...state.properties, ...action.newfield}};
        case 'add_field_to_medical_appointment_section':
            return {...state,
                properties: {
                    ...state.properties,
                    [`${action.section}`]: {
                        ...state.properties[`${action.section}`],
                        properties: {
                            ...state.properties[`${action.section}`].properties,
                            [`${action.field}`]: {
                                ...state.properties[`${action.section}`].properties[`${action.field}`], ...action.newfield
                            }
                        }
                    }
                }};
            // return _.set(state, 'properties.vitals.properties.height', {type: 'string', title: 'Height'} )
            // return state.properties[`${action.section}`].properties[`${action.field}`] = {type: 'string', title: 'Height'};
        case 'add_group_to_medical_chart_form':
            console.log({...state, properties:{...state.properties, ...action.newgroup}})
            return {...state, properties:{...state.properties, ...action.newgroup}};
        default:
            return state;

    }
}
export function createfamilymedicalhistoryformschema(state= {
    "title": "Family Medical History Form",
    "type": "object",
    "required": [],
    "properties": {
    }
}, action) {
    switch (action.type) {
        case 'add_field_to_family_medical_history_form':
            return {...state.properties, ...action.newfield}
        default:
            return state;

    }
}

export function ActiveTemplateInputs(state= {active_label: "Vitals", templateinputs:[]}, action) {
    switch (action.type) {
        case 'change_active_template_inputs':
            return action.newinputs;
        default:
            return state;

    }
}
 */