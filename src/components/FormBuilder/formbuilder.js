import * as React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import EditForm from './EditForm'
import PatientMenu from '../Patient/PatientMenu'

export default function FormBuilder({ title }) {
	const handleSubmit = (values, actions) => {
		console.log(values)
		actions.setSubmitting(false)
	}
	const [zone, setZone] = React.useState({
		zone: 'Physical Exam',
		fields: [],
	})

	const formData = [
		{
			type: 'header',
			subtype: 'h1',
			label: 'formBuilder in React',
		},
		{
			type: 'paragraph',
			label: 'This is a demonstration of formBuilder running in a React project.',
		},
	]

	const [zones, setZones] = React.useState([
		{ zone: 'Physical Exam', fields: [] },
		{ zone: 'New Complaint', fields: [] },
		{ zone: 'New Plan', fields: [] },
		{ zone: 'New Diagnoses', fields: [] },
		{ zone: 'Review of Systems', fields: [] },
		{ zone: 'Demographics', fields: [] },
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
					{zone.zone}
				</Typography>
				<Grid container spacing={3}>
					<Grid item lg={4} md={6} xs={12}>
						<PatientMenu zones={zones} setZone={setZone} />
					</Grid>
					<Grid item lg={8} md={6} xs={12}>
						<Button variant="contained">Save</Button>
						<EditForm title={`Form Builder`} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}
