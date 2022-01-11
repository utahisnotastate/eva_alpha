import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import { Card, CardContent, CardActions, CardHeader } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
    padding: "1rem",
    border: "1px solid #ccc",
  },
  fieldinput: {
    margin: ".5rem",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AddField({ arrayHelpers, types }) {
  const [fieldchosen, setFieldchosen] = useState("");
  const [label, setLabel] = useState("");
  const classes = useStyles();

  const handleTypeChange = (event) => {
    setFieldchosen(event.target.value);
    //console.log(event.target.value);
  };

  const handleLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const handleAddField = () => {
    arrayHelpers.push({
      type: fieldchosen,
      label: label,
    });
    setFieldchosen("");
    setLabel("");
  };

  return (
    <Card>
      <CardHeader title="Add Field" />
      <CardContent>
        <FormGroup sx={{ gap: 2 }}>
          <FormControl>
            <InputLabel htmlFor={`field-type`} shrink>
              Field Type
            </InputLabel>
            <Select
              id={`field-type`}
              value={fieldchosen}
              onChange={handleTypeChange}
            >
              {types && types.length > 0
                ? types.map((type, index) => (
                    <MenuItem key={index} value={type.type}>
                      {type.label}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor={`field-label`} shrink>
              Label
            </InputLabel>
            <TextField
              className={classes.fieldinput}
              id={`field-label`}
              name={`label`}
              onChange={handleLabelChange}
              value={label}
            />
          </FormControl>
          <FormControl>
            <Button
              variant={`contained`}
              color={`primary`}
              onClick={handleAddField}
            >
              Add Field
            </Button>
          </FormControl>
        </FormGroup>
      </CardContent>
    </Card>
  );
}

/*
 * Typography variant="h6">Add Field</Typography>
 *
 * */
