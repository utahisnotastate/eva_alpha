import * as React from 'react'
import { FieldArray, useFormikContext, Field } from 'formik'
import { TextField } from 'formik-mui'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

export default function PhysicalExam() {
	const { values } = useFormikContext()
	return (
		<FieldArray name={'physical_exam'}>
			{({ push, remove }) => (
				<div>
					{values.physical_exam && values.physical_exam.length > 0 ? (
						values.physical_exam.map((exam, index) => (
							<Field
								key={index}
								component={TextField}
								name={`physical_exam.${index}.value`}
								label={exam.label}
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
