import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './styles/theme'
import { Provider } from 'react-redux'
import { ModalProvider } from 'react-modal-hook'
import store from './store/store'
import Eva from './components/Eva/eva'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<Provider store={store}>
				<ModalProvider>
					<BrowserRouter>
						<Eva routes={routes} />
					</BrowserRouter>
				</ModalProvider>
			</Provider>
		</ThemeProvider>
	)
}
