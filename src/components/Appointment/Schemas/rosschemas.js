const conditionalschema = {
    "type": "object",
    "properties": {
        "conditional": {
            "$ref": "#/definitions/person"
        },
    },
    "definitions": {
        "person": {
            "title": "Person",
            "type": "object",
            "properties": {
                recent_fevers: {
                    "type": "string",
                    title: "Recent Fevers",
                    "enum": [
                        "No",
                        "Yes",
                        "Unchecked"
                    ],
                    default: "No",
                }
            },
            "dependencies": {
                recent_fevers: {
                    "oneOf": [
                        {
                            "properties": {
                                recent_fevers: {
                                    "enum": [
                                        "Unchecked"
                                    ]
                                }
                            }
                        },
                        {
                            "properties": {
                                recent_fevers: {
                                    "enum": [
                                        "Yes"
                                    ]
                                },
                                "with_night_sweats": {
                                    title: 'With Night Sweats',
                                    "type": "boolean","oneOf": [
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
                                    ], default: 'unchecked'
                                }
                            },
                        },
                        {
                            "properties": {
                                recent_fevers: {
                                    "enum": [
                                        "No"
                                    ]
                                },
                            },
                        }
                    ]
                }
            }
        }
    }
}

const conditionalUISchema ={
    "conditional": {
        "with_night_sweats": {
            "ui:widget": "radio"
        }
    },
}

export const ConditioalSchema = {
    schema: conditionalschema,
    uiSchema: conditionalUISchema,
}

const presentnotpresentoptions = [
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
    ]

export const ROSConstitutionalSchema = {
    schema: {
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

    },
    uiSchema: {
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
}

export const ROSEndocrineSchema = {
    schema: {
        properties: {
            diabetes: { type: 'boolean', title: 'Diabetes', oneOf: presentnotpresentoptions },
            excessive_hunger_or_thirst: {type: 'boolean', title: 'Excessive Hunger or Thirst', oneOf: presentnotpresentoptions}

        }
    },
    uiSchema: {
        diabetes: {
            "ui:widget": "radio",
            "ui:options": {
                inline: false,
            },
        },
        excessive_hunger_or_thirst: {
            "ui:widget": "radio",
            "ui:options": {
                inline: false,
            }

        }
    }
}