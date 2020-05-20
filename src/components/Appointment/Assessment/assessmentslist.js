import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";


export default function AssessmentsList(props) {
    return (
        <Grid container direction={`column`}>
            <Typography>Assessments</Typography>
            {props.assessments.map((assessment, index) => (
                <div key={index}>
                    <Grid item>
                    <Grid container direction={`column`}>
                        <Grid item>
                            <Typography>{assessment.icd_code}: {assessment.icd_description}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Related to:</Typography>
                            <Grid container
                                  direction={`column`}
                                  justify="flex-start"
                                  alignItems="stretch"
                                  spacing={4}
                            >
                                <Grid item>
                                    <Typography>Which of the following patient complaints:</Typography>
                                    {props.complaints.map((complaint) => (
                                        <Grid container>
                                            <Grid item>
                                                <Checkbox/>
                                            </Grid>
                                            <Grid item>
                                                <Typography>{complaint.complaint_name}</Typography>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid item>
                                    <Typography>Which of the following physical exam findings:</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Which of the following review of systems findings:</Typography>
                                </Grid>
                                <Grid item>
                                    <Button>Delete Assessment</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </div>
            ))}

        </Grid>
    )
}