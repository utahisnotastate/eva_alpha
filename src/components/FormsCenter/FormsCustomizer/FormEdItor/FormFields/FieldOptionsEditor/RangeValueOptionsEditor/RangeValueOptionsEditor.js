import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Button from '../../../../../../basestyledcomponents/Button';
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function RangeValueOptionsEditor(props) {
    return (
        <Grid container direction={`column`}>
            <Grid item xs={12}>
                <Grid container direction={`row`}>
                    <Typography>Min</Typography>
                    <TextField name={`newtextvalueoption`} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction={`row`}>
                    <Typography>Max</Typography>
                    <TextField name={`newtextvalueoption`} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction={`row`}>
                    <Typography>Increment</Typography>
                    <TextField name={`newtextvalueoption`} />
                </Grid>
            </Grid>
        </Grid>
    )
}