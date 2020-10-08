import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useFormContext } from "react-hook-form";
import {TextField, Typography, FormControlLabel, FormLabel, RadioGroup, Radio, FormControl} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../../../../../../basestyledcomponents/Button";

const useStyles = makeStyles({
    fullsize: {
        width: '100%',
    },
    fieldPreviewContainer: {
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: '3',
        padding: '10px',
    },
    margTop: {
        marginTop: '15px',
    }
});

export default function NormalAbnormalOptionsEditor(props) {
    const {register, watch} = useFormContext();
    const classes = useStyles();
    const watchlabel = watch("new_field.label");
    return(
        <Grid container direction="column">
            <Grid item>
                <Typography variant="subtitle2">Field Options:</Typography>
            </Grid>
            <Grid item>
                <TextField fullWidth placeholder={`Enter Field Label`}
                           inputRef={register} name="new_field.label"/>
            </Grid>
            {watchlabel &&
            <Grid item>
                <Grid container direction="column">
                    <Grid item className={classes.margTop}>
                        <Typography variant="subtitle2">Field Preview:</Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.fieldPreviewContainer}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">{watchlabel}</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value={`normal`} control={<Radio />} label={`Normal`} />
                            <FormControlLabel value={`abnormal`} control={<Radio />} label={`Abnormal`} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            }
            <Grid item>
                <Button color={`primary`} onClick={() => props.handleAddField({label: watchlabel, type: 'normal_abnormal'})}>Add Field</Button>
            </Grid>

        </Grid>
    );
}