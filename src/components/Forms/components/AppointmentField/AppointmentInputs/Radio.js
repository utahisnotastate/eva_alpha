import React, { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Checkbox,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  InputLabel,
  RadioGroup,
  Radio,
  Input,
} from "@material-ui/core";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

const useStyles = makeStyles({
  fieldcontainer: {
    height: "100%",
  },
});

function RadioFieldInput(props) {
  const { register, control, setValue, getValues } = useFormContext();
  const handleRadioFieldChange = (e) => {
    if (e.target.value === "unchecked") {
      setValue(`${props.name}["checked"]`, false);
    } else {
      setValue(`${props.name}["checked"]`, true);
      // setValue(`${props.name}["value"]`, e.target.value);
    }
  };
  return (
    <Controller
      name={`${props.name}.value`}
      defaultValue={props.value}
      render={({ onChange, value, name }) => (
        <RadioGroup
          defaultValue={value}
          name={name}
          onChange={(e) => props.onChange(handleRadioFieldChange(e))}
        >
          {props.choices.map((choice, index) => (
            <div key={index}>
              <FormControlLabel
                value={choice.label}
                control={<Radio />}
                label={choice.label}
              />
            </div>
          ))}
          <FormControlLabel
            value="unchecked"
            control={<Radio />}
            label="Unchecked"
          />
        </RadioGroup>
      )}
    />
  );
}

export default function AppointmentRadioGroup(props) {
  const { register, control, setValue, getValues } = useFormContext();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      //control, // control props comes from useForm (optional: if you are using FormContext)
      name: `customformfields[${props.fieldindex}].choices`, // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );

  const classes = useStyles();
  return (
    <Controller
      name={`${props.name}`}
      defaultValue={props.value}
      render={({ onChange, onBlur, value, name }) => (
        <RadioFieldInput
          value={value}
          name={`${props.name}`}
          choices={props.choices}
          onChange={onChange}
          setValue={setValue}
          getValues={getValues}
          radioChange={props.radioChange}
        />
      )}
    />
  );
}

/*

<FormControlLabel
              value={choice.label}
              control={<Radio />}
              label={choice.label}
            />
handleRadioFieldChange(e)
onChange={(e) => props.onChange(e)}
 */
