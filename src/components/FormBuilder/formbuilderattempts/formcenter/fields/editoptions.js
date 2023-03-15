import * as React from 'react'
import Button from '@mui/material/Button'
import { TextField } from 'formik-mui'
import Typography from '@mui/material/Typography'
import { Formik, Form, FieldArray, useFormikContext, Field } from 'formik'

export default function EditOptions({ field, name }) {
	return (
		<FieldArray name={name} style={{ width: '100%' }}>
			{({ move, swap, remove, push, insert, unshift, pop, form }) => {
				return (
					<div>
						<Typography>Options</Typography>
						{field.options.map((option, index) => (
							<div
								key={index}
								style={{
									display: 'flex',
									flexDirection: 'row',
								}}>
								<Field
									component={TextField}
									name={`${name}.${index}.label`}
									label={`Label`}
									margin={`normal`}
									style={{ flexGrow: 2 }}
									fullWidth
								/>
								<div>
									<Button
										onClick={() => remove(index)}
										color={`error`}
										variant={`contained`} // remove a friend from the list
									>
										X
									</Button>
									<Button
										onClick={() =>
											push(index, { label: '' })
										} // insert an empty string at a position
										variant={`contained`}>
										+
									</Button>
								</div>
							</div>
						))}
					</div>
				)
			}}
		</FieldArray>
	)
}
