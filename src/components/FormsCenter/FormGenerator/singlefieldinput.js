import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import RadioChoicesInput from "./FieldComponents/RadioChoicesInput";

const normalabnormalchoices = [{value: "normal", label: "Normal"}, {value: "abnormal", label: "Abnormal"} ];
const presentnotpresentchoices = [{value: "present", label: "Present"}, {value: "not_presentl", label: "Not Present"} ];

export default function SingleFieldInput(props) {
    switch(props.type) {
        case 'present_not_present':
            return <RadioChoicesInput choices={presentnotpresentchoices} />
        case 'normal_abnormal':
            return <RadioChoicesInput choices={normalabnormalchoices} />
        default:
            return <TextField fullWidth />
    }
}