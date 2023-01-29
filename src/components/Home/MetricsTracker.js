import * as React from 'react'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MoneyIcon from '@mui/icons-material/Money'

const MetricsTracker = ({ label, value }) => (
	<Card sx={{ height: '100%' }}>
		<CardContent>
			<Grid
				container
				spacing={3}
				sx={{ justifyContent: 'space-between' }}>
				<Grid item>
					<Typography
						sx={{ color: '#002F6C' }}
						gutterBottom
						variant="overline">
						{label}
					</Typography>
					<Typography color="textPrimary" variant="h4">
						{value}
					</Typography>
				</Grid>
				<Grid item>
					<Avatar
						sx={{
							backgroundColor: 'error.main',
							height: 56,
							width: 56,
						}}>
						<MoneyIcon />
					</Avatar>
				</Grid>
			</Grid>
			<Box
				sx={{
					pt: 2,
					display: 'flex',
					alignItems: 'center',
				}}>
				<ArrowDownwardIcon color="error" />
				<Typography
					color="error"
					sx={{
						mr: 1,
					}}
					variant="body2">
					12%
				</Typography>
				<Typography color="textSecondary" variant="caption">
					Since last month
				</Typography>
			</Box>
		</CardContent>
	</Card>
)

export default MetricsTracker
