import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useFormContext, Controller} from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        margin: '15px',
    }
});

export default function AppointmentFormField(props) {
    const {control} = useFormContext();
    const classes = useStyles();

    return (
        <Grid className={classes.root} container direction={`column`}>
            <Grid item xs={2}>
                <Grid container direction={`column`}>
                    <Grid item>
                        <Typography>{props.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Controller
                            as={Switch}
                            type="checkbox"
                            name={`switch`}
                            control={control}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                <Grid container direction={`column`} justify="center">
                    <Typography>Input goes here</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}