import React from 'react'
import { Field, Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { TextField, Select } from 'mui-rff'
import { Button, Stack, Typography, MenuItem } from '@mui/material'
import Condition from '../../basestyledcomponents/Inputs/finalformmui/conditioninput'
import CardFooter from '../../basestyledcomponents/Card/CardFooter'

export default function EVASelect({ name, options }) {
	return (
		<Field name={`${name}.type`} component="select">
			<option />
			{options && options.length > 0
				? options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
				  ))
				: null}
		</Field>
	)
}
