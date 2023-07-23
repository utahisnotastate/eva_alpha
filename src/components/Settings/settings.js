import * as React from 'react'
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Container,
	Divider,
	Grid,
	Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import SideNav from './sidenav'
import { FormBuilder } from 'cb-react-forms'

function Settings({ title }) {
	const [forms, setForms] = React.useState([
		{ name: 'Edit Demographics' },
		{ name: 'Edit Physical Exam Form' },
		{ name: 'Edit Medical History Form' },
		{ name: 'Edit Family History Form' },
		{ name: 'Edit Social History Form' },
		{ name: 'Edit Review of Systems Form' },
		{ name: 'Edit Medications Form' },
		{ name: 'Edit Allergies Form' },
		{ name: 'Edit New Complaint Form' },
	])
	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				py: 8,
			}}>
			<Container maxWidth="lg">
				<Typography sx={{ mb: 3 }} variant="h4">
					{title}
				</Typography>
				<Grid container spacing={3}>
					<Grid item lg={4} md={6} xs={12}>
						<SideNav side_nav_items={forms} />
					</Grid>
					<Grid item lg={8} md={6} xs={12}>
						<Card>
							<CardHeader subheader="" title="" />
							<Divider />
							<CardContent>
								<FormBuilder />
							</CardContent>
							<Divider />
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
									p: 2,
								}}>
								<Button color="primary" variant="contained">
									Save details
								</Button>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}
export default Settings
