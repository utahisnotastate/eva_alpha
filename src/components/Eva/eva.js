import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../NavBar/navbar'

export default function Eva({ routes }) {
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