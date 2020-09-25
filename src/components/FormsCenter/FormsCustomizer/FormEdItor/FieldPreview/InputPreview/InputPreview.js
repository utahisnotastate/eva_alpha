import React, {useEffect, useState, Fragment} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Checkbox, Typography,FormControl, FormControlLabel,FormLabel,FormGroup, InputLabel,RadioGroup,Radio, Input} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../../../../basestyledcomponents/Button";

const useStyles = makeStyles({
    fullsize: {
        width: '100%',
    }
});

export default function InputPreview(props) {
    const classes = useStyles();
    switch(props.input.type) {
        case "checkbox":
            return (<FormControlLabel
                control={<Checkbox   />}
                label={props.input.label}
                labelPlacement="Top"
            />)
        case "checkbox_group":
            return(<FormControl component={`fieldset`}>
                <FormLabel component="legend">{props.input.label}</FormLabel>
                <FormGroup>
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
                </FormGroup>
            </FormControl>)
        case "radio":
            return (
                <FormControl component="fieldset">
                    <FormLabel component="legend">{props.input.label}</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value={`Radio 1`} control={<Radio />} label={`Radio 1`} />
                        <FormControlLabel value={`Radio 2`} control={<Radio />} label={`Radio 2`} />
                        <FormControlLabel value={`Radio 3`} control={<Radio />} label={`Radio 3`} />
                    </RadioGroup>
                </FormControl>
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