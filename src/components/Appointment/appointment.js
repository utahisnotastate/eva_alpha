import React, {useEffect, useState} from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {fetchAllForms} from "../../api/forms.api";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemText from '@material-ui/core/ListItemText';
import PatientComplaints from "./Complaints/PatientComplaints";
import AppointmentROS from "./AppointmentROS/AppointmentROS";
// import AppointmentPhysicalExam from "./AppointmentPhysicalExam/AppointmentPhysicalExam";
import AppointmentAssessment from "./Assessment/AppointmentAssessment";
import AppointmentPlan from "./AppointmentPlan/AppointmentPlan";
import AppointmentFollowUp from "./AppointmentFollowUp/AppointmentFollowUp";
import AppointmentSummary from "./AppointmentSummary/AppointmentSummary"
import {useParams, useRouteMatch, Switch, Route, Link, NavLink} from "react-router-dom";
import patientroutes from "../Patient/routes";
import AppointmentComplaints from "./Complaints/AppointmentComplaints/AppointmentComplaints";
import NewComplaint from "./Complaints/NewComplaint/NewComplaint.FunComp";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Card from "../basestyledcomponents/Card/Card";
import Collapse from '@material-ui/core/Collapse';
import BaseROSComponent from "./AppointmentROS/AppointmentROSComponents/BaseROSComponent";
import BasePhysicalExamComponent from "./AppointmentPhysicalExam/BasePhysicalExamComponent";
// import {ROSRoutes, PhysicalExamRoutes} from "./appointmentroutes";
import AppointmentForm from "./appointmentform";
import {getAppointmentForms, getAllActiveForms, createAppointmentForm} from '../../api/appointment.api.js';
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#BADDFF',
        minHeight: '100vh',
        boxShadow: '0 2px 4px rgba(0,0,0,.15)',
    },
    listitem: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    sideitem: {
        color: '#414141',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    deepnested: {
        paddingLeft: theme.spacing(6),
    },
}));


