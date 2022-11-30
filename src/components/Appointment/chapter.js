import React from 'react'
import { Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { Typography } from '@mui/material'
import { FieldArray } from 'react-final-form-arrays'
import ArrayFieldRow from '../FormBuilder/components/arrayfieldrow'
import NewItem from '../FormBuilder/newitem'

export default function Chapter({ name, step, push }) {
	return (
		<div>
			<Typography variant={`body1`}>{step.title}</Typography>
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
