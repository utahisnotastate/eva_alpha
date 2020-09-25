import React, {useEffect, useState, Fragment} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../../../../basestyledcomponents/Button";

export default function InputPreview(props) {
    switch(props.input.type) {
        case "checkbox_group":
            return <Typography>Checkbox Group</Typography>
        case "checkbox":
            return <Typography>Checkbox</Typography>
        case "TextInput":
            return <Typography>Text Input</Typography>
        default:
            return <Typography>Text Input</Typography>
    }
}