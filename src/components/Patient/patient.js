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
import CustomTabs from '../basestyledcomponents/CustomTabs/CustomTabs'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import { FieldArray, Form, Formik } from 'formik'
import Allergies from './patientcomponents/allergies/allergies'
import Insurance from './patientcomponents/insurance/insurance'
import Medications from './patientcomponents/medications/medications'

const CustomFieldArray = ({ name, items, render }) => (
	<FieldArray name={name}>{() => <div>{items}</div>}</FieldArray>
)

function Patient({ title }) {
	const [tabs, setTabs] = React.useState([
		{
			tabName: 'Demographics',
			tabIcon: LocalLibraryIcon,
			tabContent: <Typography>Demographics</Typography>,
		},
		{
			tabName: 'Allergies',
			tabIcon: LocalLibraryIcon,
			tabContent: <Allergies />,
		},
		{
			tabName: 'Appointments',
			tabIcon: LocalLibraryIcon,
			tabContent: <Typography>Appointments</Typography>,
		},
		{
			tabName: 'Insurance',
			tabIcon: LocalLibraryIcon,
			tabContent: <Insurance />,
		},
		{
			tabName: 'Medications',
			tabIcon: LocalLibraryIcon,
			tabContent: (
				<Medications
					medications={[
						{
							name: 'Advil',
							dosage: '200mg',
							status: 'active',
							lastRefill: '',
							nextRefill: '',
							history: [
								{
									name: 'advil',
									dosage: '200mg',
									date_written: '',
									notes: 'OTC so who cares',
								},
							],
						},
					]}
				/>
			),
		},
		{
			tabName: 'Medical History',
			tabIcon: LocalLibraryIcon,
			tabContent: <Typography>Medical History</Typography>,
		},
		{
			tabName: 'Surgical History',
			tabIcon: LocalLibraryIcon,
			tabContent: <Typography>Surgical History</Typography>,
		},
		{
			tabName: 'Diagnoses',
			tabIcon: LocalLibraryIcon,
			tabContent: <Typography>Diagnoses</Typography>,
		},
	])

	return (
		<Formik
			initialValues={{
				demographics: [],
				allergies: [],
				appointments: [],
				insurances: [],
				medications: [],
				medical_history: [],
				surgical_history: [],
				diagnoses: [],
			}}
			onSubmit={(values) => {
				console.log(values)
			}}>
			{({ values }) => (
				<Form>
					<CustomTabs
						title="Patient Details"
						headerColor="primary"
						tabs={tabs.map((tab) => ({
							...tab,
							tabContent: (
								<CustomFieldArray
									name={tab.tabName
										.toLowerCase()
										.replace(/ /g, '_')}
									items={tab.tabContent}
								/>
							),
						}))}
					/>
					<Button type="submit" variant="contained" color="primary">
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	)
}
export default Patient
