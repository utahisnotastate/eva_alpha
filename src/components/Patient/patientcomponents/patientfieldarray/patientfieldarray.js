import React from 'react'

import { Field, FieldArray, useFormikContext } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from 'formik-mui'
import Button from '@mui/material/Button'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 20,
	},
	formcontainer: {
		marginBottom: 15,
	},
	areaicon: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 15,
	},
	areatitletext: {
		padding: 20,
	},
})

export default function PatientFieldArray({name}) {
	const { values } = useFormikContext()

	return (
		<FieldArray name={name}>
			{({ remove, push }) => (
				<div>
					{values.name && values.name.length > 0
						? values.name.map((item, index) => (
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
									name={`${name}[${index}].value`}
									label={item.label}
									type={item.type || 'text'}
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
									name={`allergies[${index}].notes`}
									label={`Notes`}
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
							push({ allergy: '', notes: '' })
						}}>
						Add New Allergy
					</Button>
				</div>
			)}
		</FieldArray>
	)
}


