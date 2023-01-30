import * as React from 'react'
import { Button, FormGroup, TextField, Typography } from '@material-ui/core'
import { FieldArray } from 'formik'

export default function OptionsFieldArray({ name, options }) {
	return (
		<FieldArray name={name}>
			{({ push, remove }) => (
				<>
					{options && options.length > 0 ? (
						options.map((option, index) => (
							<FormGroup key={index}>
								<TextField
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
									onClick={() =>
										push({ value: '', label: '' })
									}>
									+
								</Button>
							</FormGroup>
						))
					) : (
						<Typography variant="body1">No options</Typography>
					)}
				</>
			)}
		</FieldArray>
	)
}
