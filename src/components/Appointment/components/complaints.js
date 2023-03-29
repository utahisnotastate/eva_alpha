import * as React from 'react'
import { FieldArray, useFormikContext, Field } from 'formik'
import { TextField } from 'formik-mui'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

export default function Complaints() {
	const { values } = useFormikContext()
	return (
		<FieldArray name={'complaints'}>
			{({ push, remove }) => (
				<div>
					{values.complaints && values.complaints.length > 0 ? (
						values.complaints.map((complaint, index) => (
							<Field
								key={index}
								component={TextField}
								name={`complaints.${index}.value`}
								label={complaint.label}
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
