import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useFormContext} from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../../../../../basestyledcomponents/Button';
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    inputcontainer: {
        padding: '10px',
    }
});



export default function TextValueOptionsEditor(props) {
    const dispatch = useDispatch();
    const { register, getValues, setValue } = useFormContext();
    const classes = useStyles();

    const handleAddOption = (option) => {
        const values = getValues();
        const newtextvalueoption =  values.newtextvalueoption;
        console.log(newtextvalueoption);
        dispatch({type: 'add_new_text_option', newoption: {label: newtextvalueoption} })
        setValue("newtextvalueoption", "");
    }
    return (
        <Grid container direction={`column`}>
            <Grid item xs={12}>
                <Grid container direction={`column`}>
                    <Grid item xs={12}>
                        <Typography>Options:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction={`column`}>
                            {props.options.map((option, index) => (
                                <div key={option.label}>
                                    <Grid container direction={`row`}>
                                        <Grid item>
                                            <TextField name={`new_field_options[${index}]`} value={option.label} variant={`outlined`} inputRef={register()} />
                                        </Grid>
                                        <Grid item>
                                            <Button color={`danger`}>X</Button>
                                        </Grid>
                                    </Grid>

                                </div>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction={`row`} justify={`space-between`} alignItems="flex-end" className={classes.inputcontainer}>
                    <Typography>Option</Typography>
                    <TextField name={`newtextvalueoption`} inputRef={register} />
                    <Button onClick={() => { handleAddOption()}}>Add</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}