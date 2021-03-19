import React from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addNewInsuranceForPatient,
  getPatientInsurance,
} from "../../../api/patient.api";

const API_URL = "http://127.0.0.1:8000/api";

export default function AddInsuranceForm(props) {
  const { register, control, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  let { id } = useParams();

  const saveNewPatientInsuranceAndReloadPatientInsurances = async (
    patientId,
    new_insurance
  ) => {
    const apiToSaveNewInsurance = await addNewInsuranceForPatient(
      patientId,
      new_insurance
    );
    const allpatientinsurance = await getPatientInsurance(patientId);

    dispatch({ type: "load_insurance", insurance: allpatientinsurance });

    console.log(apiToSaveNewInsurance);
    props.setModal(false);
  };
  //console.log(id);
  const onSubmit = (insurance) => {
    saveNewPatientInsuranceAndReloadPatientInsurances(id, insurance);
  };
  // console.log(errors);
  const style = {
    formrow: {
      display: "flex",
      justifyContent: "space-around",
      padding: 10,
    },
    textwidth: {
      width: "100%",
    },
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div style={style.formrow}>
          <Typography>Primary or Secondary Insurance</Typography>
          <div>
            <select name="type" ref={register}>
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
            </select>
          </div>
        </div>
        <div style={style.formrow}>
          <Typography>Insurance Name:</Typography>
          <TextField
            inputRef={register}
            name="insurance_name"
            defaultValue={``}
            style={style.textwidth}
          />
        </div>
        <div style={style.formrow}>
          <Typography>Member Number:</Typography>
          <TextField
            inputRef={register}
            name="member_id"
            defaultValue={``}
            style={style.textwidth}
          />
        </div>
        <div style={style.formrow}>
          <Typography>Group Number:</Typography>
          <TextField
            inputRef={register}
            name="group_id"
            defaultValue={``}
            style={style.textwidth}
          />
        </div>
        <div style={style.formrow}>
          <Typography>Bin Number:</Typography>
          <TextField
            inputRef={register}
            name="bin_number"
            defaultValue={``}
            style={style.textwidth}
          />
        </div>
        <div style={style.formrow}>
          <Typography>PCN Number:</Typography>
          <TextField
            inputRef={register}
            name="pcn"
            defaultValue={``}
            style={style.textwidth}
          />
        </div>
      </div>
      <div>
        <input type="submit" value="Save" />
      </div>
    </form>
  );
}

/*
        <div style={style.formrow}>
          <Typography>Copay Amount:</Typography>
          <TextField
            inputRef={register}
            name="copay_amount"
            defaultValue={``}
            style={style.textwidth}
          />
        </div>
<div style={style.formrow}>
          <Typography>Date coverage began:</Typography>
          <TextField
            inputRef={register}
            type={`date`}
            name="date_effective"
            defaultValue={``}
            style={style.textwidth}
          />
        </div>

          <Controller
            style={style.textwidth}
            label={`Enter Copay Amount`}
            name="copay_amount"
            as={<TextField type="number" />}
            control={control}
          />

          <Controller
            style={style.textwidth}
            name="date_effective"
            as={<TextField type="date" />}
            control={control}
          />

          <Controller
            style={style.textwidth}
            label={`Enter PCN number`}
            name="pcn"
            as={<TextField />}
            control={control}
          />

          <Controller
            style={style.textwidth}
            label={`Enter Bin number`}
            name="bin_number"
            as={<TextField />}
            control={control}
          />
<Controller
              style={style.textwidth}
              label={`Enter Group number`}
              name="group_ID"
              as={<TextField />}
              control={control}
          />

<Controller
            style={style.textwidth}
            label={`Enter Group number`}
            name="group_ID"
            as={<TextField />}
            control={control}
          />
<Controller
            style={style.textwidth}
            label={`Enter Memmber ID number`}
            name="member_id"
            as={<TextField />}
            control={control}
          />
<Controller
            style={style.textwidth}
            label={`Enter Insurance Name`}
            name="insurance_name"
            as={<TextField />}
            control={control}
          />
 */
