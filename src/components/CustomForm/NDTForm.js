import React, { useState } from 'react'
import {
	Typography,
	Card,
	CardHeader,
	CardActionArea,
	Button,
	TextField,
} from '@mui/material'
import CardBody from '../basestyledcomponents/Card/CardBody'

export default function NDTForm({ form: { fields, title } }) {
	return (
		<Card>
			<CardHeader title={title}>
				<Typography>{title}</Typography>
			</CardHeader>
			<CardBody>
				{fields && fields.length > 0
					? fields.map((field, index) => (
							<TextField
								key={index}
								name={`${field}.value`}
								label="Outlined"
								variant="outlined"
							/>
					  ))
					: null}
			</CardBody>
			<CardActionArea>
				<Button onClick={() => {}}>Add Item</Button>
			</CardActionArea>
		</Card>
	)
}
