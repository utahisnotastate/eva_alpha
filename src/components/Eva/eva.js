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
import Scheduling from '../Scheduling/scheduling'
import FormEditor from '../FormEditor/formeditor'
import { getAllData } from '../../api/api'
import Requests from '../Requests/requests'
import Providers from '../Providers/providers'
import Settings from '../Settings/settings'
import AIAppointment from '../Appointment/AIAppointment/aiappointment'
import SpeechToText from '../EMRAutoAppointment/emrautoappointment'

const drawerWidth = 240

export default function Eva() {
	const dispatch = useDispatch()
	React.useEffect(() => {
		getAllData()
			.then((data) => {
				console.log(data)
				dispatch({ type: 'LOAD_PATIENTS', patients: data.patients })
				dispatch({
					type: 'LOAD_APPOINTMENTS',
					appointments: data.appointments,
				})
				dispatch({ type: 'LOAD_REQUESTS', requests: data.requests })
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
								<ListItemText primary={`AI Appointment`} />
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
						<NavLink to={`/speechtotext`}>
							<ListItemButton>
								<ListItemText primary={`Speech To Text`} />
							</ListItemButton>
						</NavLink>
					</ListItem>
					<ListItem disablePadding>
						<NavLink to={`/scheduling`}>
							<ListItemButton>
								<ListItemText primary={`Scheduling`} />
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
					<Route path="/speechtotext" element={<SpeechToText />} />
					<Route path="/appointment" element={<AIAppointment />} />
					<Route path="/providers" element={<Providers />} />
					<Route path="/requests" element={<Requests />} />
					<Route path="/patients" element={<Patients />} />
					<Route path="/patient/:id" element={<PatientPage />} />
					<Route path="/scheduling" element={<Scheduling />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</Box>
		</Box>
	)
}
