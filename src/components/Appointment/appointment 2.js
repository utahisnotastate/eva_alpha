import React, { useState } from 'react'
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	Tabs,
	Tab,
	Button,
	Typography,
} from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Form, Field } from 'formik'
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

const renderTabContent = (zone) => {
	const ZoneComponent = zones.find((z) => z.zone === zone)?.component
	return ZoneComponent ? <ZoneComponent /> : null
}

const Appointment = () => {
	const [activeTab, setActiveTab] = useState(0)
	const currentZone = zones[activeTab].zone

	const handleFormSubmit = (values) => {
		console.log('Form data:', values)
	}

	const handleTabChange = (event, newValue) => {
		setActiveTab(newValue)
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
						/>
						<CardContent>
							<Box sx={{ mb: 2 }}>
								<Tabs
									value={activeTab}
									onChange={handleTabChange}
									centered
									indicatorColor="primary"
									textColor="primary">
									{zones.map((zone, index) => (
										<Tab key={index} label={zone.label} />
									))}
								</Tabs>
							</Box>

							{renderTabContent(currentZone)}

							<Box
								sx={{
									mt: 2,
									display: 'flex',
									justifyContent: 'center',
								}}>
								<Button
									type="submit"
									variant="contained"
									color="primary">
									Submit
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Form>
			)}
		</Formik>
	)
}

export default Appointment
