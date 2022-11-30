import React, { useState } from 'react'
import Card from '../basestyledcomponents/Card/Card'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import CardBody from '../basestyledcomponents/Card/CardBody'
import CardFooter from '../basestyledcomponents/Card/CardFooter'

import { useParams, useRouteMatch } from 'react-router-dom'
import EVAStepper from './EVAStepper'
import { useSelector } from 'react-redux'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { useDispatch } from 'react-redux'
import { Wizard } from 'react-wizardry'
import 'react-wizardry/dist/react-wizardry.css'

export default function Appointment() {
	let { path } = useRouteMatch()
	let { id } = useParams()
	const dispatch = useDispatch()
	const forms = useSelector((state) => state.forms)
	const [activeStep, setActiveStep] = useState({
		title: 'Complaints',
		form: 'complaints',
		fields: [],
		inputs: [],
	})

	const [steps, setSteps] = useState([
		{ title: 'Complaints', form: 'complaints', fields: [], inputs: [] },
		{ title: 'Assessments', form: 'assessments', fields: [], inputs: [] },
		{ title: 'Plans', form: 'plans', fields: [], inputs: [] },
		{
			title: 'Physical Exam',
			form: 'physicalexam',
			fields: [],
			inputs: [],
		},
		{
			title: 'Review of Systems',
			form: 'reviewofsystems',
			fields: [],
			inputs: [],
		},
		{ title: 'Summary', form: 'summary', fields: [], inputs: [] },
	])

	const handleSubmit = (values) => {
		console.log(values)
	}
	// create a function that will render the correct component based on the view
	// this will be used in the switch statement below

	return (
		<Form
			onSubmit={(values) => console.log(values)}
			initialValues={activeStep}
			mutators={{
				// potentially other mutators could be merged here
				...arrayMutators,
			}}
			render={({ handleSubmit, pristine, invalid, form }) => (
				<Card>
					<CardHeader>
						<EVAStepper
							steps={steps}
							setActiveStep={setActiveStep}
						/>
					</CardHeader>
					<Wizard
						noPageTitle
						onFinish={(val) => console.log(val)}
						strict={false}
						pages={steps}
					/>
				</Card>
			)}
		/>
	)
}

/*
 * <EVAStepper steps={steps} setActiveStep={setActiveStep} />
 *
 * */
