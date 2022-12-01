import React from 'react'
import { Typography } from '@mui/material'
import Card from '../basestyledcomponents/Card/Card'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import CardBody from '../basestyledcomponents/Card/CardBody'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import { useParams, useRouteMatch } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'
import Section from '../basestyledcomponents/wizard/section'
import { Form, Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'
import 'react-wizardry/dist/react-wizardry.css'

export default function Appointment() {
	let { path } = useRouteMatch()
	let { id } = useParams()
	const forms = useSelector((state) => state.forms)
	const handleSubmit = (values) => {
		console.log(values)
	}
	// create a function that will render the correct component based on the view
	// this will be used in the switch statement belo
	return (
		<Card>
			<CardHeader color="primary">
				<Typography variant="h4" component="h4">
					Appointment
				</Typography>
			</CardHeader>
			<CardBody>
				<FieldArray name={`complaints`}>
					{({ fields }) => (
						<div>
							{fields && fields.length > 0
								? fields.map((name, index) => (
										<div key={index}></div>
								  ))
								: null}
							<Button
								type="button"
								onClick={() =>
									fields.push({ firstName: '', lastName: '' })
								}>
								Add
							</Button>
						</div>
					)}
				</FieldArray>
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
