import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
/*import Card from "../../basestyledcomponents/Card/Card";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";*/
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useField,
  useFormikContext,
} from "formik";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  Grid,
  Radio,
  Typography,
  FormControl,
  FormControlLabel,
  MenuItem,
  FormLabel,
  FormGroup,
  InputLabel,
  Input,
} from "@material-ui/core";
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  RadioGroup,
  Select,
  Switch,
} from "formik-material-ui";
import { useParams } from "react-router-dom";

export default function CompletedAppointment() {
  return (
    <div>
      <Typography>Completed Appointment</Typography>
    </div>
  );
}
