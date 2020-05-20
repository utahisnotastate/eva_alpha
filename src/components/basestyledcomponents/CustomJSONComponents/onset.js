import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

export default function OnsetField(props) {

    const handleNumberSelect = (event) => {
        props.setValue(`complaints[${props.index}].onset_number`, event.target.value)
    }

    const handleUnitSelect = (event) => {
            props.setValue(`complaints[${props.index}].onset_unit`, event.target.value)
    }
    const classes = useStyles();
    return (
        <Grid container direction={`column`} spacing={4}>
            <Grid item>
                <Typography>Onset</Typography>
            </Grid>
            <Grid item>
                <Grid container xs={12}>
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={5}>
                        <Select fullWidth name={`complaints[${props.index}].onset_unit`} label={`Unit`} onChange={(event) => handleUnitSelect(event)} defaultValue={props.unit}>
                            <MenuItem value={null}>Select</MenuItem>
                            <MenuItem value={`Day`}>Day(s) ago</MenuItem>
                            <MenuItem value={`Week`}>Week(s) ago</MenuItem>
                            <MenuItem value={`Month`}>Month(s) ago</MenuItem>
                            <MenuItem value={`Year`}>Year(s) ago</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}