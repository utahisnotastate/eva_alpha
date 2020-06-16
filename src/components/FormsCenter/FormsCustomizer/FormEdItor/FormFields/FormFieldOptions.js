import React from "react";
import Grid from "@material-ui/core/Grid";
import {TextField, Typography} from "@material-ui/core";
import {useFormContext} from "react-hook-form";

function FieldOptionsEditor(props) {
    switch(props.type) {
        case 'radio':
            return <TextField multiline helperText={`Enter field options seperated by semicolon(;) aka option1;option2;option3;... `} />
        default:
            return <TextField />
    }
}

export default function FormFieldOptions(props) {
    const {control, register} = useFormContext();
    return (
        <Grid item xs={4}>
            <Grid container direction={`column`}>
                <Grid item xs={12}>
                    <Typography>Options</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <select name={`formfields[${props.index}].type`} defaultValue={props.type} ref={register}>
                                <option value="">Choose Field Type</option>
                                <option value="TextInput">string</option>
                                <option value="checkbox">checkbox</option>
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
                        <Grid item xs={12}>
                                <FieldOptionsEditor type={props.type}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}