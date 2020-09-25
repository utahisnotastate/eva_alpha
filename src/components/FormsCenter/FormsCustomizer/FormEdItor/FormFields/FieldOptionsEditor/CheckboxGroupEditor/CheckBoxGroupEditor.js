import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from "react-redux";
import {useFieldArray} from "react-hook-form";
import {TextField, Typography, Divider} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function NoCheckboxFieldsDisplay() {
    return <Typography>No checkboxs have been added. Add some below. </Typography>
}

export default function CheckboxGroupEditor(props){
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography></Typography>
            </Grid>
            <Grid item>
                <Grid container direction={`column`}>
                    <Grid item>

                    </Grid>
                    <Grid item><Typography>Add Field</Typography></Grid>

                    <Grid item>
                        <Grid container direction={`column`}>
                            <Grid item>
                                <Typography>Field Preview</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction={`row`}>
                                    <Grid item>
                                        <Typography>{props.label}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Checkboxes</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}