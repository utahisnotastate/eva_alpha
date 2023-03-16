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
import PatientPage from '../Patient/patient'
import Patients from '../Patients/patients'
import Schedule from '../Scheduling/Schedule'
import FormBuilder from '../FormBuilder/formbuilder'
import Page from '../Page/page'
import { getAllData } from '../../api/api'
import Requests from '../Requests/Requests'
import Appointment from '../Appointment/appointment'
import Providers from '../Providers/providers'

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
		getAllData()
			.then((data) => {
				console.log('Forms:', data.forms)
				dispatch({ type: 'LOAD_FORMS', forms: data.forms })
				console.log('Patients:', data.patients)
				dispatch({ type: 'LOAD_PATIENTS', patients: data.patients })
				console.log('Appointments:', data.appointments)
				dispatch({
					type: 'LOAD_APPOINTMENTS',
					appointments: data.appointments,
				})
				console.log('Requests:', data.requests)
				dispatch({ type: 'LOAD_REQUESTS', requests: data.requests })

				console.log('Providers', data.providers)
				dispatch({ type: 'LOAD_PROVIDERS', providers: data.providers })
			})
			.catch((error) => {
				console.error('Error fetching data:', error)
			})
	}, [])

	return (
		<Box sx={{ display: 'flex' }}>
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
						<NavLink to={`/providers`}>
							<ListItemButton>
								<ListItemText primary={`Providers`} />
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
			<Box
				sx={{
					flexGrow: 1,
					bgcolor: 'background.default',
					p: 3,
				}}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/formbuilder" element={<FormBuilder />} />

					<Route path="/appointment" element={<AppointmentPage />} />
					<Route path="/providers" element={<Providers />} />
					<Route path="/requests" element={<Requests />} />
					<Route path="/patients" element={<Patients />} />
					<Route path="/patient/:id" element={<PatientPage />} />
					<Route path="/schedule" element={<Schedule />} />
				</Routes>
			</Box>
		</Box>
	)
}
