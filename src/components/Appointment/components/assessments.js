import * as React from 'react'
import { FieldArray, useFormikContext, Field } from 'formik'
import { TextField } from 'formik-mui'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

export default function Assessments() {
	const { values } = useFormikContext()
	return (
		<FieldArray name={'assessments'}>
			{({ push, remove }) => (
				<div>
					{values.assessments && values.assessments.length > 0 ? (
						values.assessments.map((assessment, index) => (
							<Field
								key={index}
								component={TextField}
								name={`assessments.${index}.value`}
								label={assessment.label}
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

