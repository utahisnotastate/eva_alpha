import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchAllForms, updateFormProp } from "../../api/forms.api";
import Modal from "../basestyledcomponents/Modal/modal";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import Card from "../basestyledcomponents/Card/Card";
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CardBody from "../basestyledcomponents/Card/CardBody";
import CardIcon from "../basestyledcomponents/Card/CardIcon";
import LanguageIcon from "@material-ui/icons/Language";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import Button from "../basestyledcomponents/Button";
import { Typography } from "@material-ui/core";
import "./formscenter.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import CreateNewForm from "./newcustomform";

const styles = {
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  root: {
    margin: 15,
  },
};
const useStyles = makeStyles(styles);
const API_URL = "http://127.0.0.1:8000/api";

export default function FormsCenterHome(props) {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  console.log("path is: " + path);
  console.log("url is " + url);
  const dispatch = useDispatch();
  // const physicalexamforms = useSelector(state => state.formsmanager.physicalexamforms);
  // const reviewofsystemsforms = useSelector(state => state.formsmanager.reviewofsystemsforms);
  // const medicalhistoryforms = useSelector(state => state.formsmanager.medicalhistoryforms);
  const forms = useSelector((state) => state.formsmanager.forms);

  const handleActiveSwitchChange = (activestatus, formId) => {
    updateFormProp(formId, { active: !activestatus }).then((response) => {
      fetchAllForms().then((response) => {
        dispatch({ type: "load_forms", forms: response });
      });
    });
  };

  useEffect(() => {
    fetchAllForms().then((response) => {
      console.log(response);
      dispatch({ type: "load_forms", forms: response });
    });
  }, []);

  return (
    <div style={{ padding: 15 }}>
      <GridContainer>
        <GridItem xs={10} md={4}>
          <Card>
            <CardHeader icon>
              <CardIcon color="primary">
                <LanguageIcon />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <Typography>Physical Exam Forms</Typography>
              <List>
                {forms.length === 0 ? (
                  <div>
                    <Typography>
                      There are no physical exam forms. Create one!{" "}
                    </Typography>
                  </div>
                ) : (
                  forms
                    .filter((form) => form.form_type === "physical_exam")
                    .map((physicalexam, index) => (
                      <ListItem key={index}>
                        <NavLink to={`${url}/${physicalexam.id}/edit`}>
                          <ListItemText
                            primary={
                              <Typography>{physicalexam.title}</Typography>
                            }
                          />
                        </NavLink>
                        <ListItemSecondaryAction>
                          <Switch
                            edge={`end`}
                            onChange={() =>
                              handleActiveSwitchChange(
                                physicalexam.active,
                                physicalexam.id
                              )
                            }
                            checked={physicalexam.active}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))
                )}
              </List>
              <Modal
                color={`primary`}
                buttontext={`Create New Clinical Exam Form`}
                modaltitle={`Create New Clinical Exam Form`}
                form={CreateNewForm}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={10} md={4}>
          <Card>
            <CardHeader icon>
              <CardIcon color="primary">
                <LanguageIcon />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <Typography>Customize Review of System Forms</Typography>
              <List>
                {forms.length === 0 ? (
                  <div>
                    <Typography>
                      There are no review of system forms. Create one!
                    </Typography>
                  </div>
                ) : (
                  forms
                    .filter((form) => form.form_type === "review_of_systems")
                    .map((ros, index) => (
                      <ListItem key={index}>
                        <NavLink to={`${url}/${ros.id}/edit`}>
                          <ListItemText
                            primary={<Typography>{ros.title}</Typography>}
                          />
                        </NavLink>
                        <ListItemSecondaryAction>
                          <Switch
                            edge={`end`}
                            onChange={() =>
                              handleActiveSwitchChange(ros.active, ros.id)
                            }
                            checked={ros.active}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))
                )}
              </List>
              <Modal
                color={`primary`}
                buttontext={`Create New Review of Systems Form`}
                modaltitle={`Create New Review of Systems Form`}
                form={CreateNewForm}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={10} md={4}>
          <Card>
            <CardHeader icon>
              <CardIcon color="primary">
                <LanguageIcon />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <Typography>Create Custom Complaint Form from scratch</Typography>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

/* */
