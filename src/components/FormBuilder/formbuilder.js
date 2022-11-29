import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Typography,
	Divider,
	Select,
	FormControl,
	MenuItem,
} from '@mui/material'
import Card from '../basestyledcomponents/Card/Card'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import CardBody from '../basestyledcomponents/Card/CardBody'
import CardFooter from '../basestyledcomponents/Card/CardFooter'

import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import NewItem from './newitem'

import _ from 'lodash'
import Button from '@mui/material/Button'

export default function FormBuilder() {
	const forms = useSelector((state) => state.forms)

	const onSubmit = async (values) => {
		console.log(values)
		window.alert(JSON.stringify(values, 0, 2))
	}
	return (
		<Card>
			<CardHeader color="primary">
				<Typography variant="h4" component="h4">
					Form Builder
				</Typography>
			</CardHeader>
			<CardBody>
				<FormControl fullWidth>
					<Select
						native
						value={''}
						onChange={(e) => {
							console.log(e.target.value)
						}}>
						<option aria-label="None" value="" />
						{forms &&
							forms.length > 0 &&
							forms.map((form, index) => (
								<MenuItem key={index} value={form}>
									{form.form}
								</MenuItem>
							))}
					</Select>
				</FormControl>
			</CardBody>
			<CardFooter>
				<Button color="primary">Save</Button>
			</CardFooter>
		</Card>
	)
}
