import React, { useState } from "react";
import "./formscenter.css";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import FormsCenterHome from "./FormsCenterHome";
import FormsCustomizer from "./FormsCustomizer/formscustomizer";
import FormPreview from "./FormPreview/formpreview";

const log = (type) => console.log.bind(console, type);

export default function FormsCenter(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Route exact path={`${path}`} component={FormsCenterHome} />
      <Route
        path={`${path}/:formId/edit`}
        component={() => <FormsCustomizer />}
      />
      <Route path={`${path}/:formId/preview`} component={FormPreview} />
    </div>
  );
}
/*

<div style={{ padding: 15 }}>
      <GridContainer>
        <GridItem>
          <Route exact path={`${path}`} component={FormsCenterHome} />
          <Route path={`${path}/:formId/edit`} component={FormsCustomizer} />
          <Route path={`${path}/:formId/preview`} component={FormPreview} />
        </GridItem>
      </GridContainer>
    </div>


<Route path={`${path}/:formId/edit`} component={FormsCustomizer}/>
 */
