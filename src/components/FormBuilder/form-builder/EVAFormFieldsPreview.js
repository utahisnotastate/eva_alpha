import React from "react";
import { Formik, Form, FieldArray, useFormikContext, Field } from "formik";
import DynamicFormField from "./DynamicFormField";
import { TextField } from "formik-mui";

export default function EVAFormFieldsPreview({ name }) {
  const { values } = useFormikContext();
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div>
          {values.fields && values.fields.length > 0
            ? values.fields.map((field, index) => (
                <div key={index}>
                  <Field
                    variant="standard"
                    component={TextField}
                    label={field.label}
                    name={`fields.${index}.value`}
                    placeholder={field.placeholder}
                    helperText={field.helperText}
                    type={field.type}
                    fullWidth
                  />
                </div>
              ))
            : null}
          <input type="submit" />
        </div>
      )}
    />
  );
}
