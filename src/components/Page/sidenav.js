import * as React from 'react'
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Divider,
	Typography,
} from '@mui/material'
import ListGroup from 'react-bootstrap/ListGroup'

const user = {
	avatar: '/static/images/avatars/avatar_6.png',
	gender: 'male',
	dateOfBirth: '1995-12-25',
	city: 'Los Angeles',
	country: 'USA',
	jobTitle: 'Senior Developer',
	name: 'Katarina Smith',
	timezone: 'GTM-7',
	appointment: {
		start: '1:00',
		end: '1:30',
	},
}

const SideNav = (props) => (
	<Card {...props}>
		<CardContent>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Typography color="textPrimary" gutterBottom variant="h5">
					{user.name}
				</Typography>
				<Typography color="textSecondary" variant="body2">
					{`${user.gender} ${user.dateOfBirth}`}
				</Typography>
				<Typography color="textSecondary" variant="body2">
					{user.appointment.start} -{user.appointment.end}
				</Typography>
			</Box>
		</CardContent>
		<Divider />
		<ListGroup variant="flush" style={{ textAlign: 'center' }}>
			{props.side_nav_items && props.side_nav_items.length > 0
				? props.side_nav_items.map((item, index) => (
						<ListGroup.Item
							key={index}
							onClick={() => props.setActiveZone(item)}>
							{item}
						</ListGroup.Item>
				  ))
				: null}
		</ListGroup>
	</Card>
)
export default React.memo(SideNav)
