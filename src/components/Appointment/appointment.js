import React, { useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { Typography } from '@mui/material'
import Card from '../basestyledcomponents/Card/Card'
import CardBody from '../basestyledcomponents/Card/CardBody'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import EVAStepper from './EVAStepper'
import { Field } from 'react-final-form'
import EVADynamicForm from './components/EVADynamicForm'
import 'react-wizardry/dist/react-wizardry.css'
import EVAFieldArray from './components/EVAFieldArray'

export default function Appointment() {
	let { path } = useRouteMatch()
	let { id } = useParams()
	const [appointment, setAppointment] = useState({})
	const [section, setSection] = useState('complaints')
	const [activeStep, setActiveStep] = useState(0)

	const handleSubmit = (values) => {
		console.log(values)
	}
	const { clinical_data } = appointment
	// create a function that will render the correct component based on the view
	// this will be used in the switch statement belo
	return (
		<Card>
			<EVAStepper
				sections={section}
				setActiveStep={setActiveStep}
				activeStep={activeStep}
			/>
			<CardBody>
				<EVADynamicForm
					handleSubmit={handleSubmit}
					initialValues={clinical_data}>
					<EVAFieldArray name={'complaints'} />
				</EVADynamicForm>
			</CardBody>
			<CardFooter>
				<Typography variant="h4" component="h4"></Typography>
			</CardFooter>
		</Card>
	)
}

/*

<Tabs>
							<Tab label="Complaints" />
							<Tab label="Assessments" />
							<Tab label="Plans" />
							<Tab label={`Review of Systems`} />
							<Tab label={`Physical Exam`} />
							<Tab label={`Summary`} />
						</Tabs>
<Form
			onSubmit={handleSubmit}
			initialValues={forms}
			mutators={{
				// potentially other mutators could be merged here
				...arrayMutators,
			}}
			render={({ handleSubmit, pristine, invalid, form }) => (
				<form onSubmit={handleSubmit}>
					<Wizard
						noPageTitle
						onFinish={(val) => console.log(val)}
						strict={false}
						pages={forms}
					/>
				</form>
			)}
		/>


<Card>
					<CardHeader>
						<Typography variant="body1">Card Header</Typography>
					</CardHeader>
					<CardBody>
						<Wizard
							noPageTitle
							onFinish={(val) => console.log(val)}
							strict={false}
							pages={steps}
						/>
					</CardBody>
					<CardFooter>
						<Typography variant="body1">Card Footer</Typography>
					</CardFooter>
				</Card>
 * <EVAStepper steps={steps} setActiveStep={setActiveStep} />
 *
 * */
