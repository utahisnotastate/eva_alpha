import React from 'react'
import { useDispatch } from 'react-redux'

import CardHeader from '../../basestyledcomponents/Card/CardHeader'
import { Typography, ButtonGroup, Button } from '@mui/material'
import CardIcon from '../../basestyledcomponents/Card/CardIcon'

export default function FormBuilderHeader({ forms, title }) {
	const dispatch = useDispatch()
	return (
		<CardHeader>
			<CardIcon color={`primary`}>
				<Typography variant={`h6`}>{title}</Typography>
			</CardIcon>
			<Typography variant="body1">{title}</Typography>
			<ButtonGroup variant={`text`}>
				{forms && forms.length > 0
					? forms.map((form, index) => (
							<Button
								key={index}
								onClick={() => {
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
