import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Provider } from 'react-redux'
import { ModalProvider } from 'react-modal-hook'
import store from './store/store'
import Eva from './components/Eva/eva'
import routes from './routes'

const theme = createTheme({
	palette: {
		primary: {
			main: blue[100],
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
		background: {
			default: '#9e9e9e',
		},
	},
	props: {
		MuiAppBar: {
			color: 'default',
		},
	},
})

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<Provider store={store}>
				<ModalProvider>
					<Eva routes={routes} />
				</ModalProvider>
			</Provider>
		</ThemeProvider>
	)
}
