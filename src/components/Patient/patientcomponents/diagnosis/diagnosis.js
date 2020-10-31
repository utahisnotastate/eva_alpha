import React, { useEffect, useState } from "react";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import Table from "../../../basestyledcomponents/Table/Table";
import style from "../../../basestyledcomponents/Table/contentAreas";
import Person from "@material-ui/icons/Person";
import Button from "../../../basestyledcomponents/Table/Button";
import { Paper, Typography } from "@material-ui/core";
import CustomTabs from "../../../basestyledcomponents/CustomTabs/CustomTabs";
import DiagnosisSummary from "./diagnosissummary";
import { getPatientDiagnoses } from "../../../../api/patient.api";
import { useSelector, useDispatch } from "react-redux";
import { patientdiagnoses } from "../../../../store/reducers/patient/patient.reducers";
import NewDiagnosis from "./addDiagnosis";
import ResolvedDiagnoses from "./ResolvedDiagnoses";

const useStyles = makeStyles(style);

export default function Diagnosis(props) {
  const classes = useStyles();
  let { id } = useParams();
  const dispatch = useDispatch();
  const diagnoses = useSelector((state) => state.patient.patientdiagnoses);
  //const [diagnoses, setDiagnoses] = useState(["Flu", "Asthma"]);
  const columnheaders = [
    "Type",
    "Status",
    "Date Opened",
    "Assigned to",
    "Last Updated",
    "Actions",
  ];
  const fillButtons = [{ color: "success", icon: Person }].map((prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  const loadDiagnoses = () => {
    getPatientDiagnoses(id).then((response) => {
      console.log("Diagnosis response is " + JSON.stringify(response));
      dispatch({ type: "load_all_diagnoses", diagnoses: response });
    });
  };

  useEffect(() => {
    getPatientDiagnoses(id).then((response) => {
      console.log("Diagnosis response is " + JSON.stringify(response));
      dispatch({ type: "load_all_diagnoses", diagnoses: response });
    });
  }, [id]);
  return (
    <GridContainer direction="column" justify="center">
      <GridItem xs={12} sm={10}>
        <NewDiagnosis patientId={id} loadDiagnoses={loadDiagnoses} />
      </GridItem>

      {diagnoses.length > 0 ? (
        diagnoses.map((diagnosis) => (
          <GridItem xs={12} sm={10}>
            <Typography>{`${diagnosis.diagnosis_icd_code} ${diagnosis.diagnosis_description}`}</Typography>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "Summary",
                  tabIcon: Person,
                  tabContent: <DiagnosisSummary />,
                },
                {
                  tabName: "Medications",
                  tabIcon: Person,
                  tabContent: (
                    <Table
                      tableHeaderColor="primary"
                      tableHead={columnheaders}
                      tableData={[
                        [
                          "1",
                          "Andrew Mike",
                          "Develop",
                          "2013",
                          "€ 99,225",
                          fillButtons,
                        ],
                        [
                          "2",
                          "Utah Doe",
                          "Design",
                          "2012",
                          "€ 89,241",
                          fillButtons,
                        ],
                        [
                          "3",
                          "Alex Mike",
                          "Design",
                          "2010",
                          "€ 92,144",
                          fillButtons,
                        ],
                      ]}
                      customCellClasses={[
                        classes.textCenter,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customClassesForCells={[0, 4, 5]}
                      customHeadCellClasses={[
                        classes.textCenter,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customHeadClassesForCells={[0, 4, 5]}
                    />
                  ),
                },
                {
                  tabName: "Radiology History",
                  tabIcon: Person,
                  tabContent: (
                    <Table
                      tableHeaderColor="primary"
                      tableHead={columnheaders}
                      tableData={[
                        [
                          "1",
                          "Andrew Mike",
                          "Develop",
                          "2013",
                          "€ 99,225",
                          fillButtons,
                        ],
                        [
                          "2",
                          "Utah Doe",
                          "Design",
                          "2012",
                          "€ 89,241",
                          fillButtons,
                        ],
                        [
                          "3",
                          "Alex Mike",
                          "Design",
                          "2010",
                          "€ 92,144",
                          fillButtons,
                        ],
                      ]}
                      customCellClasses={[
                        classes.textCenter,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customClassesForCells={[0, 4, 5]}
                      customHeadCellClasses={[
                        classes.textCenter,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customHeadClassesForCells={[0, 4, 5]}
                    />
                  ),
                },
                {
                  tabName: "Lab History",
                  tabIcon: Person,
                  tabContent: (
                    <Table
                      tableHeaderColor="primary"
                      tableHead={columnheaders}
                      tableData={[
                        [
                          "1",
                          "Andrew Mike",
                          "Develop",
                          "2013",
                          "€ 99,225",
                          fillButtons,
                        ],
                        [
                          "2",
                          "Utah Doe",
                          "Design",
                          "2012",
                          "€ 89,241",
                          fillButtons,
                        ],
                        [
                          "3",
                          "Alex Mike",
                          "Design",
                          "2010",
                          "€ 92,144",
                          fillButtons,
                        ],
                      ]}
                      customCellClasses={[
                        classes.textCenter,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customClassesForCells={[0, 4, 5]}
                      customHeadCellClasses={[
                        classes.textCenter,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customHeadClassesForCells={[0, 4, 5]}
                    />
                  ),
                },
                {
                  tabName: "Referral History",
                  tabIcon: Person,
                  tabContent: (
                    <Table
                      tableHeaderColor="primary"
                      tableHead={columnheaders}
                      tableData={[
                        [
                          "1",
                          "Andrew Mike",
                          "Develop",
                          "2013",
                          "€ 99,225",
                          fillButtons,
                        ],
                        [
                          "2",
                          "Utah Doe",
                          "Design",
                          "2012",
                          "€ 89,241",
                          fillButtons,
                        ],
                        [
                          "3",
                          "Alex Mike",
                          "Design",
                          "2010",
                          "€ 92,144",
                          fillButtons,
                        ],
                      ]}
                      customCellClasses={[
                        classes.textCenter,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customClassesForCells={[0, 4, 5]}
                      customHeadCellClasses={[
                        classes.textCenter,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customHeadClassesForCells={[0, 4, 5]}
                    />
                  ),
                },
              ]}
            />
          </GridItem>
        ))
      ) : (
        <Typography>
          No diagnoses has been listed for the patient. Please enter any.
        </Typography>
      )}
      <GridItem>
        <ResolvedDiagnoses />
      </GridItem>
    </GridContainer>
  );
}
