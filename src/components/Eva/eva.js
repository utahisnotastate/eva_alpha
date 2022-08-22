import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../NavBar/navbar'
import { getAllInitDataOnLoad } from '../../api/utility.api'
import { getAllPatients } from '../../api/patients.api'

export default function Eva({ routes }) {
	const dispatch = useDispatch()

	useEffect(() => {
		getAllPatients()
			.then((data) => {
				console.log(data)
				/*dispatch({ type: 'LOAD_SETTINGS', settings: data.settings })
				dispatch({
					type: 'LOAD_APPOINTMENTS',
					appointments: data.appointments,
				})*/
				dispatch({ type: 'LOAD_PATIENTS', patients: data })
				/*dispatch({ type: 'LOAD_REQUESTS', requests: data.requests })
				dispatch({
					type: 'LOAD_FORMS',
					forms: data.settings.details.forms,
				})*/
			})
			.catch((err) => {
				console.log(err)
			})
	})

	return (
		<Router>
			<Navbar routes={routes} />
			<Switch>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.component}
					/>
				))}
			</Switch>
		</Router>
	)
}
