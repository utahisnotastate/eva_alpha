import React from 'react'
import { FieldArray } from 'formik'
import EditField from './EditField'
import { TextField } from 'formik-mui'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// values[`${name}`]

export default function FormBuilderArrayField({ name, values }) {
	return (
		<FieldArray
			name={name}
			render={(arrayHelpers) => (
				<div>
					{values && values.length > 0 ? (
						values.map((friend, index) => (
							<div key={index}>
								<EditField
									component={TextField}
									name={`${name}.${index}.value`}
									label={friend.label}
								/>

								<button
									type="button"
									onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
								>
									-
								</button>

								<button
									type="button"
									onClick={() =>
										arrayHelpers.insert(index, '')
									} // insert an empty string at a position
								>
									+
								</button>
							</div>
						))
					) : (
						<Typography variant="h6">
							No fields yet. Add one from below
						</Typography>
					)}
					<Button onClick={() => arrayHelpers.push('')}>
						Add a Field
					</Button>
				</div>
			)}
		/>
	)
}
