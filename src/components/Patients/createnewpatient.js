import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import TextField from "@material-ui/core/TextField";
import { Input } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const styles = {
  input: {
    width: "100%",
  },
};

export default function CreateNewPatient() {
  const { register, handleSubmit, errors, control } = useForm();
  let { history } = useHistory();
  const [usercreated, setUserCreated] = useState(false);
  const [newuserid, setNewUserId] = useState();
  const onSubmit = (data) => {
    console.log("first name: " + data.first_name);
    console.log("date of birth: " + data.date_of_birth);
    console.log("middle name: " + data.middle_name);
    console.log("last name: " + data.last_name);
    console.log("preferred name: " + data.preferred_name);
    console.log("ssn: " + data.ssn);
    axios
      .post("http://127.0.0.1:8000/api/patients/", {
        first_name: data.first_name,
        date_of_birth: data.date_of_birth,
        middle_name: data.middle_name,
        last_name: data.last_name,
        preferred_name: data.preferred_name,
        ssn: data.ssn,
        patient_demographics: {
          race: "unknown",
          gender: "unknown",
          marital_status: "unknown",
          employment_status: "unknown",
        },
        patient_address: {
          address_one: "unknown",
          address_two: "unknown",
          city: "unknown",
          state: "unknown",
          zip_code: "unknown",
        },
        patient_contact_methods: [],
      })
      .then((response) => {
        if (response.statusText === "Created") {
          const patientId = response.data.id;
          console.log("patient id: " + patientId);
          setNewUserId(patientId);
          setUserCreated(true);
          // history.push(`/patient/${patientId}`)
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(errors);
  };

  return (
    <div>
      <div>
        {usercreated ? (
          <Redirect to={`/patient/${newuserid}/demographics`} />
        ) : null}
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <GridContainer direction={`column`}>
            <GridItem xs={12}>
              <Typography>Register New Patient</Typography>
            </GridItem>
            <GridItem xs={12}>
              <GridContainer>
                <GridItem xs={4}>
                  <Typography>Date of Birth*</Typography>
                </GridItem>
                <GridItem xs={8}>
                  <TextField
                    type="date"
                    style={styles.input}
                    inputRef={register({ required: true })}
                    name={`date_of_birth`}
                    placeholder={`mm/dd/yyyy`}
                  />
                  {errors.date_of_birth && "Date of Birth is required"}
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12}>
              <GridContainer>
                <GridItem xs={4}>
                  <Typography>First Name*</Typography>
                </GridItem>
                <GridItem xs={8}>
                  <TextField
                    style={styles.input}
                    inputRef={register({ required: true })}
                    name={`first_name`}
                    placeholder={`First Name`}
                  />
                  {errors.first_name && "First Name is required"}
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12}>
              <GridContainer>
                <GridItem xs={4}>
                  <Typography>Middle Name*</Typography>
                </GridItem>
                <GridItem xs={8}>
                  <TextField
                    style={styles.input}
                    inputRef={register({ required: true })}
                    name={`middle_name`}
                    placeholder={`Middle Name`}
                  />
                  {errors.middle_name && "Middle Name is required"}
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12}>
              <GridContainer>
                <GridItem xs={4}>
                  <Typography>Last Name*</Typography>
                </GridItem>
                <GridItem xs={8}>
                  <TextField
                    style={styles.input}
                    inputRef={register({ required: true })}
                    name={`last_name`}
                    placeholder={`Last Name`}
                  />
                  {errors.last_name && "Last Name is required"}
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12}>
              <GridContainer>
                <GridItem xs={4}>
                  <Typography>Preferred Name</Typography>
                </GridItem>
                <GridItem xs={8}>
                  <TextField
                    style={styles.input}
                    inputRef={register}
                    name={`preferred_name`}
                    placeholder={`Preferred Name`}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12}>
              <GridContainer>
                <GridItem xs={4}>
                  <Typography>SSN*</Typography>
                </GridItem>
                <GridItem xs={8}>
                  <TextField
                    style={styles.input}
                    inputRef={register({ required: true })}
                    name={`ssn`}
                    placeholder={`SSN`}
                  />
                  {errors.ssn && "SSN is required"}
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem>
              <input
                style={styles.input}
                type="submit"
                value={`Create Patient`}
              />
            </GridItem>
          </GridContainer>
        </form>
      </div>
    </div>
  );
}

/*
<Controller
                    style={styles.input}
                    name={`ssn`}
                    as={<TextField type={`number`} />}
                    rules={{ required: true }}
                    control={control}
                    placeholder={`SSN`}
                  />

<Controller
                    style={styles.input}
                    name={`preferred_name`}
                    as={TextField}
                    control={control}
                    placeholder={`Preferred Name`}
                  />

<Controller
                    style={styles.input}
                    name={`last_name`}
                    as={TextField}
                    rules={{ required: true }}
                    control={control}
                    placeholder={`Last Name`}
                  />

<Controller
                    style={styles.input}
                    name={`middle_name`}
                    rules={{ required: true }}
                    as={TextField}
                    control={control}
                    placeholder={`Middle Name`}
                  />

<Controller
                    style={styles.input}
                    name={`first_name`}
                    as={TextField}
                    rules={{ required: true }}
                    control={control}
                    placeholder={`First Name`}
                  />

<Controller
                    style={styles.input}
                    name={`date_of_birth`}
                    rules={{ required: true }}
                    as={<TextField type="date" />}
                    control={control}
                    placeholder={`mm/dd/yyyy`}
                  />
<input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
                    <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
                    <input type="text" placeholder="Middle Name" name="Middle Name" ref={register} />
                    <input type="text" placeholder="Preferred Name" name="Preferred Name" ref={register} />
                    <input type="datetime" placeholder="Date of Birth" name="Date of Birth" ref={register} />


 */
