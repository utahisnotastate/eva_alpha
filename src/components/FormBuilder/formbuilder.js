import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../components/basestyledcomponents/Card/Card'
import { Formik, Form, FieldArray, useFormikContext, useFormik } from 'formik'
import { TextField, Field } from 'formik-mui'
import Tabs from '@mui/material/Tabs'
import Tab from '@material-ui/core/Tab'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import EVAForm from './evaform'

export default function FormBuilder() {
	const forms = useSelector((state) => state.forms)

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
					<Typography variant="h6">Fields</Typography>
					<EVAForm />
				</div>
			</div>
		</Card>
	)
}
