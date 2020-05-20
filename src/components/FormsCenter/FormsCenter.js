import React, {useState} from "react";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import Card from "../basestyledcomponents/Card/Card";
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CardBody from "../basestyledcomponents/Card/CardBody";
import {Button, Typography} from "@material-ui/core";
import './formscenter.css';
import {useRouteMatch, Switch, Route,} from "react-router-dom";
import FormsCenterHome from "./FormsCenterHome";
import FormsCustomizer from "./FormsCustomizer/formscustomizer";
import FormEditor from "./FormsCustomizer/FormEdItor/FormEditor";
import FormPreview from "./FormPreview/formpreview";


const log = (type) => console.log.bind(console, type);

export default function FormsCenter(props) {
    let { path, url } = useRouteMatch();
    return (
        <div style={{padding: 15}}>
            <GridContainer>
                    <GridItem xs={10}>
                       <Route exact path={`${path}`} component={FormsCenterHome} />
                        <Route path={`${path}/:formId/edit`} component={FormsCustomizer}/>
                        <Route path={`${path}/:formId/preview`} component={FormPreview}/>
                </GridItem>
            </GridContainer>
        </div>
    )
}