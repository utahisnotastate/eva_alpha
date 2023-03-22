import * as React from "react";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import { Formik, Form, FieldArray, useFormikContext, Field } from "formik";

export default function EditOptions({ field, name }) {
  return (
    <FieldArray name={name} style={{ width: "100%" }}>
      {({ move, swap, remove, push, insert, unshift, pop, form }) => {
        return (
          <div>
            <Typography>Options</Typography>
            {field.options.map((option, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row"
                }}>
                <Field
                  component={TextField}
                  name={`${name}.${index}.label`}
                  label={`Label`}
                  margin={`normal`}
                  style={{ flexGrow: 2 }}
                  fullWidth
                />
                <div>
                  <Button
                    onClick={() => remove(index)}
                    color={`error`}
                    variant={`contained`} // remove a friend from the list
                  >
                    X
                  </Button>
                  <Button
                    onClick={() => push(index, { label: "" })} // insert an empty string at a position
                    variant={`contained`}>
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>
        );
      }}
    </FieldArray>
  );
}
