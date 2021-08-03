import React, { useState, useEffect } from "react";
import { Field, useField, FieldArray, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

export default function ROSFieldCreator(props) {
  const { values } = useFormikContext();
  const [field, meta] = useField(props);
  const [choices, setChoices] = useState([]);
  const [system, setSystem] = useState();

  return (
    <div>
      <FieldArray name={`new_ros_field.choices`}>
        {(arrayHelpers) => (
          <div>
            {values.new_ros_field.choices &&
            values.new_ros_field.choices.length > 0 ? (
              <div>
                {values.new_ros_field.choices.map((choice, index) => (
                  <div key={index}>
                    <Field
                      component={TextField}
                      name={`new_ros_field.choices.${index}.label`}
                      fullWidth
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Typography>No choices added yet</Typography>
            )}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Field
                component={TextField}
                name={`new_ros_field.label`}
                fullWidth
              />
              <Button
                onClick={() =>
                  arrayHelpers.push({
                    label: values.new_ros_field.label,
                    choices: [],
                  })
                }
              />
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}
