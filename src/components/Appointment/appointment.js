import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { fetchAllForms } from "../../api/forms.api";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ListItemText from "@material-ui/core/ListItemText";
import PatientComplaints from "./Complaints/PatientComplaints";
import AppointmentROS from "./AppointmentROS/AppointmentROS";
// import AppointmentPhysicalExam from "./AppointmentPhysicalExam/AppointmentPhysicalExam";
import AppointmentAssessment from "./Assessment/AppointmentAssessment";
import AppointmentPlan from "./AppointmentPlan/AppointmentPlan";
import AppointmentFollowUp from "./AppointmentFollowUp/AppointmentFollowUp";
import AppointmentSummary from "./AppointmentSummary/AppointmentSummary";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import patientroutes from "../Patient/routes";
import AppointmentComplaints from "./Complaints/AppointmentComplaints/AppointmentComplaints";
import NewComplaint from "./Complaints/NewComplaint/NewComplaint.FunComp";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Card from "../basestyledcomponents/Card/Card";
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CardBody from "../basestyledcomponents/Card/CardBody";
import CardFooter from "../basestyledcomponents/Card/CardFooter";
import Collapse from "@material-ui/core/Collapse";
import BaseROSComponent from "./AppointmentROS/AppointmentROSComponents/BaseROSComponent";
import BasePhysicalExamComponent from "./AppointmentPhysicalExam/BasePhysicalExamComponent";
// import {ROSRoutes, PhysicalExamRoutes} from "./appointmentroutes";
import AppointmentForm from "./AppointmentForm/appointmentform";
import {
  getAppointmentForms,
  getAllActiveForms,
  createAppointmentForm,
  getAppointmentBasicDetails,
} from "../../api/appointment.api";
import AppointmentAllergiesWarning from "./appointmentallergieswarning";
import { getAllPatientAllergyInfo } from "../../api/patient.api";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppointmentClinicalData,
  getAllAppointmentInformation,
} from "../../api/forms.api";
import * as PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#BADDFF",
    minHeight: "100vh",
    boxShadow: "0 2px 4px rgba(0,0,0,.15)",
  },
  listitem: {
    display: "flex",
    justifyContent: "flex-start",
  },
  sideitem: {
    color: "#414141",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  base: {
    backgroundColor: "#fafafa",
  },
  deepnested: {
    paddingLeft: theme.spacing(6),
  },
}));

function UpcomingAppointmentForm() {
  return (
    <div>
      <Typography>Appointment Upcoming</Typography>
    </div>
  );
}

