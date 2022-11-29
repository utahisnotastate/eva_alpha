import React from 'react'
import { Field } from 'react-final-form'
import { Button } from '@mui/material'
import _ from 'lodash'

export default function NewItem({ fields, label, push }) {
	return (
		<Button
			onClick={() => {
				push(fields, {
					type: 'text',
					name: 'label',
					label: 'Label',
					component: 'input',
					placeholder: 'Label',
				})
			}}
			variant="contained">
			{label}
		</Button>
	)
}
