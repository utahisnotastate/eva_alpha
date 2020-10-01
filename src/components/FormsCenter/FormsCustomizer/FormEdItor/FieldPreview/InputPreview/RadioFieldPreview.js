import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from "react-redux";

import {useFormContext, useFieldArray, Controller} from "react-hook-form";
import {
    TextField,
    Typography,
    Divider,
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormGroup,
    RadioGroup
} from "@material-ui/core";
import Button from '../../../../../basestyledcomponents/Button';
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

export default function RadioFieldPreview(props){
    const classes = useStyles();
    const {register, watch, getValues,control, setValue} = useFormContext();
    const watchlabel = watch("new_field.label");
    const watchnewchoice = watch("new_choice");

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        //control, // control props comes from useForm (optional: if you are using FormContext)
        name: `customformfields[${props.input.fieldindex}].choices`, // unique name for your Field Array
        // keyName: "id", default to "id", you can change the key name
    });

    const addNewChoice = () => {
        const radiochoices = getValues();
        let newfield = radiochoices.customformfields[props.input.fieldindex]['new_choice'];
        //append({label: newfield, value: null});
        console.log(newfield);
        append({label: newfield});
        //console.log(newfield);
        // setValue(`customformfields[${props.input.fieldindex}].choices[${}]`, "");
    }

    const randomNumber = () => {
        return Math.floor(Math.random() * 100) + 1;
    }
    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container direction="row">
                            <Grid item>
                                <TextField fullWidth placeholder={`Enter Choice`}
                                           inputRef={register()} name={`customformfields[${props.input.fieldindex}].new_choice`}/>
                            </Grid>
                            <Grid item>
                                <Button type={`button`} color="primary" onClick={() => addNewChoice()}>Add choice</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">{props.input.label}</FormLabel>

                                    {fields.length > 0 ? fields.map((field, index) => (
                                        <div key={field.id} className={classes.radiorow}>
                                            <Radio />
                                            <TextField fullWidth placeholder={`Enter Choice`} defaultValue={field.label}
                                                       inputRef={register()} name={`customformfields[${props.input.fieldindex}].choices[${index}].label`}/>
                                                       <Button color="danger" onClick={() => remove(index)}>X</Button>

                                        </div>
                                    )): <Typography></Typography>}

                            </FormControl>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>



        </Grid>
    );
}

/*
<FormControlLabel name={`customformfields[${props.input.fieldindex}].choices[${index}].name`} defaultValue={false} control={<Radio inputRef={register()} />} label={field.label} />
<Grid item>
                        {props.input.choices.length > 0 ? props.input.choices.map((field, index) => (
                            <div key={field.label}>
                                <Grid container>
                                    <Grid item>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">{field.label}</FormLabel>
                                            <RadioGroup name={``}  value={field.value}>
                                                <FormControlLabel defaultValue={`present`} control={<Radio inputRef={register()} />} label={field.label} />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </div>
                            ))
                        : <Typography></Typography>}
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
<Radio name={`choices[${index}][${field.label}]`} inputRef={register()}  />
 */