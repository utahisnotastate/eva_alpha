import * as React from 'react'
import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
} from '@mui/material'
export default function Request() {
	const [updates, setUpdates] = React.useState([])

	return (
		<Card>
			<CardHeader title="Request" />
			<Divider />
			<CardContent>
				<div style={{ display: 'flex' }}>
					<Typography
						variant="h6"
						color="textSecondary"
						component="p">
						Update
					</Typography>
				</div>
				<Divider />
			</CardContent>
		</Card>
	)
}
