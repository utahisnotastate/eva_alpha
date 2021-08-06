import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";

export default function CustomFormsListItem(props) {
  async function handleFormStatusUpdate() {
    console.log("clicked");
  }
  /*
     const handleActiveSwitchChange = (activestatus, formId) => {
       updateFormProp(formId, { active: !activestatus }).then((response) => {
         fetchAllForms().then((response) => {
           dispatch({ type: "load_forms", forms: response });
         });
       });
     };

       <CustomFormsListItem
        id = {form.id}
        url={url}
        title={form.title}
        active={form.active}
       />
        */

  return (
    <ListItem key={props.key}>
      <NavLink to={`${props.url}/${props.id}/edit`}>
        <ListItemText primary={<Typography>{props.title}</Typography>} />
      </NavLink>
      <ListItemSecondaryAction>
        <Switch
          checked={props.active}
          edge={`end`}
          onChange={handleFormStatusUpdate}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}
