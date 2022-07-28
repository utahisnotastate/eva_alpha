import React from 'react'
import { red } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { ModalProvider } from 'react-modal-hook'
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
