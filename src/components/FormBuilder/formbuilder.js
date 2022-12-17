import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Card from '../basestyledcomponents/Card/Card'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import EVAForm from './components/EVAForm'
import CardBody from '../basestyledcomponents/Card/CardBody'

export default function FormBuilder() {
	const dispatch = useDispatch()
	//const forms = useSelector((state) => state.forms)
	const forms = [
		{
			label: 'Registration',
			name: 'registration',
			fields: [
				{
					label: 'First Name',
					name: 'first_name',
					type: 'text',
					required: true,
					placeholder: 'First Name',
				},
			],
		},
		{
			label: 'Complaint',
			name: 'complaint',
			fields: [
				{
					label: 'Description',
					name: 'description',
					type: 'text',
					required: true,
					placeholder: 'Description',
				},
				{
					label: 'Location',
					name: 'location',
					type: 'text',
					required: true,
					placeholder: 'Location',
				},
			],
		},
		{
			label: 'Plan',
			name: 'plan',
			fields: [
				{
					label: 'Description',
					name: 'description',
					type: 'text',
					required: true,
					placeholder: 'Description',
				},
			],
		},
		{
			label: 'Assessment',
			name: 'assessment',
			fields: [
				{
					label: 'Description',
					name: 'description',
					type: 'text',
					required: true,
					placeholder: 'Description',
				},
			],
		},
		{
			label: 'Review of Systems',
			name: 'review_of_systems',
			fields: [
				{
					label: 'Description',
					name: 'description',
					type: 'text',
					required: true,
					placeholder: 'Description',
				},
			],
		},
		{
			label: 'Physical Exam',
			name: 'physical_exam',
			fields: [
				{
					label: 'Description',
					name: 'description',
					type: 'text',
					required: true,
					placeholder: 'Description',
				},
			],
		},
	]
	//const form = useSelector((state) => state.form)

	const form = useState({
		title: 'Appointment',
		name: 'appointment',
		inputs: [],
		fields: [],
	})

	const blankitem = {
		type: 'text',
		value: '',
		helperText: '',
		label: '',
		placeholder: '',
	}

	const handleFormSelect = (event) => {
		dispatch({ type: 'SET_FORM', form: event.target.value })
	}

	// <Chapters forms={forms} onSubmit={ontSubmit} />
	const onSubmit = async (values) => {
		console.log(values)
		window.alert(JSON.stringify(values, 0, 2))
	}

	return (
		<Card>
			<CardHeader>
				<h4>Form Builder</h4>
			</CardHeader>
			<CardBody>
				<EVAForm
					evaform={form}
					formName={`complaints`}
					handleSubmit={onSubmit}
				/>
			</CardBody>
		</Card>
	)
}
