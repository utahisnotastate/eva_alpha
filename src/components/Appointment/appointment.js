import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import Card from '../basestyledcomponents/Card/Card'
import { Wizard } from 'react-wizardry'
import 'react-wizardry/dist/react-wizardry.css'

export default function Appointment({ customForm }) {
	let { path } = useRouteMatch()
	let { id } = useParams()

	// create a function that will render the correct component based on the view
	// this will be used in the switch statement belo
	return (
		<Card>
			<Wizard
				onFinish={(val) => console.log(val)}
				strict={false}
				pages={[
					{
						title: 'Pre Appointment',
						fields: [
							{
								name: 'were here',
								label: 'About time',
								type: 'text',
							},
							{
								name: 'email',
								label: 'Email',
								type: 'email',
							},
						],
					},
					{
						title: 'Complaints',
						fields: [
							{
								name: 'complaints',
								label: 'Complaints',
								type: 'text',
							},
						],
					},
					{
						title: 'Physical Exam',
						fields: [
							{
								name: 'complaints',
								label: 'Complaints',
								type: 'text',
							},
						],
					},
					{
						title: 'Review of Systems',
						fields: [
							{
								name: 'complaints',
								label: 'Complaints',
								type: 'text',
							},
						],
					},
					{
						title: 'Assessment',
						fields: [
							{
								name: 'complaints',
								label: 'Complaints',
								type: 'text',
							},
						],
					},
					{
						title: 'Plan',
						fields: [
							{
								name: 'complaints',
								label: 'Complaints',
								type: 'text',
							},
						],
					},
					{
						title: 'Summary',
						fields: [
							{
								name: 'complaints',
								label: 'Complaints',
								type: 'text',
							},
						],
					},
				]}
			/>
		</Card>
	)
}
