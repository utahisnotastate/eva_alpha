import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@material-ui/core";

export default function NavLinks(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <List component="nav">
        <ListItem>
          <NavLink exact to={url}>
            <ListItemText primary={`View Encounter`} />
          </NavLink>
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <Typography>Patient Details</Typography>
        {props.patientroutes && props.patientroutes.length > 0 ? (
          props.patientroutes.map((route) => (
            <NavLink exact to={`${url}/test`}>
              <ListItemText primary={`${route.label}`} />
            </NavLink>
          ))
        ) : (
          <ListItemText primary={`Sorry Nothing`} />
        )}
      </List>
    </div>
  );
}
