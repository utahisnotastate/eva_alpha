import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {useFormContext, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from '../../../../basestyledcomponents/Card/Card';
import CardBody from '../../../../basestyledcomponents/Card/CardBody';
import Button from '../../../../basestyledcomponents/Button';

const useStyles = makeStyles({
    horizontal: {
        display: 'flex',
        flexDirection: 'row'
    },
    endOfRow: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
})

export default function EditorHeader(props) {
    const {register} = useFormContext();
    const classes = useStyles();
    return (
        <Card>
            <CardBody>
                <Grid container direction="column">
                    <Grid item className={classes.endOfRow}>
                        <NavLink to={`/formscenter/${props.formId}/preview`}>
                            <Button color={`primary`}>Preview Form</Button>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" justify="space-between">
                            <Grid item className={classes.horizontal}>
                                <Typography>Form Title: </Typography>
                                <TextField inputRef={register} name={`form_title`}/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.horizontal}>
                        <Typography>Form Type</Typography>
                        <select  name="form_type" ref={register}>
                            <option value="">Select Form Type</option>
                            <option value="physical_exam">Physical Exam</option>
                            <option value="review_of_systems">Review Of Systems</option>
                            <option value="medical_history">Medical History</option>
                        </select>
                    </Grid>
                </Grid>
            </CardBody>
        </Card>
    );
}

/*
<Controller
                                    name={`form_title`}
                                    as={<TextField variant={`outlined`} defaultValue={props.title}  />}
                                />
 */
