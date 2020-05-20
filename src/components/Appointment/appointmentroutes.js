import React from "react";
import SingleCheckboxwithLabel from "../Forms/components/CustomInputs/SingleCheckboxwithLabel";
import {ROSConstitutionalSchema, ROSEndocrineSchema, ConditioalSchema} from "./Schemas/rosschemas";



const schema = {
    "type": "object",
    "properties": {
        "recent_fever": { "type": "boolean", title: "Recent Fever","oneOf": [
                {
                    "const": 'unchecked',
                    "title": "Unchecked"
                },
                {
                    "const": true,
                    "title": "Present"
                },
                {
                    "const": false,
                    "title": "Not Present"
                },
            ], default: 'unchecked' },
        with_night_sweats: {
            "type": "boolean", title: "With Night Sweats","oneOf": [
                {
                    "const": 'unknown',
                    "title": "Unknown"
                },
                {
                    "const": true,
                    "title": "Present"
                },
                {
                    "const": false,
                    "title": "Not Present"
                },
            ], default: 'unknown'
        },
        weight_change: { "type": "boolean", title: "Weight Change","oneOf": [
                {
                    "const": 'unchecked',
                    "title": "Unchecked"
                },
                {
                    "const": true,
                    "title": "Present"
                },
                {
                    "const": false,
                    "title": "Not Present"
                },
            ], default: 'unchecked' },
        appetite: { "type": "boolean", title: "Appetite Changes","oneOf": [
                {
                    "const": 'unchecked',
                    "title": "Unchecked"
                },
                {
                    "const": true,
                    "title": "Present"
                },
                {
                    "const": false,
                    "title": "Not Present"
                },
            ], default: 'unchecked' },
        fatigue: { "type": "boolean", title: "Fatigue","oneOf": [
                {
                    "const": 'unchecked',
                    "title": "Unchecked"
                },
                {
                    "const": true,
                    "title": "Present"
                },
                {
                    "const": false,
                    "title": "Not Present"
                },
            ], default: 'unchecked' },
        weakness: { "type": "boolean", title: "Weakness","oneOf": [
                {
                    "const": 'unchecked',
                    "title": "Unchecked"
                },
                {
                    "const": true,
                    "title": "Present"
                },
                {
                    "const": false,
                    "title": "Not Present"
                },
            ], default: 'unchecked' },
        other:{ "type": "string", title: "Other"},

    },

};

/*
"dependencies": {
        "recent_fever": {
            properties: {
                with_night_sweats: {type: "boolean"}
            }
        },
    }
 */

const uiSchema = {
    recent_fever: {
        "ui:widget": "radio",
        "ui:options": {
            inline: false,
        },
    },
    with_night_sweats: {
        "ui:widget": "radio",
        "ui:options": {
            inline: false,
        },

    },
    weight_change: {
        "ui:widget": "radio",
        "ui:options": {
            inline: false,
        },
    },
    appetite: {
        "ui:widget": "radio",
        "ui:options": {
            inline: false,
        },
    },
    fatigue: {
        "ui:widget": "radio",
        "ui:options": {
            inline: false,
        },
    },
    weakness: {
        "ui:widget": "radio",
        "ui:options": {
            inline: false,
        },
    },
    other: {
        "ui:fullWidth": false,
    }

}
/*
"ui:options": {
        label: false,
    }
{
    type: "object",
    properties: {
        recent_fever: {
            type: "object",
            properties:{
                with_night_sweats: {
                    type: "boolean", title: "With Night Sweats", default: false
                },
            }
        },
        weight_change: {type: "boolean", title: "Weight Change?", default: false},

    },
    dependencies: {
        weight_change:{
            properties: {
                weight_loss: {type: "boolean", title: "Weight Loss?", default: false},
                weight_gain: {type: "boolean", title: "Weight gain", default: false},
            },

        }
    },
};

"ui:options": {
        label: false
    }
 */
const client = {
    schema,
    uiSchema,
};

export const PhysicalExamRoutes = [
    {label: 'HEENT', schema: ConditioalSchema, path: '/appointmentexam/HEENTExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]},
    {
        label: 'Integumentary', path: '/appointmentexam/IntegumentaryExam',schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            schema: client,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Cardiovascular', path: '/appointmentexam/CardiovascularExam',schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            schema: client,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Musculoskeletal', path: '/appointmentexam/MusculoskeletalExam',schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Gastrointestinal', path: '/appointmentexam/GastrointestinalExam',schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Neurological', path: '/appointmentexam/NeurologicalExam',schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Male Genitoruinary', path: '/appointmentexam/MaleGenitourinaryExam',schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Female Genitourinary', path: '/appointmentexam/FemaleGenitourinaryExam',schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Hematologic Lymphatic', path: '/appointmentexam/HematologicLymphaticExam',schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Psychiatric', path: '/appointmentexam/PsychiatricExam',schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
];

export const ROSRoutes = [
    {
        path: '/appointmentros/ROSConstitutional',
        schema: ROSConstitutionalSchema,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Constitutional ROS'
    },
    {
        path: '/appointmentros/ROSAllergicImmunologic',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Allergic Immunologic ROS',
    },
    {
        path: '/appointmentros/ROSIntegumentary',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Integumentary',
    },
    {
        path: '/appointmentros/ROSEyes',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Eyes ROS',
    },
    {
        path: '/appointmentros/ROSEyes',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Eyes ROS',
    },
    {
        label: 'Cardiovascular', path: '/appointmentros/ROSCardiovascular',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Respiratory', path: '/appointmentros/ROSRespiratory',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Musculoskeletal', path: '/appointmentros/ROSMusculoskeletal',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Gastrointestinal', path: '/appointmentros/ROSGastrointestinal',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Neurological', path: '/appointmentros/ROSNeurological',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Genitourinary', path: '/appointmentros/ROSGenitourinary',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Endocrine', path: '/appointmentros/ROSEndocrine',
        schema: ROSEndocrineSchema,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Hematologic', path: '/appointmentros/ROSHematologic',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Psychiatric', path: '/appointmentros/ROSPsychiatric',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Ears Nose Throat', path: '/appointmentros/ROSEarsNoseThroat',
        schema: client,
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    }

];