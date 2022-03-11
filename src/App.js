import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { ModalProvider } from 'react-modal-hook'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

import './styles/w3.css'

import { allReducers } from './store/reducers/combined'
import 'react-bootstrap-typeahead/css/Typeahead.css'

import theme from './styles/theme'

import Eva from './components/Eva/eva'
import routes from './routes'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)))

function App() {
	const [evaroutes, setRoutes] = useState()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		//wrap setRoutes in a setTimeout to allow the app to render before loading the routes
		setTimeout(() => {
			setRoutes(routes)
			setIsLoading(false)
		}, 3000)
	}, [])
	return (
		<Provider store={store}>
			{isLoading ? <p>Loading</p> : <Eva routes={routes} />}
		</Provider>
	)
}

function themedApp() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	)
}

export default themedApp

/*
* /*
import FormsBuilder from './redone/FormsBuilder/FormsBuilder'
import FormsCenter from './components/FormsCenter/FormsCenter'
import NavBar from './components/NavBar/navbar'
import Home from './components/Home/home'
import ScheduleAppointment from './components/Forms/Administrative/Scheduling/ScheduleAppointment/scheduleappointment'
import ClinicalQueue from './components/ClinicalQueue/clinicalqueue'
import MedicalAppointment from './components/Appointment/components/medicalappointment'
import Patient from './components/Patient/patient'
import PatientRequests from './components/PatientRequests/patientrequests'
import Patients from './components/Patients/patients'
import Scheduling from './components/Scheduling/scheduling'
* */

/*
*
* <ModalProvider>
				<Router>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/appointments/:id">
							<MedicalAppointment />
						</Route>
						<Route path="/clinicalqueue">
							<ClinicalQueue />
						</Route>
						<Route exact path="/patients">
							<Patients />
						</Route>
						<Route exact path="/patientrequests">
							<PatientRequests />
						</Route>
						<Route component={FormsBuilder} path="/formscenter" />

						<Route component={Patient} path="/patient/:id" />
						<Route component={Scheduling} path="/scheduling/:id" />
						<Route component={Scheduling} path="/scheduling" />
						<Route
							component={ScheduleAppointment}
							path="/schedule/:id"
						/>
					</Switch>
				</Router>
			</ModalProvider>
* */
