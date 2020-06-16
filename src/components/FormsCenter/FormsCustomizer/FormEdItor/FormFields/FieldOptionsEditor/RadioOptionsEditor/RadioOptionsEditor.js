import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from "@material-ui/core/Grid";
import TextValueOptionsEditor from "../TextValueOptionsEditor/TextValueOptionsEditor";
import RangeValueOptionsEditor from "../RangeValueOptionsEditor/RangeValueOptionsEditor";

export default function RadioOptionsEditor(props) {
    const [optiontype, setOptionType] = useState(true);
    const textvalueoptions = useSelector(state => state.formsmanager.newform.newtextvalueoptions);
    const handleRadioOptionTypeSwitch = (optiontype) => {
        setOptionType(!optiontype);
    }
    return (
        <Grid container direction={`column`}>
            <Grid item xs={12}>
                <Grid container direction={`row`}>
                    <Grid item xs={4}><Typography>Range</Typography></Grid>
                    <Grid item xs={4}>
                        <FormControlLabel
                            control={<Switch checked={optiontype} onChange={() => handleRadioOptionTypeSwitch(optiontype)} />}
                            label={''}
                        />
                    </Grid>
                    <Grid item xs={4}><Typography>Text Values</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {optiontype ? <TextValueOptionsEditor options={textvalueoptions} /> : <RangeValueOptionsEditor/>}
            </Grid>
        </Grid>
    );
}