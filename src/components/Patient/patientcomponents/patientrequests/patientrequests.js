import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import style from '../../../basestyledcomponents/Table/contentAreas'
import RequestTimeLine from '../../../PatientRequests/TimeLine/timeline'
import Card from '../../../basestyledcomponents/Card/Card'
import CardBody from '../../../basestyledcomponents/Card/CardBody'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import CardFooter from '../../../basestyledcomponents/Card/CardFooter'
import { useFormikContext, FieldArray } from 'formik'
import RequestsCollapsibleTable from './requests.collapsibletable'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardTravel from '@material-ui/icons/CardTravel'
import Build from '@material-ui/icons/Build'

const useStyles = makeStyles(style)

export default function PatientRequests() {
	const { values } = useFormikContext()
	const classes = useStyles()
	const [stories, setStories] = useState([
		{
			// First story
			inverted: false,
			badgeColor: 'danger',
			badgeIcon: CardTravel,
			title: 'Medication Refill',
			titleColor: 'danger',
			body: <p>BODY!!</p>,
		},
		{
			// Second story
			inverted: true,
			badgeColor: 'success',
			badgeIcon: Build,
			title: 'Build & Launch',
			titleColor: 'success',
			body: <p>Body</p>,
		},
		{
			// Third story
			inverted: false,
			badgeColor: 'info',
			badgeIcon: CardTravel,
			title: 'Travel',
			titleColor: 'info',
			body: <p>Body</p>,
		},
	])
	const requests = [
		{
			type: 'Medication Refill',
			status: 'In Progress',
			description: 'This is the description',
			updates: [
				{
					update: 'This is the update',
					time: '1/1/2020',
					notes: 'This is the notes',
				},
				{
					update: 'This is the update',
					time: '1/1/2020',
					notes: 'notre',
				},
				{
					update: 'This is the update',
					time: '1/1/2020',
					notes: '234234',
				},
				{
					update: 'This is the update',
					time: '1/1/2020',
					notes: 'skdjfisjdfkjs',
				},
			],
		},
		{
			type: 'Adverse Event',
			status: 'Urgent',
			description: 'This is the Adverse description',
			updates: [
				{ update: 'This is the 2 update', time: '1/1/2020' },
				{
					update: 'This is the 2 update',
					time: '1/1/2020',
					notes: 'Notes 2 index 1',
				},
				{
					update: 'This is the 2 update',
					time: '1/1/2020',
					notes: 'Notes 2 index 2',
				},
				{
					update: 'This is the 2 update',
					time: '1/1/2020',
					notes: 'Notes 2 index 3',
				},
				{},
			],
		},
		{
			type: 'Health Questions',
			status: 'Completed',
			description: 'This is the  description of the health question',
			updates: [
				{ update: 'This is the update', time: '1/1/2020' },
				{
					update: 'This is the 3 update',
					time: '1/2/2020',
					notes: 'this is note 3 index 1',
				},
				{
					update: 'This is the 3 update',
					time: '1/3/2020',
					notes: 'this is note 3 index 2',
				},
				{
					update: 'This is the 3 update',
					time: '1/4/2020',
					notes: 'this is note 3 index 3',
				},
			],
		},
	]

	return (
		<Card>
			<CardHeader color="primary">
				<Typography variant="h4" gutterBottom>
					Patient Requests
				</Typography>
			</CardHeader>
			<CardBody>
				<div>
					<Typography variant="h6" gutterBottom>
						TYPE
					</Typography>
					<Typography variant="h6" gutterBottom>
						STATUS
					</Typography>
					<RequestTimeLine stories={stories} />
				</div>
			</CardBody>
			<CardFooter>
				<Button color="primary" variant="contained">
					Add Request
				</Button>
			</CardFooter>
		</Card>
	)
}
