import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import DraftsIcon from "@material-ui/icons/Drafts";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";

export default function Sidebar({routes}) {
  const [open, setOpen] = useState(false);

  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Appointment Information" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component={`div`} disablePadding>
            {routes && routes.length > 0 ? routes.map((route) => (
              <ListItem button key={route.path}>
                <ListItemIcon>
                  <route.icon />
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            )}) : null}
              </List>
        </Collapse>
    </List>

  );
}