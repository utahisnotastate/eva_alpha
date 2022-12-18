import React from 'react'
import { Field, Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { TextField, Select } from 'mui-rff'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Condition from '../../basestyledcomponents/Inputs/finalformmui/conditioninput'
import CardFooter from '../../basestyledcomponents/Card/CardFooter'

export default function EVASelect({ name, options }) {
	return (
		<Select name={`${name}.type`}>
			<option />
			{options && options.length > 0
				? options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
				  ))
				: null}
		</Select>
	)
}
