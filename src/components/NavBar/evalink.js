import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'

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
	navcontainer: {
		backgroundColor: theme.palette.primary,
	},
	link: {
		textDecoration: 'none',
	},
	item: {
		padding: theme.spacing(2),
		color: theme.palette.primary.contrastText,
	},
}))

export default function EvaLink({ path, label, displayInNav }) {
	const classes = useStyles()
	const [textvarient, setTextVarient] = React.useState('subtitle2')
	return (
		<>
			{displayInNav && (
				<NavLink to={path}>
					<Typography variant={textvarient} className={classes.item}>
						{label}
					</Typography>
				</NavLink>
			)}
		</>
	)
}
