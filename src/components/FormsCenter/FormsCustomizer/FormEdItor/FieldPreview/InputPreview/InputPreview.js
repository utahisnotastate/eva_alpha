import React, {useEffect, useState, Fragment} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Checkbox, Typography,FormControl, FormControlLabel,FormLabel,FormGroup, InputLabel,RadioGroup,Radio, Input} from "@material-ui/core";
import { useForm, Controller, useFieldArray, useFormContext } from 'react-hook-form';
import Grid from "@material-ui/core/Grid";
import Button from "../../../../../basestyledcomponents/Button";
import CheckboxGroupPreview from './CheckboxGroupPreview';

const useStyles = makeStyles({
    fullsize: {
        width: '100%',
    }
});

export default function InputPreview(props) {
    const classes = useStyles();
    const {register, control} = useFormContext();
    const {fields, append, remove} = useFieldArray({
        control,
        name: `customformfields[${props.input.fieldindex}].choices`,

    })
    switch(props.input.type) {
        case "checkbox":
            return (<FormControlLabel
                control={<Checkbox   />}
                label={props.input.label}
                labelPlacement="top"
            />)
        case "checkbox_group":
            return(<CheckboxGroupPreview input={{fieldindex: props.input.fieldindex, label: props.input.label, type: props.input.type, choices: {fields: fields, append: append, remove: remove}  } }  />)
        case "radio":
            return (
                <Grid container direction="column">
                    <Grid item>
                        <FormControl component="fieldset">
                        <FormLabel component="legend">{props.input.label}</FormLabel>
                        <RadioGroup>
                            {fields.length > 0 ? fields.map((field, index) => (
                                <div key={index}>
                                    <FormControlLabel
                                        control={<Radio checked={false}
                                                        inputRef={register()}
                                                        name={`customformfields[${props.input.fieldindex}].choices[${index}].label`}/>}
                                        label={field.label}
                                    />
                                    <Button color="danger" onClick={() => remove(index)}>X</Button>
                                </div>
                            )) : <Typography></Typography>}

                        </RadioGroup>
                    </FormControl>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            )
        case "number":
            return (
                <FormControlLabel
                    control={<TextField fullWidth type="number"  />}
                    label={props.input.label}
                    labelPlacement="start"
                    className={classes.fullsize}


                />
            )
        case "textarea":
            return (
                <FormControlLabel
                    control={<TextField fullWidth multiline rows={7} />}
                    label={props.input.label}
                    labelPlacement="start"
                    className={classes.fullsize}

                />
            )
        case "TextInput":
            return (<FormControlLabel
                control={<TextField fullWidth />}
                label={props.input.label}
                labelPlacement="start"
                className={classes.fullsize}

            />)
        case "present_not_present":
            return (
                <FormControl component="fieldset">
                    <FormLabel component="legend">{props.input.label}</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value={`present`} control={<Radio />} label={`Present`} />
                        <FormControlLabel value={`not_present`} control={<Radio />} label={`Not Present`} />
                    </RadioGroup>
                </FormControl>
            )
        case "normal_abnormal":
            return (
                <FormControl component="fieldset">
                    <FormLabel component="legend">{props.input.label}</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value={`normal`} control={<Radio />} label={`Normal`} />
                        <FormControlLabel value={`abnormal`} control={<Radio />} label={`Abnormal`} />
                    </RadioGroup>
                </FormControl>
            )
        default:
            return <Typography>Please choose an input type above</Typography>
    }
}
/*

<FormControl fullWidth>
                    <InputLabel htmlFor="previewtextinput">{props.input.label}</InputLabel>
                    <Input id="previewtextinput" multiline rows={7}  />
                </FormControl>
<FormControl>
                <InputLabel htmlFor="previewtextinput">{props.input.label}</InputLabel>
                <Input id="previewtextinput"  />
            </FormControl>
return (<TextField fullWidth label={props.input.label} />)
 */