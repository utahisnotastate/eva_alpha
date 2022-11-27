import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/basestyledcomponents/Card/Card'
import Tabs from '@mui/material/Tabs'
import Tab from '@material-ui/core/Tab'
import { Typography } from '@mui/material'

export default function FormBuilder() {
	const [forms, setForms] = useState([
		{ form: 'registration', fields: [] },
		{ form: 'scheduling', fields: [] },
		{ form: 'complaints', fields: [] },
		{ form: 'assessments', fields: [] },
	])
	const [tabs, setTabs] = useState(0)
	const [form, setForm] = useState('')
	const [fields, setFields] = useState([])
	return (
		<Card>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Typography>
					{forms && forms.length > 0
						? forms.map((form, index) => (
								<Typography key={index}>{form.form}</Typography>
						  ))
						: null}
				</Typography>
			</div>
			<div>
				<Typography>Form</Typography>
				<Typography>Fields</Typography>
			</div>
		</Card>
	)
}
