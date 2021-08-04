import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import LanguageIcon from "@material-ui/icons/Language";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";
import "./formscenter.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import CardIcon from "../basestyledcomponents/Card/CardIcon";
import CardBody from "../basestyledcomponents/Card/CardBody";
import Card from "../basestyledcomponents/Card/Card";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import Modal from "../basestyledcomponents/Modal/modal";
import { fetchAllForms, updateFormProp } from "../../api/forms.api";
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CreateNewForm from "./newcustomform";
import CustomFormsCard from "./FCHomeComponents/CustomFormsList/CustomFormsCard";

const useStyles = makeStyles({
  root: {
    padding: 15,
  },
});

export default function FormsCenterHome() {
  const { path, url } = useRouteMatch();
  const classes = useStyles();
  console.log(`path is: ${path}`);
  console.log(`url is ${url}`);
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.formsmanager.forms);

  useEffect(() => {
    fetchAllForms().then((response) => {
      console.log(response);
      dispatch({ type: "load_forms", forms: response });
    });
  }, []);

  /*
              <Modal
                buttontext="Create New Clinical Exam Form"
                color="primary"
                form={CreateNewForm}
                formprops="physical_exam"
                modaltitle="Create New Clinical Exam Form"
              />
 */

  /*
    <CustomFormsCard
            listlabel={`Physical Exam`}
            forms={forms}
            typeOfFormToShow={"physical_exam"}
            url={url}
          />

          <CustomFormsCard
            listlabel={`Review Of Systems`}
            forms={forms}
            typeOfFormToShow={"review_of_systems"}
            url={url}
          />
     */

  return (
    <div className={classes.root}>
      <GridContainer>
        <GridItem md={4} xs={10}>
          <CustomFormsCard
            listlabel={`Physical Exam`}
            forms={forms}
            typeOfFormToShow={"physical_exam"}
            url={url}
          />
        </GridItem>
        <GridItem md={4} xs={10}>
          <CustomFormsCard
            listlabel={`Review Of Systems`}
            forms={forms}
            typeOfFormToShow={"review_of_systems"}
            url={url}
          />
        </GridItem>
        <GridItem md={4} xs={10}>
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

/*
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
                            checked={ros.active}
                            edge="end"
                            onChange={() =>
                              handleActiveSwitchChange(ros.active, ros.id)
                            }
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))
                )}
              </List>
              <Modal
                buttontext="Create New Review of Systems Form"
                color="primary"
                form={CreateNewForm}
                formprops="review_of_systems"
                modaltitle="Create New Review of Systems Form"
              />
            </CardBody>
          </Card>
 */