function AppointmentSidebar({
  appointmentinfoopen,
  appointmentroutes,
  callbackfn,
  classes,
  onClick,
  onClick1,
  patientoptionsopen,
  prop7,
}) {
  return (
    <List className={classes.list}>
      <ListItem button onClick={onClick}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Appointment Information" />
        {appointmentinfoopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={appointmentinfoopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {appointmentroutes.map(callbackfn)}
        </List>
      </Collapse>

      <ListItem button onClick={onClick1}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Patient Information" />
        {patientoptionsopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={patientoptionsopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {patientroutes.map(prop7)}
        </List>
      </Collapse>
    </List>
  );
}

AppointmentSidebar.propTypes = {
  classes: PropTypes.any,
  onClick: PropTypes.func,
  appointmentinfoopen: PropTypes.bool,
  appointmentroutes: PropTypes.any,
  callbackfn: PropTypes.func,
  onClick1: PropTypes.func,
  patientoptionsopen: PropTypes.bool,
  prop7: PropTypes.func,
};
export default function Appointment() {
  let { id } = useParams();
  const dispatch = useDispatch();
  let { path, url } = useRouteMatch();
  const practiceforms = useSelector((state) =>
    state.allpracticeforms.filter((form) => form.form_type === "physical_exam")
  );
  const [appointmentinfoopen, setAppointmentInfoOpen] = useState(true);
  const [rosopen, setROSOpen] = useState(false);
  const [examopen, setExamOpen] = useState(false);
  const [patientoptionsopen, setPatientOptionsOpen] = useState(false);
  const [appointmentstatus, setAppointmentStatus] = useState("active");
  const [patientname, setPatientName] = useState("");
  const [provider, setAssignedProvider] = useState();

  const classes = useStyles();
  const activelinkstyle = {
    fontWeight: "bold",
    backgroundColor: "blue",
    color: "white",
    width: "100%",
  };
  const appointmentroutes = [
    {
      path: "",
      label: "Complaints",
      nestedroutes: false,
      subroutes: [],
      component: PatientComplaints,
    },
    {
      //path: '/appointmentros/',
      path: "/appointmentros/",
      label: "Review of Systems",
      nestedroutes: false,
      subroutes: [],
      component: AppointmentROS,
    },
    {
      // path: '/appointmentexam/',
      path: "/appointmentforms/",
      label: "Physical Exam Forms",
      nestedroutes: true,
      menuopen: examopen,
      openNestedMenu() {
        setExamOpen(!examopen);
      },
      subroutes: practiceforms,
      component: AppointmentForm,
    },
    {
      path: "/assessment",
      label: "Assessment",
      nestedroutes: false,
      subroutes: [],
      component: AppointmentAssessment,
    },
    {
      path: "/plan",
      label: "Plan",
      nestedroutes: false,
      subroutes: [],
      component: AppointmentPlan,
    },
    {
      path: "/summary",
      label: "Summary",
      nestedroutes: false,
      subroutes: [],
      component: AppointmentSummary,
    },
  ];
  const DeepNestedList = ({ subroutes, path }) => {
    return (
      <List component="div" disablePadding>
        {subroutes.map((subroute) => (
          <ListItem className={classes.deepnested} key={subroute.title}>
            <NavLink
              exact
              activeStyle={{ color: "white" }}
              to={`${url}${path}${subroute.id}`}
            >
              <ListItemText primary={`${subroute.title}`} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    );
  };

  const SimpleRoute = ({ path, label }) => {
    return (
      <ListItem key={label}>
        <NavLink exact activeStyle={{ color: "white" }} to={`${url}${path}`}>
          <ListItemText primary={label} />
        </NavLink>
      </ListItem>
    );
  };
  const saveAppointmentFormsToDB = (forms) => {
    console.log("save appointment forms is " + JSON.stringify(forms));
    let promiseforms = [];
    forms.forEach((form) => {
      promiseforms.push(createAppointmentForm(id, form));
    });
    Promise.all(promiseforms).then((results) => {
      console.log(results);
      getAppointmentForms(id).then((response) => {
        dispatch({ type: "load_all_appointment_forms", forms: response });
      });
    });
  };
  const convertAppointmentForms = (forms) => {
    let activeforms = forms;
    let appointmentforms = [];
    for (const form of activeforms) {
      appointmentforms.push({
        id: form.id,
        title: form.title,
        form_type: form.form_type,
        form: form.form,
        route: `/${form.title.replace(/\s/g, "").toLocaleLowerCase()}`,
      });
    }
    for (const appointmentform of appointmentforms) {
      for (let field in appointmentform.form) {
        //console.log(`Form field label is ${filteredform.form[field].label}`)
        appointmentform.form[field].checked = false;
        appointmentform.form[field].value = null;
      }
    }
    console.log("Appointment forms are " + JSON.stringify(appointmentforms));
    return appointmentforms;
    //save the converted forms to the db
    //saveAppointmentFormsToDB(appointmentforms);
  };
  useEffect(() => {
    const getClinicalDataAndAllForms = async (appointmentId) => {
      const appointmentdetails = await getAllAppointmentInformation(id);
      const allforms = await fetchAllForms();
      return {
        appointmentdetails,
        allforms,
      };
    };
    getClinicalDataAndAllForms().then((dataandforms) => {
      console.log(dataandforms);
      if (dataandforms.appointmentdetails.status === "scheduled") {
        setAppointmentStatus("active");
      } else if (dataandforms.appointmentdetails.status === "encounter_ended") {
      } else {
        setAppointmentStatus("scheduled");
      }
      setPatientName(dataandforms.appointmentdetails.patient_display_name);
      setAssignedProvider(
        dataandforms.appointmentdetails.provider_display_name
      );
      const convertedforms = convertAppointmentForms(dataandforms.allforms);
      console.log(convertedforms);

      dispatch({
        type: "load_all_practice_forms",
        forms: convertedforms,
      });

      dispatch({
        type: "load_clinical_data",
        clinical_data: dataandforms.appointmentdetails.clinical_data,
      });
    });
  }, [id]);

  return (
    <Grid container className={classes.base} spacing={2}>
      <Grid item xs={2}>
        <AppointmentSidebar
          key={`Patient_Information`}
          classes={classes}
          onClick={() => setAppointmentInfoOpen(!appointmentinfoopen)}
          appointmentinfoopen={appointmentinfoopen}
          appointmentroutes={appointmentroutes}
          callbackfn={(route) => {
            if (route.nestedroutes) {
              return (
                <>
                  <ListItem key={route.label}>
                    <NavLink
                      exact
                      activeStyle={{ color: "white" }}
                      to={`${url}${route.path}`}
                    >
                      <ListItemText primary={`${route.label}`} />
                    </NavLink>
                    {route.menuopen ? (
                      <ExpandLess onClick={route.openNestedMenu} />
                    ) : (
                      <ExpandMore onClick={route.openNestedMenu} />
                    )}
                  </ListItem>
                  <Collapse in={route.menuopen} timeout="auto" unmountOnExit>
                    <DeepNestedList
                      subroutes={route.subroutes}
                      path={route.path}
                    />
                  </Collapse>
                </>
              );
            } else {
              return <SimpleRoute path={route.path} label={route.label} />;
            }
          }}
          onClick1={() => setPatientOptionsOpen(!patientoptionsopen)}
          patientoptionsopen={patientoptionsopen}
          prop7={(route) => (
            <ListItem className={classes.nested} key={route.label}>
              <NavLink
                exact
                activeStyle={{ color: "white" }}
                to={`${url}${route.path}`}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1">{route.label}</Typography>
                  }
                />
              </NavLink>
            </ListItem>
          )}
        />
      </Grid>
      <Grid item xs={10}>
        <Card raised>
          <CardHeader color="primary">
            <Typography>Patient Name: {patientname}</Typography>
          </CardHeader>
          <CardBody>
            <Typography>Provider Name: {provider}</Typography>
            <Typography>Appointment Status: {appointmentstatus}</Typography>
            <AppointmentAllergiesWarning />
          </CardBody>
          <CardFooter>
            <Typography>Begin Appointment</Typography>
            <Typography>Appointment started at: </Typography>
            <Typography>Appointment Completed on: </Typography>
          </CardFooter>
        </Card>
        <div>
          <Switch>
            {appointmentstatus === "scheduled" ? (
              <UpcomingAppointmentForm scheduling_note={``} />
            ) : (
              <Route path={`${path}/appointmentforms/:formId`}>
                <AppointmentForm appointmentId={id} />
              </Route>
            )}
            {appointmentroutes.map((route) => (
              <Route
                exact
                key={route.label}
                path={`${path}${route.path}`}
                component={route.component}
              />
            ))}
            {patientroutes.map((route) => (
              <Route
                exact
                key={route.label}
                path={`${path}${route.path}`}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Grid>
    </Grid>
  );
}

/*
useEffect(() => {
    getAppointmentBasicDetails(id).then((response) => {
      console.log(response);
      setAppointmentStatus(response.status);
      setPatientName(response.patient_display_name);
      setAssignedProvider(response.provider_display_name);
      getAllPatientAllergyInfo(response.patient).then((response) => {
        console.log("all allergy is " + JSON.stringify(response));
        const [
          latexallergies,
          pollenallergies,
          petallergies,
          drugallergies,
          foodallergies,
          insectallergies,
        ] = response;
        dispatch({ type: "load_latex_allergy", latexallergy: latexallergies });
        dispatch({
          type: "load_pollen_allergy",
          pollenallergy: pollenallergies,
        });
        dispatch({
          type: "load_all_drug_allergies",
          drugallergies: drugallergies,
        });
        dispatch({
          type: "load_all_food_allergies",
          foodallergies: foodallergies,
        });
        dispatch({
          type: "load_all_pet_allergies",
          petallergies: petallergies,
        });
        console.log("latex allergies are " + latexallergies.length);
      });
    });
  }, [id]);
 */

/*
  useEffect(() => {
    //check if appointment has any forms associated with it
    getAppointmentForms(id)
      .then((response) => {
        if (response.length > 0) {
          dispatch({ type: "load_all_appointment_forms", forms: response });
        } else {
          console.log("appointment forms need to be created!!Create them!");
          getAllActiveForms().then((response) => {
            convertAppointmentForms(response);
            console.log(
              "appointment forms are " + JSON.stringify(appointmentforms)
            );
            // saveAppointmentFormsToDB(appointmentforms)
          });
        }
      })
      .catch((err) => console.log(err));
  }, [id]);
 */

/*
    {
      path: "/followup",
      label: "Follow Up",
      nestedroutes: false,
      subroutes: [],
      component: AppointmentFollowUp,
    },
        setPollenStatus(pollenallergies);
        setPetStatus(petallergies);
        setDrugStatus(drugallergies);
        setFoodStatus(foodallergies);
        setInsectStatus(insectallergies);
 */
