import React from 'react'
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
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Home/home'
import Patient from '../Patient/patient'
import Patients from '../Patients/patients'
import Schedule from '../Scheduling/Schedule'
import FormBuilder from '../FormBuilder/formbuilder'
import Page from '../Page/page'
import { getForms, getPatients } from '../../api/api'
import { getAllPatients } from '../../api/patients.api'
import Requests from '../Requests/Requests'
import Appointment from '../Appointment/appointment'

const drawerWidth = 240

export default function Eva() {
	const dispatch = useDispatch()
	const AppointmentPage = () => {
		return (
			<Page
				title={`Appointment`}
				side_nav_items={[
					'complaints',
					'assessment',
					'physical exam',
					'review of systems',
					'follow up',
					'summary',
				]}>
				<Appointment />
			</Page>
		)
	}

	React.useEffect(() => {
		getForms()
			.then((forms) => {
				dispatch({ type: 'LOAD_FORMS', forms })
				dispatch({ type: 'LOAD_FORM_TO_EDIT', form: forms[0] })
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

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
						<NavLink to={`/appointment`}>
							<ListItemButton>
								<ListItemText primary={`Appointment`} />
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
						<NavLink to={`/requests`}>
							<ListItemButton>
								<ListItemText primary={`Requests`} />
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
					<Route path="/appointment" element={<AppointmentPage />} />

					<Route path="/requests" element={<Requests />} />
					<Route path="/patients" element={<Patients />} />
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
