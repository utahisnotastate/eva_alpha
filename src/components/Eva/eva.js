import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../NavBar/navbar'
import { getAllInitDataOnLoad } from '../../api/utility.api'
import { getAllForms } from '../../api/forms.api'

export default function Eva({ routes }) {
	const dispatch = useDispatch()

	console.log(
		'Find the inspiration for your new button design. Click on an element to copy the CSS!'
	)

	useEffect(() => {
		getAllForms()
		getAllInitDataOnLoad()
			.then((data) => {
				dispatch({ type: 'LOAD_PATIENTS', patients: data.patients })
				dispatch({
					type: 'LOAD_APPOINTMENTS',
					appointments: data.appointments,
				})
				dispatch({ type: 'LOAD_FORMS', forms: data.forms })
				dispatch({ type: 'LOAD_EDITFORM', editform: data.forms[0] })
				dispatch({ type: 'LOAD_REQUESTS', requests: data.requests })
				dispatch({ type: 'LOAD_SETTINGS', settings: data.settings })
			})
			.catch((err) => console.log(err))
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
