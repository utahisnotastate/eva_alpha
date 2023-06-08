import * as React from 'react'
import { FieldArray, useFormikContext, Field } from 'formik'
import { TextField } from 'formik-mui'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

export default function Plans() {
	const { values } = useFormikContext()
	return (
		<FieldArray name={'plans'}>
			{({ push, remove }) => (
				<div>
					{values.plans && values.plans.length > 0 ? (
						values.plans.map((plan, index) => (
							<Field
								key={index}
								component={TextField}
								name={`plans.${index}.value`}
								label={plan.label}
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
