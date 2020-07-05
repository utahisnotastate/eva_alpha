import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Typography, TextField} from "@material-ui/core";
import {Controller, useFormContext} from "react-hook-form";

const useStyles = makeStyles({
    root: {
        margin: '15px',
    }
})

export default function AppointmentFormFieldContainer(props) {
    const {control, register, watch, formState, setValue} = useFormContext();
    const classes = useStyles();
    const watchInput = watch(props.name)
    const resetInput = () => {
        setValue(`${props.name}.value`, props.fieldprops.value, {shouldDirty: false})

    }
    // const showResetButton = ()

    const determineInput = (inputtype) => {
        switch(inputtype) {
            case 'TextInput':
                return <TextField name={`${props.name}.value`} inputRef={register}  />
            default:
                return <TextField name={`${props.name}.value`} inputRef={register} />
        }
    }
    return (
        <Grid className={classes.root} container direction={`row`}>
            <Grid item xs={2}>
                <Grid container direction={`column`}>
                    <Grid item>
                        <Typography>{props.fieldprops.label}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{formState.dirtyFields[props.name] ? "Checked" : "Unchecked" }</Typography>
                        {formState.dirtyFields[props.name] &&
                        <Typography onClick={() => resetInput()}>Reset</Typography> }

                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                <Grid container direction={`column`} justify="center">
                    {determineInput(props.fieldprops.type)}
                </Grid>
            </Grid>
        </Grid>
    );
}

/*
{formState.dirtyFields[props.name] &&
                       <div onClick={() => resetInput()}><p>Reset</p></div> }
<Typography>{formState.dirtyFields[props.name] ? <Typography onClick={() => resetInput()}>Reset</Typography> : null }</Typography>
 */