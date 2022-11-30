import React, { useState, useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

export default function DynamicAppointmentForm(props) {
  const methods = useFormContext();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: `clinical_data[${props.form_type}]`, // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );
  return (
    <div>
      {fields.map((field, index) => (
        <input
          type="text"
          key={field.title}
          ref={methods.register}
          name={`clinical_data[${props.form_type}][${index}].title`}
          placeholder={`test`}
        />
      ))}
    </div>
  );
}
