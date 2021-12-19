import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import "./formscenter.css";
import { useRouteMatch } from "react-router-dom";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import { fetchAllForms } from "../../api/forms.api";
import CustomFormsCard from "./FCHomeComponents/CustomFormsList/CustomFormsCard";

const useStyles = makeStyles({
  root: {
    padding: 15,
  },
});

export default function FormsCenterHome() {
  const { url } = useRouteMatch();
  const classes = useStyles();
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.formsmanager.forms);

  useEffect(() => {
    fetchAllForms().then((response) => {
      console.log(response);
      dispatch({ type: "load_forms", forms: response });
    });
  }, []);

  return (
    <div className={classes.root}>
      <GridContainer>
        <GridItem md={4} xs={10}>
          <CustomFormsCard
            forms={forms}
            listlabel={`Physical Exam`}
            typeOfFormToShow={"physical_exam"}
            url={url}
          />
        </GridItem>
        <GridItem md={4} xs={10}>
          <CustomFormsCard
            forms={forms}
            listlabel={`Review Of Systems`}
            typeOfFormToShow={"review_of_systems"}
            url={url}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
