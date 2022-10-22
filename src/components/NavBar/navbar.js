import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import EvaLink from './evalink'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#ffffff',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
	},
	item: {
		padding: theme.spacing(2),
		color: theme.palette.primary.contrastText,
	},
}))

export default function NavBar({ routes }) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<AppBar color={`primary`} position="static">
				<Toolbar>
					{routes && routes.length > 0
						? routes.map((link, index) => (
								<EvaLink
									key={index}
									path={link.path}
									label={link.label}
									displayInNav={link.displayInNav}
								/>
						  ))
						: null}
				</Toolbar>
			</AppBar>
		</div>
	)
}
