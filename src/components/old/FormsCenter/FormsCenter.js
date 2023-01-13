/*
 *
 * THIS IS CURRENTLY NOT BEING USED
 *
 * */

import React from 'react'
import './formscenter.css'
import { useRouteMatch, Route } from 'react-router-dom'
import FormsCenterHome from './FormsCenterHome'
import FormEditor from './FormsCustomizer/FormEdItor/FormEditor'
import FormPreview from './FormPreview/formpreview'

export default function FormsCenter() {
	const { path } = useRouteMatch()
	return (
		<>
			<Route component={FormsCenterHome} exact path={`${path}`} />
			<Route component={FormEditor} path={`${path}/:formId/edit`} />
			<Route component={FormPreview} path={`${path}/:formId/preview`} />
		</>
	)
}
/*
<Route component={FormsCustomizer} path={`${path}/:formId/edit`} />
<Route
        component={() => <FormsCustomizer />}
        path={`${path}/:formId/edit`}
      />

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
