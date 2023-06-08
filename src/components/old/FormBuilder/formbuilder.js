import React from 'react'
import { useDispatch } from 'react-redux'
import Card from '../../basestyledcomponents/Card/Card'
import CardBody from '../../basestyledcomponents/Card/CardBody'
import CustomForm from '../../FormBuilder/formbuilder'

export default function FormBuilder() {
	const dispatch = useDispatch()
	//const form = useSelector((state) => state.form)
	return (
		<Card>
			<CardBody>
				<CustomForm
					fields={fields}
					newitem={[]}
					customform={{
						label: 'Registration',
						name: 'registration',
						inputs: [
							{
								label: 'First Name',
								name: 'first_name',

								type: 'text',
								required: true,
								placeholder: 'First Name',
							},
						],
					}}
				/>
			</CardBody>
		</Card>
	)
}
