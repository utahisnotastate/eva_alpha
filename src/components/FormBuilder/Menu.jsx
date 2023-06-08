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

const Menu = (props) => (
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
			<ListGroup.Item>Physical Exam</ListGroup.Item>
			<ListGroup.Item>New Complaint</ListGroup.Item>
			<ListGroup.Item>New Plan</ListGroup.Item>
			<ListGroup.Item>New Assessment</ListGroup.Item>
			<ListGroup.Item>Medical History</ListGroup.Item>
			<ListGroup.Item>Requests</ListGroup.Item>
			<ListGroup.Item>Diagnosis</ListGroup.Item>
		</ListGroup>
	</Card>
)

export default Menu
