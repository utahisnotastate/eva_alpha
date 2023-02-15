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
import { useDispatch } from 'react-redux'
import { getAllInitDataOnLoad } from '../../api/utility.api'
import { NavLink, Route, Routes } from 'react-router-dom'

import Home from '../Home/home'
import Patient from '../Patient/patient'
import Patients from '../Patients/patients'
import Schedule from '../Scheduling/Schedule'
import ChatGPTFormBuilder from '../FormBuilder/chatgptcomponents/chatgptformbuilder'
import FormBuilder from '../FormBuilder/formbuilder'
import Page from '../Page/page'

const drawerWidth = 240

//create a router for the app using the Home and Patient components
//create a router for the app using the Home and Patient components

export default function Eva() {
	const dispatch = useDispatch()

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
						<NavLink to={`/patients`}>
							<ListItemButton>
								<ListItemText primary={`Patients`} />
							</ListItemButton>
						</NavLink>
					</ListItem>
					<ListItem disablePadding>
						<NavLink to={`/patient/:id`}>
							<ListItemButton>
								<ListItemText primary={`Patient`} />
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
					<Route path="/" element={<Home />} />
					<Route path="/formbuilder" element={<FormBuilder />} />
					<Route
						path="/settings"
						element={<Patient title={`Settings`} />}
					/>
					<Route
						path="/patients"
						element={<Patients title={`Patients`} />}
					/>
					<Route
						path="/patient/:id"
						element={<Page title={`Patient`} />}
					/>
					<Route path="/schedule" element={<Schedule />} />
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
