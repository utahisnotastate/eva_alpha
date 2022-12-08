import React from 'react'
import { Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { Typography, Stack } from '@mui/material'
import { FieldArray } from 'react-final-form-arrays'
import ArrayFieldRow from '../FormBuilder/components/arrayfieldrow'

export default function Chapter({ name, step, push, fields }) {
	return (
		<div>
			<Typography variant={`body1`}>{step.title}</Typography>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="stretch"
				spacing={2}>
				{fields && fields.length > 0
					? fields.map((field, index) => (
							<ArrayFieldRow
								key={index}
								name={`${name}.${index}`}
								index={index}
								fields={fields}
								push={push}
							/>
					  ))
					: null}
			</Stack>
			<FieldArray name={name}>
				{({ fields }) => (
					<div>
						{fields.map((name, index) => (
							<div key={index}>
								<Field
									name={`${name}.value`}
									component="input"
									type="text"
									label={`${name}.label`}
								/>
							</div>
						))}
					</div>
				)}
			</FieldArray>
		</div>
	)
}

/*
* <NewItem
							inputs={inputs}
							push={push}
							blankitem={blankitem}
						/>
* */
