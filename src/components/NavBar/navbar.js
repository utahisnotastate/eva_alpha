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

/*
<HoverMenu />

<NavLink to="/">
            <Typography variant="subtitle2" className={classes.item}>
              Home
            </Typography>
          </NavLink>
          <NavLink to="/scheduling">
            <Typography variant="subtitle2" className={classes.item}>
              Scheduling
            </Typography>
          </NavLink>
          <NavLink to="/clinicalqueue">
            <Typography variant="subtitle2" className={classes.item}>
              Clinical Queue
            </Typography>
          </NavLink>
          <NavLink to="/patientrequests">
            <Typography variant="subtitle2" className={classes.item}>
              Requests
            </Typography>
          </NavLink>
          <NavLink to="/patients">
            <Typography variant="subtitle2" className={classes.item}>
              Patients
            </Typography>
          </NavLink>
          <NavLink to="/claims">
            <Typography variant="subtitle2" className={classes.item}>
              Claims
            </Typography>
          </NavLink>
          <NavLink to="/evaadmin">
            <Typography variant="subtitle2" className={classes.item}>
              Administration
            </Typography>
          </NavLink>
          <NavLink to="/revenuecycle">
            <Typography variant="subtitle2" className={classes.item}>
              Revenue Cycle
            </Typography>
          </NavLink>
          <NavLink to="/faxes">
            <Typography variant="subtitle2" className={classes.item}>
              Faxes
            </Typography>
          </NavLink>
          <NavLink to="/formscenter">
            <Typography variant="subtitle2" className={classes.item}>
              Forms Center
            </Typography>
          </NavLink>
        </Toolbar>
 */
