import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CardHeader from '../../basestyledcomponents/Card/CardHeader'
import { Typography, ButtonGroup, Button } from '@mui/material'

export default function FormBuilderHeader({ forms, title }) {
	const dispatch = useDispatch()
	return (
		<CardHeader>
			<Typography variant="body1">{title}</Typography>
			<ButtonGroup variant={`text`}>
				{forms && forms.length > 0
					? forms.map((form, index) => (
							<Button
								key={index}
								color={`primary`}
								onClick={() => {
									console.log(form)
									dispatch({ type: 'SET_FORM', form })
								}}>
								{form.title}
							</Button>
					  ))
					: null}
			</ButtonGroup>
		</CardHeader>
	)
}
