import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormGenerator } from 'formik-generator-materialui'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Card from '../basestyledcomponents/Card/Card'

export default function FormBuilder() {
	const forms = useSelector((state) => state.forms)
	const formRef = useRef(null)

	return (
		<Card>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					minHeight: '100vh',
				}}>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Typography variant="h6">Forms</Typography>
					<Divider />
					<div>
						{forms && forms.length > 0
							? forms.map((form, index) => (
									<div
										key={index}
										onClick={(form) => {
											console.log(form.fields)
										}}>
										<Typography variant="body1">
											{form.form}
										</Typography>
										<Divider />
									</div>
							  ))
							: null}
					</div>
				</div>
				<div style={{ marginLeft: '15px' }}>
					<FormGenerator
						onSubmit={(values) => {
							console.log(values) // {fullname : "john", ...}
						}}
						fields={[
							{
								title: 'Complaints',
								path: 'complaints',
								typeField: 'arrayObject',
								subfields: [
									{
										title: 'Type',
										name: 'type',
										typeField: 'select',
										choices: [
											'text',
											'select',
											'checkbox',
											'radio',
											'textarea',
											'date',
											'time',
										],
									},
									{
										title: 'Label',
										name: 'label',
										typeField: 'text',
									},
								],
							},
						]}
						formRef={formRef}
						initialValues={{
							complaints: [],
						}}
						readOnly={false}
					/>
					<button onClick={() => formRef.current.submitForm()} />
				</div>
			</div>
		</Card>
	)
}
