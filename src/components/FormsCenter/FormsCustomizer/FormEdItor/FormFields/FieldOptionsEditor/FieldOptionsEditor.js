import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {useArray} from "react-hanger";
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller, FormContext } from 'react-hook-form';
import {TextField, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useParams, useRouteMatch, NavLink} from "react-router-dom";
import RadioOptionsEditor from "./RadioOptionsEditor/RadioOptionsEditor";
import RangeValueOptionsEditor from "./RangeValueOptionsEditor/RangeValueOptionsEditor";
import TextValueOptionsEditor from "./TextValueOptionsEditor/TextValueOptionsEditor";


export default function FieldOptionsEditor(props) {
    const textvalueoptions = useSelector(state => state.formsmanager.newform.newtextvalueoptions);
    switch(props.type) {
        case 'checkbox_group':
            return <TextField name={`new_field_options`} inputRef={props.register} multiline helperText={`Enter field options seperated by semicolon(;) aka option1;option2;option3;... `} />
        case 'radio_with_text':
            return <TextValueOptionsEditor options={textvalueoptions} />
        case 'radio_with_numbers':
            return <RangeValueOptionsEditor name={`new_field_options`} />
        default:
            return <TextField name={`new_field_options`} inputRef={props.register} variant={`filled`} disabled helperText={`No options available for this type of field`} value={false} />;
    }
}

/*
<TextField name={`new_field_options`} inputRef={props.register}  multiline helperText={`Enter field options seperated by semicolon(;) aka option1;option2;option3;... `} />
 */