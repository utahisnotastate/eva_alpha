import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { DevTool } from "@hookform/devtools";
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller, FormContext, FormProvider, useFieldArray } from 'react-hook-form';
import {useParams, useRouteMatch, NavLink} from "react-router-dom";
/*import {TextField, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../../basestyledcomponents/Button";
import Card from '../../../basestyledcomponents/Card/Card';
import CardHeader from '../../../basestyledcomponents/Card/CardHeader';
import CardBody from '../../../basestyledcomponents/Card/CardBody';
import FormFields from './FormFields/FormFields';

import {updateForm, fetchForm} from "../../../../api/forms.api";
import FieldOptionsEditor from "./FormFields/FieldOptionsEditor/FieldOptionsEditor";
import EditorHeader from './EditorHeader/EditorHeader';
import EditorInput from './EditorInput/EditorInput';*/
import FormEditor from './FormsCustomizer/FormEdItor/FormEditor.js';

const API_URL = "http://127.0.0.1:8000/api";

const useStyles = makeStyles({
    builderroot: {
        border: 1,
        borderColor: 'black',
        padding: '10px',
        // backgroundColor: 'lightgrey'
    },
    addfieldcontainer: {
        backgroundColor: 'white',
        padding: '10px'
    },
    addfielditem: {
        padding: '10px',
        flexGrow: 2,
    },
    formTitle: {
        padding: '15px'
    },
    formTypeSelectContainer: {
        marginTop: '5px'
    }
});

function NoOptionsField(props) {

}

export default function FormBuilderTool(props) {

    return (

        <div>
            <FormEditor />

        </div>

    );
}