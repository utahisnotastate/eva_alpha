import React, { useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
	Box,
	Drawer,
	Toolbar,
	Typography,
	AppBar,
	Divider,
	ListItemButton,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import Navbar from '../NavBar/navbar'
import { getAllInitDataOnLoad } from '../../api/utility.api'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

const drawerWidth = 240
export default function Eva({ routes }) {
	const dispatch = useDispatch()

	useEffect(() => {
		getAllInitDataOnLoad()
			.then((data) => {
				dispatch({
					type: 'LOAD_APPOINTMENTS',
					appointments: data.appointments,
				})
				dispatch({ type: 'LOAD_FORMS', forms: data.forms })
				dispatch({ type: 'LOAD_REQUESTS', requests: data.requests })
				dispatch({ type: 'LOAD_SETTINGS', settings: data.settings })
			})
			.catch((err) => console.log(err))
	})
	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar
				position="fixed"
				sx={{
					width: `calc(100% - ${drawerWidth}px)`,
					ml: `${drawerWidth}px`,
				}}>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						EVA EMR
					</Typography>
				</Toolbar>
			</AppBar>
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
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map(
						(text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? (
											<InboxIcon />
										) : (
											<MailIcon />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						)
					)}
				</List>
				<Divider />
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{index % 2 === 0 ? (
										<InboxIcon />
									) : (
										<MailIcon />
									)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
				<Toolbar />
				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Rhoncus dolor purus non enim praesent elementum
					facilisis leo vel. Risus at ultrices mi tempus imperdiet.
					Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id
					donec ultrices. Odio morbi quis commodo odio aenean sed
					adipiscing. Amet nisl suscipit adipiscing bibendum est
					ultricies integer quis. Cursus euismod quis viverra nibh
					cras. Metus vulputate eu scelerisque felis imperdiet proin
					fermentum leo. Mauris commodo quis imperdiet massa
					tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
					At augue eget arcu dictum varius duis at consectetur lorem.
					Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>
				<Typography paragraph>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla
					est ullamcorper eget nulla facilisi etiam dignissim diam.
					Pulvinar elementum integer enim neque volutpat ac tincidunt.
					Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
					sit amet volutpat consequat mauris. Elementum eu facilisis
					sed odio morbi. Euismod lacinia at quis risus sed vulputate
					odio. Morbi tincidunt ornare massa eget egestas purus
					viverra accumsan in. In hendrerit gravida rutrum quisque non
					tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
					Habitant morbi tristique senectus et. Adipiscing elit duis
					tristique sollicitudin nibh sit. Ornare aenean euismod
					elementum nisi quis eleifend. Commodo viverra maecenas
					accumsan lacus vel facilisis. Nulla posuere sollicitudin
					aliquam ultrices sagittis orci a.
				</Typography>
			</Box>
		</Box>
	)
}

/*

<Router>
			<Navbar routes={routes} />
			<Switch>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.component}
					/>
				))}
			</Switch>
		</Router>
 *
 *
 * */
