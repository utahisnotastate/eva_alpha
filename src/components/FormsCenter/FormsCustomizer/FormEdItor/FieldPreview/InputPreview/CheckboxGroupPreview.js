import React, {useEffect, useState, Fragment} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormGroup,
    Typography,
    Radio,
    TextField
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../../../../basestyledcomponents/Button";
import {useFormContext, useFieldArray} from "react-hook-form";

const useStyles = makeStyles({
    fullsize: {
        width: '100%',
    }
});

export default function CheckBoxGroupPreview(props) {
    const {register, control, watch} = useFormContext();
    const classes = useStyles();
    console.log(props);
    const watchnewcheckbox = watch(`new_checkbox_field`)


    return (
        <Grid container direction="column">
            <Grid item>
                <Typography></Typography>
            </Grid>
            <Grid item>
                <Grid container direction="row">
                    <Grid item>
                        <FormControlLabel
                            control={<TextField fullWidth inputRef={register()} name={`new_checkbox_field`} />}
                            label={`Enter new checkbox field`}
                            labelPlacement="start"
                            className={classes.fullsize}

                        />
                    </Grid>
                    <Grid item>
                        <Button color="primary" onClick={() => props.input.choices.append({label:watchnewcheckbox})}>Add field</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <FormControl component={`fieldset`}>
                <FormLabel component="legend">{props.input.label}</FormLabel>
                <FormGroup>
                    {props.input.choices.fields.length > 0 ? props.input.choices.fields.map((field, index) => (
                        <Grid key={field.id} container direction="row">
                            <Grid item>
                                <FormControlLabel

                                    control={<Checkbox
                                        checked={false}
                                        inputRef={register()}
                                        name={`customformfields[${props.input.fieldindex}].choices[${index}].label`}
                                    />}
                                    label={field.label}
                                />
                            </Grid>

                            <Grid item>
                                <Button color={`danger`} onClick={() => props.input.choices.remove(index)}>X</Button>
                            </Grid>
                        </Grid>
                    )) : <Typography>Sorry no data here</Typography>}
                </FormGroup>
            </FormControl>
            </Grid>
        </Grid>
    );
}

/*
<FormControlLabel
                    control={<Checkbox   />}
                    label={`Checkbox 1`}
                />
                <FormControlLabel
                    control={<Checkbox   />}
                    label={`Checkbox 2`}
                />
                <FormControlLabel
                    control={<Checkbox   />}
                    label={`Checkbox 3`}
                />
 */