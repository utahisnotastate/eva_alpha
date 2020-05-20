import React from "react";
import {Typography} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import { Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import Card from "../../../basestyledcomponents/Card/Card";
import CardContent from "@material-ui/core/CardContent";


export default function Complaint({complaint, register, control, index, setValue}) {
    console.log(`complaints[${index}].complaint_name`);
    return (
        <Card>
            <CardContent>
                <Grid container direction={`row`}>
                <Grid item xs={10}>
                    <Grid container spacing={3} direction={`column`}>
                        <Grid item>
                            <Typography>Complaint</Typography>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth inputRef={register()} name={`complaints[${index}].complaint_name`}
                                       variant={`outlined`} defaultValue={complaint.complaint_name}
                                       label={`Clinical Complaint`}/>
                        </Grid>
                        <Grid item>
                            <TextField multiline rows={4} fullWidth inputRef={register()} variant={`outlined`}
                                       name={`complaints[${index}].complaint_description`}
                                       label={`Other Complaint/Complaint Description`}
                                       defaultValue={`${complaint.complaint_description}`}/>
                        </Grid>
                        <Grid item>
                            <Typography>Onset</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <Grid item xs={10}>
                                    <TextField inputRef={register()} variant={`outlined`} fullWidth
                                               name={`complaints[${index}].onset_number`}
                                               defaultValue={complaint.onset_number} label={`Number`} type={`number`}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <select name={`complaints[${index}].onset_unit`} ref={register}>
                                        <option value={null}>Select</option>
                                        <option value="day">Day(s) ago</option>
                                        <option value="week">Week(s) ago</option>
                                        <option value="month">Month(s) ago</option>
                                        <option value="year">Year(s) ago</option>
                                    </select>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography>Complaint Location</Typography>
                            <select name={`complaints[${index}].location`} ref={register}>
                                <option value={null}>Select Location</option>
                                <option value="neck">Neck</option>
                                <option value="head">Head</option>
                                <option value="upper_extremity">Upper Extremity</option>
                                <option value="lower_extremity">Lower Extermity</option>
                                <option value="chest">Chest</option>
                                <option value="abdomen">Abdomen</option>
                                <option value="abdomen">Groin</option>
                            </select>
                        </Grid>
                        <Grid item>
                            <TextField variant={`outlined`} multiline rows={4} fullWidth inputRef={register()}
                                       name={`complaints[${index}].patient_belief_caused_by`}
                                       label={`What does patient think this was caused by?`}
                                       defaultValue={complaint.patient_belief_caused_by}/>
                        </Grid>
                        <Grid item>
                            <TextField multiline rows={4} variant={`outlined`} fullWidth inputRef={register()}
                                       name={`complaints[${index}].patients_guess`} label={`What is patient's guess?`}
                                       defaultValue={complaint.patients_guess}/>
                        </Grid>
                        <Grid item>
                            <Typography>Other comments made by patient not indicated above:</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{complaint.other_notes}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={() => console.log('Delete this!')}>X</Button>
                </Grid>

            </Grid></CardContent>
        </Card>

    )
}


