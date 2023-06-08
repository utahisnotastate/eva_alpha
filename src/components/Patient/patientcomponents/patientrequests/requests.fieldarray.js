import React from 'react'
import './surgicalhistory.css'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Field, FieldArray, useFormikContext } from 'formik'

export default function RequestsFieldArray() {
	const { values } = useFormikContext()
	return (
		<FieldArray name="details.requests">
			{({ push, remove, form }) => {
				return (
					<div>
						<Button
							variant="contained"
							color="primary"
							onClick={() => push({})}>
							Add Request
						</Button>
						{values.requests && values.requests.length > 0
							? values.requests.map((request, index) => (
									<div key={index}>
										<Typography>{index}</Typography>
										<Field
											name={`requests.${index}.type`}
										/>
										<Field
											name={`requests.${index}.status`}
										/>
										<Field
											name={`requests.${index}.description`}
										/>
										<Button
											variant="contained"
											color="primary"
											onClick={() => remove(index)}>
											Remove
										</Button>
									</div>
							  ))
							: null}
					</div>
				)
			}}
		</FieldArray>
	)
}

/*
* <FieldArray name="details.requests">
			{({ push, remove, form }) => {
				return (
					<div>
						<Button
							variant="contained"
							color="primary"
							onClick={() => push({})}>
							Add Request
						</Button>
						{values.requests && values.requests.length > 0
							? values.requests.map((request, index) => (
									<div key={index}>
										<Typography>{index}</Typography>
										<Field
											name={`requests.${index}.type`}
										/>
										<Field
											name={`requests.${index}.status`}
										/>
										<Field
											name={`requests.${index}.description`}
										/>
										<Button
											variant="contained"
											color="primary"
											onClick={() => remove(index)}>
											Remove
										</Button>
									</div>
							  ))
							: null}
					</div>
				)
			}}
		</FieldArray>
*
* */
