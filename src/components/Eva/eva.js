import React, { useEffect } from 'react'
import {
	AppBar,
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	TextField,
	Toolbar,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllInitDataOnLoad } from '../../api/utility.api'
import { NavLink, Route, Routes } from 'react-router-dom'

import Home from '../Home/home'
import Patient from '../Patient/patient'
import Schedule from '../Scheduling/Schedule'
import FormBuilder from '../FormBuilder/formbuilder'
import Appointment from '../Appointment/appointment'

const drawerWidth = 240

//create a router for the app using the Home and Patient components
//create a router for the app using the Home and Patient components

export default function Eva() {
	const dispatch = useDispatch()
	const patients = useSelector((state) => state.patients)
	const requests = useSelector((state) => state.requests)
	const forms = useSelector((state) => state.forms)
	const settings = useSelector((state) => state.settings)
	const appointments = useSelector((state) => state.appointments)

	useEffect(() => {
		getAllInitDataOnLoad()
			.then((data) => {
				dispatch({
					type: 'LOAD_APPOINTMENTS',
					appointments: data.appointments,
				})
				dispatch({ type: 'LOAD_PATIENTS', patients: data.patients })
				dispatch({ type: 'LOAD_FORMS', forms: data.forms })
				dispatch({ type: 'LOAD_REQUESTS', requests: data.requests })
				dispatch({ type: 'LOAD_SETTINGS', settings: data.settings })
			})
			.catch((err) => console.log(err))
	})
	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar
				position="fixed"
				sx={{
					width: `calc(100% - ${drawerWidth}px)`,
					ml: `${drawerWidth}px`,
				}}>
				<Toolbar>
					<TextField
						id="filled-basic"
						sx={{ width: '100%', color: 'white' }}
						label="Search Patients"
						variant="standard"
						options={patients}
					/>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="permanent"
				anchor="left">
				<Toolbar />
				<Divider />
				<List>
					<ListItem disablePadding>
						<NavLink to={`/`}>
							<ListItemButton>
								<ListItemText primary={`Home`} />
							</ListItemButton>
						</NavLink>
					</ListItem>
					<ListItem disablePadding>
						<NavLink to={`/formbuilder`}>
							<ListItemButton>
								<ListItemText primary={`Form Builder`} />
							</ListItemButton>
						</NavLink>
					</ListItem>
					<ListItem disablePadding>
						<NavLink to={`/settings`}>
							<ListItemButton>
								<ListItemText primary={`Settings`} />
							</ListItemButton>
						</NavLink>
					</ListItem>
				</List>
			</Drawer>
			<Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								requests={requests}
								appointments={appointments}
							/>
						}
					/>
					<Route
						path="/formbuilder"
						element={
							<FormBuilder
								forms={forms}
								title={`Physical Exam`}
								fields={[
									{
										type: 'text',
										label: 'This is a text field',
									},
									{
										type: 'text',
										label: 'Second Field',
									},
								]}
								blankField={{
									type: 'text',
									label: '',
									options: [],
								}}
							/>
						}
					/>
					<Route
						path="/settings"
						element={<Patient title={`Settings`} />}
					/>
					<Route
						path="/patient/:id"
						element={
							<Patient
								patient={{
									firstName: 'Utah',
									lastname: 'Hans',
									appointments: [],
									requests: [],
									diagnoses: [],
									medications: [],
								}}
								title={`First Name Last Name`}
							/>
						}
					/>
					<Route path="/appointment/:id" element={<Appointment />} />
					<Route
						path="/request/:id"
						element={
							<Patient
								patient={{
									firstName: 'Utah',
									lastname: 'Hans',
									appointments: [],
									requests: [],
									diagnoses: [],
									medications: [],
								}}
								title={`Appointment`}
							/>
						}
					/>
					<Route
						path="/schedule"
						element={<Schedule appointments={appointments} />}
					/>
				</Routes>
			</Box>
		</Box>
	)
}

/*

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
 *
 *
 * */
