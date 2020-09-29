import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from "react-redux";

import {useFormContext, useFieldArray, Controller} from "react-hook-form";
import {TextField, Typography, Divider, Radio, FormControl, FormControlLabel,FormLabel,FormGroup} from "@material-ui/core";
import Button from '../../../../../../basestyledcomponents/Button';
import Grid from "@material-ui/core/Grid";

function NoCheckboxFieldsDisplay() {
    return <Typography>No checkboxs have been added. Add some below. </Typography>
}

const useStyles = makeStyles({
    fullsize: {
        width: '100%',
    },
    radiorow: {
        display: 'flex',
        flexDirection: 'row'
    },
    fieldPreviewContainer: {
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: '3',
        padding: '10px',
        marginTop: '15px',
    },
    margTop: {
        marginTop: '15px',
    }
});

export default function RadioOptionsEditor(props){
    const classes = useStyles();
    const {register, watch, getValues,control, setValue} = useFormContext();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        name: "choices", // unique name for your Field Array
        control,
        defaultValue: [],
        // keyName: "id", default to "id", you can change the key name
    });
    const watchlabel = watch("new_field.label");
    const watchnewchoice = watch("new_choice");
    const SelectionType = props.selectiontype;

    const addNewChoice = () => {
        const choice = getValues("new_choice");
        append({label: choice});
        setValue("new_choice", "");
    }
    return (
        <Grid container direction="column">
            <Grid item>
                <TextField fullWidth placeholder={`Enter Field Label`}
                           inputRef={register} name="new_field.label"/>
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container direction="row">
                            <Grid item>
                                <TextField fullWidth placeholder={`Enter Choice`}
                                           inputRef={register} name="new_choice"/>
                            </Grid>
                            <Grid item>
                                <Button type={`button`} color="primary" onClick={() => addNewChoice()}>Add choice</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.fieldPreviewContainer}>
                        <Typography variant="subtitle2">Field Preview:</Typography>
                        <FormControl component={`fieldset`}>
                            {watchlabel && <FormLabel component="legend">{watchlabel}</FormLabel> }
                            {fields &&
                            <FormGroup className={classes.radiorow}>
                                {fields.map((field, index) => (
                                    <div key={field.id}>
                                        <Grid container direction={`row`}>
                                            <Grid item>
                                                <FormControlLabel
                                                    control={<Radio name={`choices[${index}][${field.label}]`} inputRef={register()}  />}
                                                    label={field.label}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button type={`button`} color="danger" onClick={() => remove(index)}>X</Button>
                                            </Grid>
                                        </Grid>

                                    </div>

                                ))}
                            </FormGroup>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>



        </Grid>
    );
}