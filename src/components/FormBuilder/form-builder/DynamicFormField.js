import React from "react";
import { TextField } from "formik-mui";
import { Field } from "formik";
import EVASelectField from "./EVASelectField";

export default function DynamicFormField({ field, name, index }) {
  return (
    <div>
      {field.type === "select" ? (
        <EVASelectField field={field} name={`fields.${index}`} />
      ) : (
        <TextField field={field} name={`${name}.value`} />
      )}
    </div>
  );
}
