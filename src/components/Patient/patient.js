import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import SimpleSideBar from './patientcomponents/simplesidebar/simplesidebar'
import routes from './routes'
import { getPatientInformation } from '../../api/patient.api'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	list: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		backgroundColor: '#BADDFF',
		minHeight: '100vh',
		boxShadow: '0 2px 4px rgba(0,0,0,.15)',
	},
	listitem: {
		display: 'flex',
		justifyContent: 'flex-start',
	},
	sideitem: {
		color: '#414141',
	},
}))

export default function Patient() {
	let { path } = useRouteMatch()
	let { id } = useParams()
	const patient = useSelector((state) => state.patient)

	const dispatch = useDispatch()

	const handleSave = (patient) => {
		console.log(patient)
	}
	useEffect(() => {
		getPatientInformation(id)
			.then((patient) => {
				dispatch({ type: 'LOAD_PATIENT', patient })
			})
			.catch((error) => {
				console.log(error)
			})
	}, [id])
	return (
		<Grid container spacing={3}>
			<Grid item xs={2}>
				<SimpleSideBar routes={routes} />
			</Grid>
			<Grid item xs={10}>
				<Formik
					initialValues={patient}
					enableReinitialize
					onSubmit={(patient) => handleSave(patient)}>
					<Form>
						<Button
							variant={`contained`}
							onClick={() => handleSave(patient)}>
							Save!
						</Button>
						<Switch>
							{routes.map((route, index) => (
								<Route
									key={index}
									exact
									path={`${path}${route.path}`}
									component={route.component}
								/>
							))}
						</Switch>
					</Form>
				</Formik>
			</Grid>
		</Grid>
	)
}
