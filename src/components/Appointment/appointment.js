import React, { useState } from 'react'
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Button,
	Typography,
	Tab,
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import { Formik, Form } from 'formik'
import Complaints from './components/complaints'
import Assessments from './components/assessments'
import PhysicalExam from './components/physical_exam'
import ReviewOfSystems from './components/review_of_systems'
import Plans from './components/plans'
import Summary from './components/summary'



const initialValues = {
	complaints: [],
	assessments: [],
	physical_exam: [],
	review_of_systems: [],
	plans: [],
	summary: '',
}

const zones = [
	{ zone: 'complaints', label: 'Complaints', component: Complaints },
	{ zone: 'assessments', label: 'Assessments', component: Assessments },
	{ zone: 'physical_exam', label: 'Physical Exam', component: PhysicalExam },
	{
		zone: 'review_of_systems',
		label: 'Review of Systems',
		component: ReviewOfSystems,
	},
	{ zone: 'plans', label: 'Plans', component: Plans },
	{ zone: 'summary', label: 'Summary', component: Summary },
]

const Appointment = () => {
	const [activeTab, setActiveTab] = useState('complaints')

	const handleFormSubmit = (values) => {
		console.log('Form data:', values)
	}

	return (
		<Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
			{({ values }) => (
				<Form>
					<Card>
						<CardHeader
							title={
								<Typography
									variant="h5"
									align="center"
									color="primary">
									Appointment
								</Typography>
							}
							style={{
								backgroundColor: '#3f51b5',
								color: '#fff',
							}}
						/>
						<CardContent>
							<TabContext value={activeTab}>
								<Box
									sx={{
										mb: 2,
										borderBottom: 1,
										borderColor: 'divider',
									}}>
									<TabList
										onChange={(event, newValue) =>
											setActiveTab(newValue)
										}
										sx={{
											display: 'flex',
											justifyContent: 'space-around',
										}}>
										{zones.map((zone) => (
											<Tab
												key={zone.zone}
												label={zone.label}
												value={zone.zone}
												style={{
													margin: '1rem',
												}}
											/>
										))}
									</TabList>
								</Box>
								{zones.map((zone) => (
									<TabPanel key={zone.zone} value={zone.zone}>
										<zone.component />
									</TabPanel>
								))}
							</TabContext>
						</CardContent>
						<CardActions>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth>
								Save
							</Button>
						</CardActions>
					</Card>
				</Form>
			)}
		</Formik>
	)
}

export default Appointment
