import * as React from 'react'
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Typography from '@mui/material/Typography'

const Appointments = (props) => {
	return (
		<Card {...props}>
			<CardHeader
				action={
					<Button
						endIcon={<ArrowDropDownIcon fontSize="small" />}
						size="small">
						Last 7 days
					</Button>
				}
				title="Appointments"
			/>
			<Divider />
			<CardContent>
				<Box
					sx={{
						height: 400,
						position: 'relative',
					}}>
					<Typography>Appointments and stuff</Typography>
				</Box>
			</CardContent>
			<Divider />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					p: 2,
				}}>
				<Button
					color="primary"
					endIcon={<ArrowRightIcon fontSize="small" />}
					size="small">
					Overview
				</Button>
			</Box>
		</Card>
	)
}

export default Appointments
