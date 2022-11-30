import React from "react";
import { FieldArray, Field, useFormikContext } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";

import Grid from "@material-ui/core/Grid";

export default function RelatedToAssessment(props) {
  return (
    <Grid item>
      <FieldArray
        name={props.name}
        render={(arrayHelpers) => (
          <Grid container>
            {props.items && props.items.length > 0 ? (
              props.items.map((complaint, index) => (
                <Grid item key={index}>
                  <Field
                    component={CheckboxWithLabel}
                    type="checkbox"
                    name={`${props.name}[${index}].relatedTo`}
                    Label={{ label: complaint.complaint_name }}
                  />
                </Grid>
              ))
            ) : (
              <p>Please add Complaints</p>
            )}
          </Grid>
        )}
      />
    </Grid>
  );
}
