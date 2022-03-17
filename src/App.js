import React, { useState, useEffect } from 'react'
import { red } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { getAllPatients } from './api/patients.api'
import { ModalProvider } from 'react-modal-hook'
import { fetchAllForms } from './api/forms.api'
import { getAllAppointments } from './api/appointment.api'
import getAllRequests from './api/requests.api'
import { useDispatch } from 'react-redux'
import store from './store/store'
import Eva from './components/Eva/eva'
import routes from './routes'

const theme = createTheme({
	palette: {
		primary: {
			main: red[500],
		},
	},
})

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<ModalProvider>
					<Eva routes={routes} />
				</ModalProvider>
			</Provider>
		</ThemeProvider>
	)
}
