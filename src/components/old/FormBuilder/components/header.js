import React from 'react'
import { useDispatch } from 'react-redux'

import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import { Typography, ButtonGroup, Button } from '@mui/material'
import CardIcon from '../../../basestyledcomponents/Card/CardIcon'

export default function FormBuilderHeader({ title }) {
	const dispatch = useDispatch()
	return (
		<CardHeader>
			<CardIcon color={`primary`}>
				<Typography variant={`h6`}>{title}</Typography>
			</CardIcon>
		</CardHeader>
	)
}
