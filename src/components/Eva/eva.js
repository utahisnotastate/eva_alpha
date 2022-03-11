import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ModalProvider } from 'react-modal-hook'
import Navbar from '../NavBar/navbar'

export default function Eva({ routes }) {
	return (
		<Router>
			<ModalProvider>
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
			</ModalProvider>
		</Router>
	)
}
