import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import Card from "../../../basestyledcomponents/Card/Card";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";
import axios from "axios";
import PresentUnpresentAllergy from "./presentunpresentallergy/presentunpresentallergy";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AllergyList from "./allergylist/allergylist";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import MUIDataTable from "mui-datatables";
import { getAllPatientAllergyInfo } from "../../../../api/patient.api";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  formcontainer: {
    marginBottom: 15,
  },
  areaicon: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  areatitletext: {
    padding: 20,
  },
});

export default function Allergies(props) {
  let { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [latexstatus, setlatexstatus] = useState();
  const [pollenstatus, setpollenstatus] = useState();
  const drugallergies = useSelector(
    (state) => state.patient.patientallergies.drugallergies
  );
  const foodallergies = useSelector(
    (state) => state.patient.patientallergies.foodallergies
  );
  const [insectallergies, setInsectAllergies] = useState([]);

  const [options, setOptions] = useState({
    searchOpen: false,
    serverSide: false,
    textLabels: {
      body: {
        noMatch: "SORRY NO MATCHES FOUND",
      },
    },
    elevation: 2,
    searchPlaceholder: "Search by medication name",
    print: false,
    filter: false,
    download: false,
    selectableRows: "none",
    viewColumns: false,
  });

  const drugallergycolumns = [
    {
      name: "drug",
      label: "Drug",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];
  const foodallergycolumns = [
    {
      name: "food",
      label: "food",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];
  const insectallergycolumns = [
    {
      name: "food",
      label: "food",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  useEffect(() => {
    getAllPatientAllergyInfo(id)
      .then((response) => {
        console.log("all allergy is " + JSON.stringify(response));
        const [
          latexallergies,
          pollenallergies,
          petallergies,
          drugallergies,
          foodallergies,
          insectallergies,
        ] = response;
        console.log("latex allergies are " + latexallergies.length);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div style={{ margin: 20 }}>
      <Grid container className={classes.root} alignItems="flex-start">
        <div>
          <Paper className={classes.areaicon} square>
            <AssignmentIcon />
            <Typography className={classes.areatitletext} variant="subtitle2">
              Drug Allergies
            </Typography>
          </Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square>
            <MUIDataTable
              data={drugallergies}
              options={options}
              columns={drugallergycolumns}
            />
          </Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square>
            <AssignmentIcon />
            <Typography className={classes.areatitletext} variant="subtitle2">
              Food Allergies
            </Typography>
          </Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square></Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square>
            <AssignmentIcon />
            <Typography className={classes.areatitletext} variant="subtitle2">
              Insect Allergies
            </Typography>
          </Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square></Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square>
            <AssignmentIcon />
            <Typography className={classes.areatitletext} variant="subtitle2">
              Latex Allergy
            </Typography>
          </Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square>
            <PresentUnpresentAllergy allergy={`Latex`} status={latexstatus} />
          </Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square>
            <AssignmentIcon />
            <Typography className={classes.areatitletext} variant="subtitle2">
              Pet Allergies
            </Typography>
          </Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square></Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square>
            <AssignmentIcon />
            <Typography className={classes.areatitletext} variant="subtitle2">
              Pollen Allergy
            </Typography>
          </Paper>
        </div>
        <div>
          <Paper className={classes.areaicon} square>
            <PresentUnpresentAllergy allergy={`Pollen`} status={pollenstatus} />
          </Paper>
        </div>
      </Grid>
    </div>
  );
}

/*
  useEffect(() => {
    getPatientLatexAllergies(id)
      .then((response) => {
        console.log("latex allergy is " + JSON.stringify(response));
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getPatientPollenAllergies(id)
      .then((response) => {
        console.log("pollen allergy is " + JSON.stringify(response));
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getPatientDrugAllergies(id)
      .then((response) => {
        console.log("drug allergy is " + JSON.stringify(response));
      })
      .catch((error) => console.log(error));
  }, [id]);
 */

/*
    const fetchData = async () => {
      const result = await axios(
        `http://127.0.0.1:8000/api/patients/${id}/drugallergy/`
      );
      return result;
      //console.log(result.data);
      //setDrugAllergies(result.data);
    };
const fetchData = async () => {
      const result = await axios(
        `http://127.0.0.1:8000/api/patients/${id}/latexallergy/`
      );
      return result;

      // setlatexstatus(result.data[0].status)
    };

const fetchData = async () => {
      const result = await axios(
        `http://127.0.0.1:8000/api/patients/${id}/pollenallergy/`
      );
      return result.data;
      // console.log(result.data[0].status)
      // setpollenstatus(result.data[0].status);
    };
 */
