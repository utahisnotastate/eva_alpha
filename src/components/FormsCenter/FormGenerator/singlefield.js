import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Typography} from "@material-ui/core";
import SingleFieldInput from "./singlefieldinput";

const useStyles = makeStyles({
    root: {
        margin: '15px',
    }
})

export default function SingleField(props) {
    const classes = useStyles();
    const [fieldchecked, setFieldChecked] = useState(false);
    const handleSwitch = (fieldchecked) => {
        setFieldChecked(!fieldchecked);
    }
    return (
        <Grid className={classes.root} container direction={`column`}>
            <Grid item xs={2}>
                <Grid container direction={`column`}>
                    <Grid item>
                        <Typography>{props.label}</Typography>
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={fieldchecked} onChange={() => handleSwitch(fieldchecked)} />}
                            label={fieldchecked ? "Checked" : "Unchecked"}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                <Grid container direction={`column`} justify="center">
                    <SingleFieldInput type={props.type} disabled={fieldchecked}/>
                </Grid>

            </Grid>
        </Grid>
    );
}

/*
{fieldchecked ? (<SingleFieldInput type={props.type} disabled={fieldchecked}/>): (<Typography>Field not checked, please flip switch to fill out field</Typography>)}
 */