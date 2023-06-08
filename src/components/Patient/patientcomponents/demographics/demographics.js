import React from 'react'
import { Field } from 'formik'
import { makeStyles } from '@material-ui/core'
import Card from '../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../basestyledcomponents/Card/CardBody'
import CardIcon from '../../../basestyledcomponents/Card/CardIcon'
import LanguageIcon from '@material-ui/icons/Language'

import { TextField } from 'formik-mui'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 20,
	},
	formcontainer: {
		marginBottom: 15,
	},
	areaicon: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 15,
	},
	areatitletext: {
		padding: 20,
	},
})

const basicfields = [
	{
		name: 'details.first_name',
		label: 'First Name',
		type: 'text',
	},
	{
		name: 'details.last_name',
		label: 'Last Name',
		type: 'text',
	},
	{
		name: 'details.middle_name',
		label: 'Middle Name',
		type: 'text',
	},
	{
		name: 'ssn',
		label: 'SSN',
		type: 'text',
	},
	{
		name: 'details.date_of_birth',
		label: 'Date of Birth',
		type: 'date',
	},
	{ name: 'details.gender', label: 'Gender', type: 'text' },
	{
		name: 'details.address_one',
		label: 'Address 1',
		type: 'text',
	},
	{
		name: 'details.address_two',
		label: 'Address 2',
		type: 'text',
	},
	{
		name: 'details.city',
		label: 'City',
		type: 'text',
	},
	{
		name: 'details.state',
		label: 'State',
		type: 'text',
	},
	{
		name: 'details.zip',
		label: 'Zip',
		type: 'text',
	},
]

export default function Demographics() {
	const classes = useStyles()
	return (
		<Card>
			<CardHeader icon text={true}>
				<CardIcon color="primary">
					<LanguageIcon />
				</CardIcon>
			</CardHeader>
			<CardBody>
				{basicfields.map((field, index) => (
					<Field
						style={{ margin: '15px' }}
						InputLabelProps={{ shrink: true }}
						key={index}
						name={field.name}
						label={field.label}
						type={field.type}
						variant="standard"
						component={TextField}
						fullWidth
					/>
				))}
			</CardBody>
		</Card>
	)
}

/*
* 	<div>
					<BasicInfoForm />
			</div>
			<div>
					<AssignmentIcon />
					<Typography
						className={classes.areatitletext}
						variant='subtitle2'>
						Address
					</Typography>
			</div>
			<div>
					<AddressForm />
			</div>
			<div>
					<AssignmentIcon />
					<Typography
						className={classes.areatitletext}
						variant='subtitle2'>
						Contact Info
					</Typography>
			</div>
			<div>
					<ContactForm />
			</div>
*
*
* */
