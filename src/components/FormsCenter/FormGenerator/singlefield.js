import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Typography} from "@material-ui/core";
import SingleFieldInput from "./singlefieldinput";

export default function SingleField(props) {
    const [displayfield, setDisplayField] = useState(false);
    const handleSwitch = (displayfield) => {
        setDisplayField(!displayfield);
    }
    return (
        <Grid container direction={`row`}>
            <Grid item xs={2}>
                <Grid container direction={`column`}>
                    <Grid item>
                        <Typography>{props.label}</Typography>
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={displayfield} onChange={() => handleSwitch(displayfield)} />}
                            label="Checked"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                <Grid container direction={`column`} justify="center">
                    {displayfield ? (<SingleFieldInput type={props.type}/>): (<Typography>Field not checked, please flip switch to fill out field</Typography>)}

                </Grid>

            </Grid>
        </Grid>
    );
}