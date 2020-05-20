import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Typography} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import SingleField from "./singlefield";

export default function FormGenerator(props) {
    return (
        <Grid container direction={`column`}>
            {props.formfields.map(formfield => (
                <SingleField label={formfield.label} type={formfield.type} checked={false} name={formfield.name}/>
            ))}
        </Grid>
    );
}

/*
<Grid container direction={`row`}>
            <Grid item xs={4}>
                <Grid container direction={`column`}>
                    <Grid item>
                        <Typography>Field Label</Typography>
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={false} onChange={console.log('Switched')} name="checkedA" />}
                            label="Checked"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <Grid container direction={`column`}>
                    <Typography>Test</Typography>

                </Grid>

            </Grid>
        </Grid>


<Grid item>
                <Grid container direction={`row`}>
                    <Grid item>
                        <Typography>Field Label</Typography>
                    </Grid>

                </Grid>
            </Grid>
 */

/*
<Grid item>
                <FormControlLabel
                    control={<Switch checked={false} onChange={console.log('Switched')} name="checkedA" />}
                    label="Checked"
                />
            </Grid>
 */