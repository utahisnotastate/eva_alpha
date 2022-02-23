import React, { useEffect } from 'react'
import { useRouteMatch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import FormsBuilderHome from './FormsBuilderHome/FormsBuilderHome'
import FormEditor from './FormEditor/FormEditor'
import FormPreview from './FormPreview/formpreview'
import { fetchAllForms } from '../../api/forms.api'

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
	},
})

function FormsBuilder() {
	const { path } = useRouteMatch()
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		fetchAllForms().then((response) => {
			console.log(response)
			console.log('forms loggeed')
			dispatch({ type: 'load_forms', forms: response })
		})
	}, [])

	return (
		<div className={classes.root}>
			<Route exact path={`${path}`}>
				<FormsBuilderHome />
			</Route>
			<Route path={`${path}/:id/edit`}>
				<FormEditor />
			</Route>
			<Route path={`${path}/:formId/preview`}>
				<FormPreview />
			</Route>
		</div>
	)
}
export default React.memo(FormsBuilder)
/*
<Route component={FormsBuilderHome} exact path={`${path}`} />
      <Route component={FormEditor} path={`${path}/:formId/edit`} />
      <Route component={FormPreview} path={`${path}/:formId/preview`} />


      <div className={classes.root}>
      <Route exact path={`${path}`}>
        <FormsBuilderHome />
      </Route>
      <Route path={`${path}/:formId/edit`}>
        <FormEditor />
      </Route>
      <Route path={`${path}/:formId/preview`}>
        <FormPreview />
      </Route>
    </div>
 */
