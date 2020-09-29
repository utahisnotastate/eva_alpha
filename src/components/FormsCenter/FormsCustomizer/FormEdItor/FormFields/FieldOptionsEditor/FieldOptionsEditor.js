import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {useArray} from "react-hanger";
import { makeStyles } from '@material-ui/core/styles';
import {useFormContext } from "react-hook-form";
import {TextField, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useParams, useRouteMatch, NavLink} from "react-router-dom";
import RadioOptionsEditor from "./RadioOptionsEditor/RadioOptionsEditor";
import RangeValueOptionsEditor from "./RangeValueOptionsEditor/RangeValueOptionsEditor";
// import TextValueOptionsEditor from "./TextValueOptionsEditor/TextValueOptionsEditor";
import TextFieldOptionsEditor from "./TextFieldOptionsEditor/TextFieldOptionsEditor"
import CheckboxGroupEditor from "./CheckboxGroupEditor/CheckBoxGroupEditor";
import CheckboxEditor from "./CheckboxEditor/CheckboxEditor";
import NumberOptionsEditor from './NumberOptionsEditor/NumberOptionsEditor';
import TextAreaOptionsEditor from "./TextAreaOptionsEditor/TextAreaOptionsEditor";
import DateFieldOptionsEditor from './DateFieldOptionsEditor/DateFieldOptionsEditor';
import PresentNotPresentOptionsEditor from './PresentNotPresentOptionsEditor/PresentNotPresentOptionsEditor';
import NormalAbnormalOptionsEditor from './NormalAbnormalOptionsEditor/NormalAbnormalOptionsEditor';

function NoOptionsForField(){
    return <Typography>This field does not have any options that are configurable</Typography>
}

export default function FieldOptionsEditor(props) {
    const {register} = useFormContext();
    const textvalueoptions = useSelector(state => state.formsmanager.newform.newtextvalueoptions);
    switch(props.fieldtype) {
        case 'checkbox':
            return <CheckboxEditor />
        case 'checkbox_group':
            return <CheckboxGroupEditor />
        case 'radio':
            return <RadioOptionsEditor />
        case 'TextInput':
            return <TextFieldOptionsEditor />
        case 'textarea':
            return <TextAreaOptionsEditor />
        case 'number':
            return <NumberOptionsEditor />
        case 'date':
            return <DateFieldOptionsEditor />
        case 'present_not_present':
            return <PresentNotPresentOptionsEditor />
        case 'normal_abnormal':
            return <NormalAbnormalOptionsEditor />
        default:
            return <NoOptionsForField />
    }
}

/*
            return <TextField name={`new_field_options`}  fullWidth inputRef={props.register} variant={`filled`} disabled helperText={`No options available for this type of field`} value={false} />;

<TextField name={`new_field_options`} inputRef={props.register}  multiline helperText={`Enter field options seperated by semicolon(;) aka option1;option2;option3;... `} />
 */