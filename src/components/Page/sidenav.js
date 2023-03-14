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
	city: 'Los Angeles',
	country: 'USA',
	jobTitle: 'Senior Developer',
	name: 'Katarina Smith',
	timezone: 'GTM-7',
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
				<Avatar
					src={user.avatar}
					sx={{
						height: 64,
						mb: 1,
						width: 64,
					}}
				/>
				<Typography color="textPrimary" gutterBottom variant="h5">
					{user.name}
				</Typography>
				<Typography color="textSecondary" variant="body2">
					{`${user.city} ${user.country}`}
				</Typography>
				<Typography color="textSecondary" variant="body2">
					{user.timezone}
				</Typography>
			</Box>
		</CardContent>
		<Divider />
		<ListGroup variant="flush" style={{ textAlign: 'center' }}>
			{props.side_nav_items && props.side_nav_items.length > 0
				? props.side_nav_items.map((item, index) => (
						<ListGroup.Item
							key={index}
							onClick={() => console.log(item)}>
							{item}
						</ListGroup.Item>
				  ))
				: null}
		</ListGroup>
	</Card>
)
export default React.memo(SideNav)
