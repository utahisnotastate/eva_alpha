import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import style from '../../../basestyledcomponents/Table/contentAreas'
import { useFormikContext, FieldArray, Field } from 'formik'
import { TextField } from 'formik-mui'
import { Button } from '@mui/material'

const useStyles = makeStyles(style)

export default function Insurance() {
	const { values } = useFormikContext()

	return (
		<FieldArray name="insurances">
			{({ remove, push }) => (
				<div>
					{values.insurances && values.insurances.length > 0
						? values.insurances.map((insurance, index) => (
								<div
									key={index}
									style={{
										display: 'flex',
										flexDirection: 'row',
									}}>
									<Field
										style={{
											margin: '15px',
										}}
										InputLabelProps={{
											shrink: true,
										}}
										name={`insurances[${index}].company`}
										label={insurance.label}
										type={`text`}
										variant="standard"
										component={TextField}
										fullWidth
									/>
									<Field
										style={{
											margin: '15px',
										}}
										InputLabelProps={{
											shrink: true,
										}}
										name={`insurances[${index}].membernumber`}
										label={insurance.label}
										type={`textarea`}
										rows={4}
										variant="standard"
										component={TextField}
										fullWidth
									/>
									<Button
										color={`error`}
										variant={`contained`}
										onClick={() => remove(index)}>
										-
									</Button>
								</div>
						  ))
						: null}
					<Button
						color="primary"
						onClick={() => {
							push({ company: '', membernumber: '' })
						}}>
						Add New Insurance
					</Button>
				</div>
			)}
		</FieldArray>
	)
}
