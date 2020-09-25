import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../../../basestyledcomponents/Button";
import InputPreview from './InputPreview/InputPreview.js';

export default function FieldPreview(props) {
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography variant="subtitle2">Field Preview:</Typography>
            </Grid>
            <Grid item>
                <Grid container direction="row">
                    <Typography>{props.label}</Typography>
                    <InputPreview label={props.fieldtype} />
                </Grid>
            </Grid>
        </Grid>

    )
}