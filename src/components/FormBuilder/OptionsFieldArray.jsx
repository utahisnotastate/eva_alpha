import * as React from 'react'
import { Button, FormGroup, Typography } from '@material-ui/core'
import { FieldArray, Field } from 'formik'
import { TextField } from 'formik-material-ui'

export default function OptionsFieldArray({ name, options }) {
	return (
		<FieldArray name={name}>
			{({ push, remove }) => (
				<>
					{options && options.length > 0 ? (
						options.map((option, index) => (
							<FormGroup key={index}>
								<Field
									component={TextField}
									label={`Label`}
									name={`${name}[${index}].label`}
								/>
								<Button
									type="button"
									onClick={() => remove(index)}>
									-
								</Button>
								<Button
									type="button"
									onClick={() => push({ label: '' })}>
									+
								</Button>
							</FormGroup>
						))
					) : (
						<Typography
							variant="body1"
							onClick={() => push({ label: '' })}>
							Add options
						</Typography>
					)}
				</>
			)}
		</FieldArray>
	)
}
