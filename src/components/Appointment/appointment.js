import React, { useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import Card from '../basestyledcomponents/Card/Card'
import { Wizard } from 'react-wizardry'
import 'react-wizardry/dist/react-wizardry.css'

export default function Appointment({ customForm }) {
	let { path } = useRouteMatch()
	let { id } = useParams()
	const [appointment, setAppointment] = useState({
		complaints: [],
		physicalexam: [],
		reviewofsystems: [],
		assessments: [],
		plan: [],
		summary: '',
	})
	const [section, setSection] = useState('complaints')
	const [activeStep, setActiveStep] = useState(0)

	// create a function that will render the correct component based on the view
	// this will be used in the switch statement belo
	return (
		<Card>
			<Wizard
				onFinish={(val) => console.log(val)}
				strict={false}
				pages={[
					{
						title: 'Complaints',
						fields: [],
					},
					{
						title: 'Physical Exam',
						fields: [],
					},
					{
						title: 'Review of Systems',
						fields: [],
					},
					{
						title: 'Assessment',
						fields: [],
					},
					{
						title: 'Summary',
						fields: [],
					},
				]}
			/>
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
