import React from 'react'
import { Formik, FieldArray } from 'formik'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import EditField from './editfield'

const initialValues = {
	fields: [
		{
			type: 'text',
			label: 'First Name',
			options: [],
			zone: 'physical_exam',
		},
		{
			type: 'select',
			label: 'Country',
			options: [
				{ label: 'USA' },
				{ label: 'Canada' },
				{ label: 'Mexico' },
			],
			zone: 'physical_exam',
		},
	],
}

const ChatGPTFormBuilder = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {
				console.log(values)
			}}>
			{({ values, handleSubmit }) => (
				<Card>
					<CardContent>
						<FieldArray name="fields">
							{({ push, remove }) => (
								<>
									{values.fields.map((field, index) => (
										<EditField
											key={index}
											field={field}
											index={index}
											remove={remove}
											push={push}
										/>
									))}
									<Button
										variant="contained"
										color="primary"
										onClick={() =>
											push({
												type: 'text',
												label: '',
												options: [],
												zone: '',
											})
										}
										sx={{ marginTop: 2 }}>
										Add Field
									</Button>
								</>
							)}
						</FieldArray>
					</CardContent>
					<CardActions>
						<Button
							variant="contained"
							color="primary"
							onClick={handleSubmit}>
							Submit
						</Button>
					</CardActions>
				</Card>
			)}
		</Formik>
	)
}

export default ChatGPTFormBuilder
