import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../../basestyledcomponents/Card/Card";
import CardIcon from "../../../basestyledcomponents/Card/CardIcon";
import LanguageIcon from "@material-ui/icons/Language";
import CardHeader from "../../../basestyledcomponents/Card/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";
import CardBody from "../../../basestyledcomponents/Card/CardBody";
import CustomFormsList from "./CustomFormsList";

/*
forms give all forms
<CustomFormsList
 forms={forms}
 listtitle={"Physical Exam"}
 typeOfFormToShow={"physical_exam"}
 url={props.url}
 />
 */

export default function CustomFormsCard(props) {
  async function handleFormStatusUpdate(status, id) {
    console.log("clicked");
  }

  return (
    <Card>
      <CardHeader icon>
        <CardIcon color="primary">
          <LanguageIcon />
        </CardIcon>
      </CardHeader>
      <CardBody>
        <Typography>{props.listlabel} Forms</Typography>
        {props.forms && props.forms.length > 0 ? (
          <CustomFormsList
            forms={props.forms}
            url={props.url}
            typeOfFormToShow={props.typeOfFormToShow}
          />
        ) : (
          <Typography>
            There have been no {props.listtitle} forms created. Create One!
          </Typography>
        )}
      </CardBody>
    </Card>
  );
}

/*
<List>
          {props.forms && props.forms.length === 0 ? (
            <Typography>
              There have been no {props.listtitle} forms created. Create One!
            </Typography>
          ) : (
            props.forms
              .filter((form) => form.form_type === props.typeOfFormToShow)
              .map((form) => (
                <ListItem key={form.id}>
                  <NavLink to={`${props.url}/${form.id}/edit`}>
                    <ListItemText
                      primary={<Typography>{form.title}</Typography>}
                    />
                  </NavLink>
                  <ListItemSecondaryAction>
                    <Switch
                      checked={form.active}
                      edge={`end`}
                      onChange={handleFormStatusUpdate}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))
          )}
        </List>
 */
