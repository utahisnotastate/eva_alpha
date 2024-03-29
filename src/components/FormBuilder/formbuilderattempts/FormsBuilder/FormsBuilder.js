import React from 'react'
import { useRouteMatch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import FormsBuilderHome from './FormsBuilderHome/FormsBuilderHome'
import FormEditor from './FormEditor/FormEditor'
import FormPreview from './FormPreview/formpreview'

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
	},
})

export default function FormsBuilder() {
	const { path } = useRouteMatch()
	const classes = useStyles()
	const forms = useSelector((state) => state.forms)
	const activeEditForm = useSelector((state) => state.activeEditForm)
	const dispatch = useDispatch()
	return (
		<div className={classes.root}>
			<Route exact path={`${path}`}>
				<FormsBuilderHome forms={forms} />
			</Route>
			<Route path={`${path}/:id/edit`}>
				<FormEditor activeEditForm={activeEditForm} />
			</Route>
			<Route path={`${path}/:id/preview`}>
				<FormPreview activeEditForm={activeEditForm} />
			</Route>
		</div>
	)
}
