import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from "react-redux";
import {useFormContext, Controller } from "react-hook-form";
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
    }
});

export default function EditorInput(props) {
    const {register, watch} = useFormContext();
    const classes = useStyles();
    const newfieldlabel = watch('new_field_label');
    const [newfieldtype, setNewFieldType] = useState('');
    const watchfieldtype = watch('new_field_type')

    const handleNewFieldTypeChange = event => {
        setNewFieldType(event.target.value);
    }
    return (
        <Card>
            <CardHeader>
                <Typography variant="h6">Create New Field</Typography>
            </CardHeader>
            <CardBody>
                <Grid container direction="column" justify="space-between">
                        <Grid item className={classes.addfielditem}>
                            <TextField fullWidth variant={`outlined`} placeholder={`Enter Field Label`}
                                       defaultValue={``} inputRef={register} name="new_field_label"/>
                        </Grid>
                        <Grid item className={classes.addfielditem}>
                            <Typography variant="subtitle2">Field Type</Typography>
                            <select name={`new_field_type`} value={newfieldtype} onChange={handleNewFieldTypeChange} ref={register}>
                                <option value="">Choose Field Type</option>
                                <option value="TextInput">string</option>
                                <option value="checkbox">checkbox</option>
                                <option value="checkbox_group">checkbox group(Select multiple options)</option>
                                <option value="radio_with_text">Radio With Text options</option>
                                <option value="radio_with_numbers">Radio With Number options</option>
                                <option value="number">number</option>
                                <option value="textarea">textarea</option>
                                <option value="select">select</option>
                                <option value="date">Date</option>
                                <option value="present_not_present">Present/Not Present</option>
                                <option value="normal_abnormal">Normal/Abnormal</option>
                            </select>
                        </Grid>
                        <Grid item className={classes.addfielditem}>
                            <Typography variant="subtitle2">Field Options:</Typography>

                        </Grid>
                        <Grid item className={classes.addfielditem}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography variant="subtitle2">Field Preview:</Typography>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row">
                                        <Grid item xs={2}>
                                            <Typography>Field Label</Typography>
                                        </Grid>
                                        <Grid item xs={10}>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>


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
<InputPreview input={{type: watchfieldtype}} />
<FieldOptionsEditor label={newfieldlabel} fieldtype={watchfieldtype} register={register} />
<Grid item className={classes.addfielditem}>
                        <FieldPreview label={newfieldlabel} fieldtype={`Test field type`} />
                    </Grid>
<Typography variant="subtitle2">Field Preview:</Typography>
 */