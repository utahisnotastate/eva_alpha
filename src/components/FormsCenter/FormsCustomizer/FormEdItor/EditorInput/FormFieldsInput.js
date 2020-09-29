import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from "react-redux";
import {useFormContext, Controller, useFieldArray} from "react-hook-form";
import {TextField, Typography, Divider} from "@material-ui/core";
import FieldPreview from '../FieldPreview/FieldPreview';
import FieldOptionsEditor from '../FormFields/FieldOptionsEditor/FieldOptionsEditor';
import Grid from "@material-ui/core/Grid";
import Card from '../../../../basestyledcomponents/Card/Card';
import CardBody from '../../../../basestyledcomponents/Card/CardBody';
import CardHeader from '../../../../basestyledcomponents/Card/CardHeader';
import CardFooter from '../../../../basestyledcomponents/Card/CardFooter';
import Button from '../../../../basestyledcomponents/Button';
import InputPreview from "../FieldPreview/InputPreview/InputPreview";
import '../../../../../styles/w3.css';

const useStyles = makeStyles({
    builderroot: {
        border: 1,
        borderColor: 'black',
        padding: '10px',
        backgroundColor: 'lightgrey'
    },
    addfieldcontainer: {
        backgroundColor: 'white',
        padding: '10px'
    },
    addfielditem: {
        padding: '10px',
        flexGrow: 2,
    },
    fieldPreviewContainer: {
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: '3',
        padding: '10px'
    }
});

export default function FormFieldsInput(props) {
    const {register, watch} = useFormContext();
    const classes = useStyles();
    const watchfieldtype = watch('new_field.type')

    return (
        <Card>
            <CardBody>
                <Grid container direction="column" justify="space-between">
                    <Grid item className={classes.addfielditem}>
                        <Typography variant="subtitle2">Field Type</Typography>
                        <select name={props.label} value={props.type} disabled  ref={register}>
                            <option value="">Choose Field Type</option>
                            <option value="TextInput">string/Simple text</option>
                            <option value="checkbox">Checkbox</option>
                            <option value="checkbox_group">checkbox group(Select multiple options)</option>
                            <option value="radio">Radio select(Choose only 1 option from a group of options)</option>
                            <option value="number">Number</option>
                            <option value="textarea">Textarea/Long text</option>
                            <option value="date">Date</option>
                            <option value="present_not_present">Present/Not Present</option>
                            <option value="normal_abnormal">Normal/Abnormal</option>
                        </select>
                    </Grid>
                    <Grid item className={classes.addfielditem}>
                        {watchfieldtype && <FieldOptionsEditor fieldtype={watchfieldtype} /> }
                    </Grid>
                </Grid>
            </CardBody>
            <CardFooter>
                <Button onClick={() => {props.handleAddField(props.methods)}}>Add Field</Button>
            </CardFooter>
        </Card>
    );
}

/*
<Grid item className={classes.addfielditem}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography variant="subtitle2">Field Preview:</Typography>
                                </Grid>
                                <Grid item>
                                    <Grid container className={`w3-border w3-padding`} direction="row">
                                        <Grid item xs={12}>
                                            <InputPreview className={classes.fieldPreviewContainer} input={{type: watchfieldtype, label: newfieldlabel}} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Grid>

<TextField fullWidth placeholder={`Enter Field Label`}
                                       inputRef={register} name="new_field_label"/>
<InputPreview input={{type: watchfieldtype}} />
<FieldOptionsEditor label={newfieldlabel} fieldtype={watchfieldtype} register={register} />
<Grid item className={classes.addfielditem}>
                        <FieldPreview label={newfieldlabel} fieldtype={`Test field type`} />
                    </Grid>
<Typography variant="subtitle2">Field Preview:</Typography>
 */