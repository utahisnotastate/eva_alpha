import React from "react";
import Card from "@mui/material/Card";
import { Field } from "formik";
import { CardActions, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import DynamicField from "../../../../DynamicField/DynamicField";
import EditFieldPreview from "./EditFieldPreview/EditFieldPreview";
import LabelTextFieldRow from "./LabelTextFieldRow/LabelTextFieldRow";
import FieldOptionsEditor from "./FieldOptionsEditor/FieldOptionsEditor";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: "1rem",
  },
}));

export default function EditField({ type, label, options, index, name }) {
  const classes = useStyles();

  return (
    <Card variant={`outlined`}>
      <CardContent>
        <LabelTextFieldRow label={`Label`} name={name} index={index} />
        {options ? (
          <FieldOptionsEditor
            name={`${name}.${index}.choices`}
            options={options}
            index={index}
          />
        ) : null}
      </CardContent>
      <CardActions>
        <EditFieldPreview
          type={type}
          label={label}
          options={options}
          name={name}
          index={index}
        />
      </CardActions>
    </Card>
  );
}
/*
<EditFieldPreview
          type={type}
          label={label}
          options={options}
          index={index}
        />

<DynamicTextField label={label} />
<DynamicField
          type={type}
          options={choices ? choices : []}
          label={label}
          index={index}
        />
 */
