import React from 'react'
import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Home/home'
import PatientPage from '../Patient/patient'
import Patients from '../Patients/patients'
import Schedule from '../Scheduling/Schedule'
import FormEditor from '../FormEditor/formeditor'
import { getAllData } from '../../api/api'
import Requests from '../Requests/requests'
import Appointment from '../Appointment/appointment'
import Providers from '../Providers/providers'
import Settings from '../Settings/settings'
//import FormBuild from '../FormBuilder/formbuilder'

const drawerWidth = 240

export default function Eva() {
	const dispatch = useDispatch()
	const fields = [
		{ label: 'Label 1', type: 'text', placeholder: '', helperText: '' },
		{ label: 'Label 2', type: 'textarea', placeholder: '', helperText: '' },
		{
			label: 'Label 3',
			type: 'select',
			options: [
				{ label: 'Option Label 1' },
				{ label: 'Option Label 2' },
				{ label: 'Option Label 3' },
			],
		},
	]

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
					<Route path="/formbuilder" element={<FormEditor />} />

					<Route path="/appointment" element={<Appointment />} />
					<Route path="/providers" element={<Providers />} />
					<Route path="/requests" element={<Requests />} />
					<Route path="/patients" element={<Patients />} />
					<Route path="/patient/:id" element={<PatientPage />} />
					<Route path="/schedule" element={<Schedule />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</Box>
		</Box>
	)
}
