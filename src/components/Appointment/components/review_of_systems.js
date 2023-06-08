import * as React from 'react'
import { FieldArray, useFormikContext, Field } from 'formik'
import { TextField } from 'formik-mui'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

export default function ReviewOfSystems() {
	const { values } = useFormikContext()
	return (
		<FieldArray name={'review_of_systems'}>
			{({ push, remove }) => (
				<div>
					{values.review_of_systems &&
					values.review_of_systems.length > 0 ? (
						values.review_of_systems.map((system, index) => (
							<Field
								key={index}
								component={TextField}
								name={`review_of_systems.${index}.value`}
								label={system.label}
								variant="outlined"
								fullWidth
								InputProps={{
									endAdornment: (
										<div style={{ display: 'flex' }}>
											<IconButton
												onClick={() => push('')}
												aria-label="add">
												<AddIcon />
											</IconButton>
											<IconButton
												onClick={() => remove(index)}
												aria-label="delete">
												<DeleteIcon />
											</IconButton>
										</div>
									),
									notched: true,
								}}
							/>
						))
					) : (
						<IconButton onClick={() => push('')} aria-label="add">
							<AddIcon />
						</IconButton>
					)}
				</div>
			)}
		</FieldArray>
	)
}