export default function Appointment() {
    let { id } = useParams();
    const dispatch = useDispatch();
    let { path, url } = useRouteMatch();
    console.log('appointment path is ' + path)
    console.log('appointment url is ' + url);
    const appointmentforms = useSelector(state => state.appointment.appointmentforms);
    const clinicalexamforms = useSelector(state => state.appointment.appointmentforms.filter(form => form.form_type === "physical_exam"));
    const reviewofsystemsforms = useSelector(state => state.appointment.appointmentforms.filter(form => form.form_type === "review_of_systems"));
    const [appointmentinfoopen, setAppointmentInfoOpen] = useState(true)
    const [rosopen, setROSOpen] = useState(false);
    const [examopen, setExamOpen] = useState(false);
    const [patientoptionsopen, setPatientOptionsOpen] = useState(false);

    const classes = useStyles();
    const activelinkstyle= {
        fontWeight: "bold",
        backgroundColor: "blue",
        color: "white",
        width: '100%'
    }
    const appointmentroutes = [
        {
            path: '',
            label: 'Complaints',
            nestedroutes: false,
            subroutes: [],
            component: PatientComplaints,
        },
        {
            //path: '/appointmentros/',
            path: '/appointmentforms/',
            label: 'Review of Systems',
            nestedroutes: true,
            menuopen: rosopen,
            openNestedMenu() {
                setROSOpen(!rosopen);
            },
            subroutes: reviewofsystemsforms,
            component: AppointmentROS,
        },
        {
            // path: '/appointmentexam/',
            path: '/appointmentforms/',
            label: 'Physical Exam',
            nestedroutes: true,
            menuopen: examopen,
            openNestedMenu() {
                setExamOpen(!examopen);
            },
            subroutes: clinicalexamforms,
            component: AppointmentForm,
        },
        {
            path: '/assessment',
            label: 'Assessment',
            nestedroutes: false,
            subroutes: [],
            component: AppointmentAssessment,
        },
        {
            path: '/plan',
            label: 'Plan',
            nestedroutes: false,
            subroutes: [],
            component: AppointmentPlan,
        },
        {
            path: '/followup',
            label: 'Follow Up',
            nestedroutes: false,
            subroutes: [],
            component: AppointmentFollowUp,
        },
        {
            path: '/summary',
            label: 'Summary',
            nestedroutes: false,
            subroutes: [],
            component: AppointmentSummary,
        },
    ];
    const DeepNestedList = ({subroutes, path}) => {
        return (
            <List component="div" disablePadding>
                {subroutes.map((subroute) => (
                    <ListItem className={classes.deepnested} key={subroute.title}>
                        <NavLink exact activeStyle={{color: 'white'}} to={`${url}${path}${subroute.id}`}>
                            <ListItemText primary={`${subroute.title}`}/>
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        )
    }

    const SimpleRoute =  ({path, label}) => {
        return (
            <ListItem key={label}>
                <NavLink exact activeStyle={{color: 'white'}} to={`${url}${path}`}>
                    <ListItemText primary={label}/>
                </NavLink>
            </ListItem>
        );
    }
    const saveAppointmentFormsToDB = (forms) => {
        console.log('save appointment forms is ' + JSON.stringify(forms));
        let promiseforms = [];
        forms.forEach(form => {
            promiseforms.push(createAppointmentForm(id, form));
        });
        Promise.all(promiseforms).then(results => {
            console.log(results);
            getAppointmentForms(id).then(response => {
                dispatch({type: 'load_all_appointment_forms', forms: response})
            });
        });
    }
    const convertAppointmentForms = (forms) => {
        let activeforms = forms;
        let appointmentforms = [];
        for (const form of activeforms) {
            console.log(`Title is: ${form.title}`);
            console.log(`Route is /${form.title.replace(/\s/g, '').toLocaleLowerCase()}`);
            appointmentforms.push({title: form.title, form_type: form.form_type, form:form.form, route: `/${form.title.replace(/\s/g, '').toLocaleLowerCase()}`});
        }
        for (const appointmentform of appointmentforms) {
            for (let field in appointmentform.form) {
                //console.log(`Form field label is ${filteredform.form[field].label}`)
                appointmentform.form[field].checked = false;
                appointmentform.form[field].value = null;
            }
        }
        console.log('Appointment forms are ' + JSON.stringify(appointmentforms));
        //save the converted forms to the db
        saveAppointmentFormsToDB(appointmentforms);
    }

    useEffect(() => {
        //check if appointment has any forms associated with it
        getAppointmentForms(id).then(response => {
            if(response.length > 0) {
                console.log('Forms were created already!');
                console.log('already created forms are ' + JSON.stringify(response));
                dispatch({type: 'load_all_appointment_forms', forms: response})
            } else {
                console.log('appointment forms need to be created!!Create them!');
                getAllActiveForms().then(response => {
                    convertAppointmentForms(response);
                    console.log('appointment forms are ' + JSON.stringify(appointmentforms));
                    // saveAppointmentFormsToDB(appointmentforms)
                });
                /*fetchAllForms().then(response => {
                    console.log('Template forms are ' + JSON.stringify(response))
                    filterAppointmentFormsAndLoadThem(response, "physical_exam");
                    filterAppointmentFormsAndLoadThem(response, "review_of_systems");
                })*/
            }

        }).catch(err => console.log(err));

    }, []);
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <List className={classes.list}>
                    <ListItem button onClick={() => setAppointmentInfoOpen(!appointmentinfoopen)}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Appointment Information" />
                        {appointmentinfoopen ? <ExpandLess /> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={appointmentinfoopen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        {appointmentroutes.map((route) => {
                            if(route.nestedroutes) {
                                return (
                                    <>
                                    <ListItem key={route.label}>
                                        <NavLink exact activeStyle={{color: 'white'}} to={`${url}${route.path}`}>
                                            <ListItemText  primary={`${route.label}`}/>
                                        </NavLink>
                                        {route.menuopen ? <ExpandLess onClick={route.openNestedMenu} /> : <ExpandMore onClick={route.openNestedMenu} />}
                                    </ListItem>
                                    <Collapse in={route.menuopen} timeout="auto" unmountOnExit>
                                        <DeepNestedList subroutes={route.subroutes} path={route.path} />
                                    </Collapse>
                                    </>
                                );
                            } else {
                                return (
                                    <SimpleRoute path={route.path} label={route.label} />
                                )
                            }

                        })}
                        </List>
                    </Collapse>

                    <ListItem key={`Patient_Information`} button onClick={() => setPatientOptionsOpen(!patientoptionsopen)}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Patient Information" />
                        {patientoptionsopen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={patientoptionsopen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {patientroutes.map((route) => (
                            <ListItem className={classes.nested} key={route.label}>
                                <NavLink exact activeStyle={{color: 'white'}} to={`${url}${route.path}`}>
                                    <ListItemText primary={<Typography variant="body1">{route.label}</Typography>}/>
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={10}>
                <Card className={`w3-padding-large`}>
                    <Typography>Patient Name</Typography>
                    <Typography>Allergies</Typography>
                </Card>
                    <Switch>
                        <Route path={`${path}/appointmentforms/:formId`}>
                            <AppointmentForm appointmentId={id} />
                        </Route>
                        {appointmentroutes.map ((route) => (
                            <Route exact key={route.label} path={`${path}${route.path}`} component={route.component} />
                        ))}
                        {patientroutes.map((route) => (
                            <Route exact key={route.label} path={`${path}${route.path}`} component={route.component} />

                        ))}
                    </Switch>

            </Grid>
        </Grid>
    );
}

/*
*/